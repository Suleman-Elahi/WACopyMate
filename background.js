// background.js
function copyToClipboard() {

    function displayTooltip() {
        // Create the tooltip element
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Number Copied to Clipboard';
        tooltip.style.position = 'fixed';
        tooltip.style.top = '50%';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translate(-50%, -50%)';
        tooltip.style.padding = '5px';
        tooltip.style.backgroundColor = 'lightgray';
        tooltip.style.border = '1px solid gray';
        tooltip.style.borderRadius = '3px';
        tooltip.style.zIndex = '9999';
        document.body.appendChild(tooltip);

        // Remove the tooltip after a delay
        setTimeout(() => {
            tooltip.remove();
        }, 2000); // Remove after 2 seconds
    }


    targetElement = document.querySelector('header span[dir="auto"]'); //get the phone number from header if the contact is unsaved


    if (targetElement) {

        text = targetElement.textContent;

        // Regular expressions to match phone number and person's name patterns
        const phoneNumberPattern = /\+\d+\s?\d+/;

        if (!phoneNumberPattern.test(text)) {

            targetElements = document.querySelectorAll('span[dir="auto"].copyable-text');

            for (i = 0; i < targetElements.length; i++) { //get the phone number from info bar for saved/known contacts

                console.log(targetElements[i].textContent);
                if (phoneNumberPattern.test(targetElements[i].textContent)) {
                    text = targetElements[i].textContent;
                }

            }

        }

    }

    // Retrieve the checkbox state from storage
    chrome.storage.sync.get('includeCountryCode', function(data) {
        var includeCountryCode = data.includeCountryCode;

        //      function doSomethingWithExternalVariable() {
        if (includeCountryCode) {
            // Include country code is checked
            phoneNumber = text.replace(/[^\d]/g, '');
        } else {
            // Include country code is not checked
            phoneNumber = text.replace(/^\+\d+\s|\D/g, '');
        }
        //}

        console.log(phoneNumber);
        // Create an offscreen textarea element and set its value to the desired text
        const textarea = document.createElement("textarea");
        textarea.style.cssText = "position:absolute;left:-9999px;top:-9999px;";
        textarea.value = phoneNumber;
        document.body.appendChild(textarea);

        // Programmatically select and copy the text from the textarea
        textarea.select();
        document.execCommand("copy");

        // Clean up and remove the textarea element
        document.body.removeChild(textarea);

        if (phoneNumber) {

            displayTooltip();
        }

    });


}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        function: copyToClipboard,
    });
});

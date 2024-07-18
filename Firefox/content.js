// content.js
function handleClick() {
    console.log("Icon clicked in tab");

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

    let targetElement = document.querySelector('header span[dir="auto"]'); //get the phone number from header if the contact is unsaved
    let text = '';
    if (targetElement) {

        text = targetElement.textContent;
        console.log("first if: " + text);
        // Regular expressions to match phone number and person's name patterns
        const phoneNumberPattern = /\+\d+\s?\d+/;

        if (!phoneNumberPattern.test(text)) {

            targetElements = document.querySelectorAll('span[dir="auto"].copyable-text');

            for (i = 0; i < targetElements.length; i++) { //get the phone number from info bar for saved/known contacts

                if (phoneNumberPattern.test(targetElements[i].textContent)) {
                    text = targetElements[i].textContent;
                }

            }
        }

    }

    browser.storage.sync.get('includeCountryCode', function(data) {
        var includeCountryCode = data.includeCountryCode;
        if (includeCountryCode) {
            // Include country code is checked
            phoneNumber = text.replace(/[^\d]/g, '');
        } else {
            // Include country code is not checked
            phoneNumber = text.replace(/^\+\d+\s|\D/g, '');
        }

        console.log(phoneNumber);

        navigator.clipboard.writeText(phoneNumber).then(function() {
            console.log("Title copied to clipboard: " + phoneNumber);
        }, function() {
            console.error("Failed to copy title to clipboard");
        });

        if (phoneNumber) {

            displayTooltip();
        }

    });
}

handleClick();

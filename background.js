// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        function: copyToClipboard,
    });
});

function copyToClipboard() {

    targetElement = document.querySelector('span[data-testid="conversation-info-header-chat-title"]');
    if (targetElement) {
        text = targetElement.textContent;

        // Regular expressions to match phone number and person's name patterns
        const phoneNumberPattern = /\+\d+\s?\d+/;
        const namePattern = /^[A-Za-z\s]+$/;

        if (phoneNumberPattern.test(text)) {
            console.log("The element contains a phone number.");

        } else {
            console.log("The element contains a person's name.");
            targetElement = document.querySelector('div.a4ywakfo.qt60bha0');
            if (targetElement) {
                text = targetElement.textContent;
            } else {

            }
        }

    }

    // Extract and copy the phone number
    const phoneNumber = text.replace(/[^\d]/g, '');
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
}
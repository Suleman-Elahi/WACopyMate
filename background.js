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

    // Find the target element
    const targetElement = document.querySelector('span[data-testid="conversation-info-header-chat-title"]');
    if (targetElement == '') {
        targetElement = document.querySelector('span[dir=auto]');
    }

    if (!targetElement) {
        console.error('Target element not found');
        return;
    }

    // Extract and copy the phone number
    const phoneNumber = targetElement.textContent.replace(/[^\d]/g, '');
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
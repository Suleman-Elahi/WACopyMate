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

    targetElement = document.querySelector('span[data-testid="conversation-info-header-chat-title"]');
    text = '';
    if (targetElement) {

        text = targetElement.textContent;
        console.log("first if: " + text);
        // Regular expressions to match phone number and person's name patterns
        const phoneNumberPattern = /\+\d+\s?\d+/;

        if (!phoneNumberPattern.test(text)) {

            targetElement = document.querySelector('div.a4ywakfo.qt60bha0');

            if (targetElement) {
                text = targetElement.textContent;
               console.log("2nd if" + text);
            }
        }

    }

    // Extract and copy the phone number
    const phoneNumber = text.replace(/[^\d]/g, '');
    console.log(phoneNumber);

    navigator.clipboard.writeText(phoneNumber).then(function() {
      console.log("Title copied to clipboard: " + phoneNumber);
    }, function() {
      console.error("Failed to copy title to clipboard");
    });

     if(phoneNumber) {
    
      displayTooltip();  
    }    
}

handleClick();
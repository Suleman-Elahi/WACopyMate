// background.js

function injectScript(tab) {
  
  browser.tabs.executeScript(tab.id, {
    file: "content.js"
  });
}

browser.browserAction.onClicked.addListener(injectScript);
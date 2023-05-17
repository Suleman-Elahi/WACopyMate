// background.js

function injectScript(tab) {
  console.log("Injecting script into tab: " + tab.id);
  
  browser.tabs.executeScript(tab.id, {
    file: "content.js"
  });
}

browser.browserAction.onClicked.addListener(injectScript);
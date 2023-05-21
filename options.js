// options.js
document.addEventListener('DOMContentLoaded', function() {
  var includeCountryCodeCheckbox = document.getElementById('includeCountryCode');
  
  // Load the checkbox state from storage
  chrome.storage.sync.get('includeCountryCode', function(data) {
    includeCountryCodeCheckbox.checked = data.includeCountryCode;
  });
  
  // Update the checkbox state in storage when it changes
  includeCountryCodeCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ 'includeCountryCode': includeCountryCodeCheckbox.checked });
  });
});

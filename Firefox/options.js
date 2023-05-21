// options.js
document.addEventListener('DOMContentLoaded', function() {
  var includeCountryCodeCheckbox = document.getElementById('includeCountryCode');
  console.log(includeCountryCodeCheckbox.textContent);
  if (includeCountryCodeCheckbox) {
    // Load the checkbox state from storage
    browser.storage.sync.get('includeCountryCode').then(function(data) {
      includeCountryCodeCheckbox.checked = data.includeCountryCode;
    });

    // Update the checkbox state in storage when it changes
    includeCountryCodeCheckbox.addEventListener('change', function() {
      browser.storage.sync.set({ 'includeCountryCode': includeCountryCodeCheckbox.checked });
    });
  } else {
    console.error('Element with id "includeCountryCode" not found.');
  }
});

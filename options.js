function getIterrupted() {
  return document.getElementById('interrupted');
}

function isInterruptedChecked() {
  return getIterrupted().checked;
}

function setInterruptedChecked(value) {
  getIterrupted().checked = value;
}

function saveOptions() {
  chrome.storage.sync.set({
    interrupted: isInterruptedChecked()
  });
}

function loadOptions() {
  chrome.storage.sync.get({
    interrupted: false
  }, options => {
    setInterruptedChecked(options.interrupted);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadOptions();
  getIterrupted().addEventListener('change', saveOptions);
});

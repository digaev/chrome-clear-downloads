function clearDownloads(items, options) {
  items.filter(item => {
    switch (item.state) {
    case 'complete':
      return true;
    case 'interrupted':
      return options.interrupted;
    }
    return false;
  }).forEach(item => {
    chrome.downloads.erase({ id: item.id });
  });
}

chrome.browserAction.onClicked.addListener(() => {
  chrome.downloads.search({}, items => {
    chrome.storage.sync.get({
      interrupted: false
    }, options => {
      clearDownloads(items, options);
    });
  });
});

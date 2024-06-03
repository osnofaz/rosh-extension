chrome.action.onClicked.addListener((tab) => {
    // Check if the URL is a regular web page and not a restricted URL
    if (tab.url.startsWith('http') || tab.url.startsWith('https')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          console.log("Hello from your Chrome extension!");
        }
      });
    } else {
      console.warn('Cannot execute script on this URL:', tab.url);
    }
  });

  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
  
const setLiveStatus = "false";

async function logStatus() {
    const response = await fetch("https://kick.com/api/v2/channels/roshtein");
    var element = document.getElementById("isLive");
    const data = await response.json();
    if (data.livestream != undefined) {
        setLiveStatus == "true";
        element.classList.remove("offline");
    } else {
        setLiveStatus == "false";
        element.classList.add("offline");
    }
  }
    
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: logStatus
    });
});


setInterval(logStatus, 1000);


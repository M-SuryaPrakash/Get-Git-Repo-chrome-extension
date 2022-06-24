//extension started
console.log("Get-Git-Repo extension started");


// Add context menu item
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "1",
    title: "Get Git Repo (download code)",
    contexts: ["all"],
    documentUrlPatterns: ["https://github.com/*"]
  });
});


// listener for context menu item
chrome.contextMenus.onClicked.addListener((info, tab)=>{
  
  let download_url = "pages/index.html?repoUrl="+tab.url;

  chrome.tabs.create({url: download_url});

});
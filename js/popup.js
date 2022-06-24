
let downloadbtn = document.getElementById("download-btn");

downloadbtn.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  let download_url = "pages/index.html?repoUrl="+tab.url;
  
  chrome.tabs.create({url: download_url});

});


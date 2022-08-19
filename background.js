chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  //
  console.log("tabs changed");
  console.log("tabId", tabId);
  console.log("changeInfo", changeInfo);
  console.log("tab", tab);
  console.log("tab.url", tab.url);
  //
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    //
    console.log("urlParameters", urlParameters);
    //

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});

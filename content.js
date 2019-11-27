console.log("Working")
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  
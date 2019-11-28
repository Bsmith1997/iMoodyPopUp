chrome.runtime.onMessage.addListener((msg, sender) => {
    // First, validate the message's structure.
    console.log("Received Message");
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    }
  });

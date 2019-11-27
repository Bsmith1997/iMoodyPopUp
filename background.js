chrome.runtime.onMessage.addListener((msg, sender) => {
    // First, validate the message's structure.
    console.log("Received Message");
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
        window.open("popup.html", "extension_popup", "width=500,height=500,status=no,scrollbars=yes,resizable=yes");
    }
  });

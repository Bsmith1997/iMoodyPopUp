var winID;
chrome.contextMenus.onClicked.addListener(function proccess_interested(info, tab){

    chrome.tabs.create({active: false}, function(newTab) {

    // After the tab has been created, open a window to inject the tab into it.
    chrome.windows.create(
        {
            tabId:      newTab.id,
            type:       "popup",
            url:        chrome.extension.getURL('a.html'),
            focused: true
        },function(window){
                 winID = newWindow.id;
          });
    });
})

chrome.extension.onMessage.addListener(function(Msg, sender, sendResponse) {

if(Msg.close_comment_win){
    chrome.windows.remove(winID, function(){});
}
});

function hide_win()
{
    chrome.extension.sendMessage({close_win: close}, function(response) {});
}
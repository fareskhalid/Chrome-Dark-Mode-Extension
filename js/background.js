var contextMenus = {};
contextMenus.createDarkMode = 
    chrome.contextMenus.create(
        {"title": "Dark Mode On/Off"},
        function(){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );
chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab){
    if(info.menuItemId === contextMenus.createDarkMode){
        chrome.tabs.executeScript({
            file: "js/darkmode.js"
        });
    }
}
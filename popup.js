/* This js file communicates with the popup.html */

document.addEventListener('DOMContentLoaded', ()=>{
    // This event listener waits until popup.html has completely loaded
    document.querySelector("#change_btn").addEventListener('click', onClick, false);

()=>{
    document.querySelector("#color_input").addEventListener('keyup', ()=>{
        document.querySelector("#color_title").textContent =  document.querySelector("#color_input").value
    })
}

let colorChoice = document.querySelector("#color_input").value

function onClick() {
    // Queries for the current active tab
    chrome.tabs.query({
        currentWindow: true, 
        active: true}, 
    // In this case, there's only one tab, the active one
    (tabs)=> {
        chrome.tabs.sendMessage(tabs[0].id, colorChoice)
        })
    }
}, false);

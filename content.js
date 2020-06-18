/* content.js communicates with the browser page  */


// Any time the 'Change' button is clicked
chrome.runtime.onMessage.addListener((req)=>{
   document.querySelectorAll('div').forEach((items)=>{
       items.style.background = req;
   }) ;
})
/* content.js communicates with the browser page  */

console.log("This extension is currently running");
// Any time the 'Change' button is clicked
chrome.runtime.onMessage.addListener((req)=>{
   document.querySelectorAll('div').forEach((items)=>{
       items.style.background = req;
   }) ;
})

// let para = document.getElementsByTagName('p');
// for(p of para) {
    // p.style.background = 'blue';
// }
    
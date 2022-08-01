/*
window.addEventListener('load', ()=> {
  let sitesToBlock = [
    'nytimes.com'
  ];
  let regexToMatchTLD = /\.[^.]+$/;
  const domain = location.hostname.replace(regexToMatchTLD, '');
  let href = window.location.href;
  for (let i = 0; i < sitesToBlock.length; i++) {
    if (href.includes(sitesToBlock[i])) {
      let domain = sitesToBlock[i].replace(regexToMatchTLD, '');
    }
  }
}, false);

*/

console.log("Loaded extension");


function blockRequest(details) {
   return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.facebook.com/*", "*://*.facebook.net/*"]}, ['blocking']);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.youtube.com/*"]}, ['blocking']);
}

updateFilters();
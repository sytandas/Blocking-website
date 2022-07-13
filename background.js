window.addEventListener('load', ()=> {
  let sitesToBlock = [
    'nytimes.com'
  ];
  let regexToMatchTLD = /\.[^.]+$/;
  const domain = location.hostname.replace(regexToMatchTLD, '');
  let href = window.location.href;
  for (let i = 0; i < siteToBlock.length; i++) {
    if (href.includes(sitesToBlock[i])) {
      let domain = sitesToBlock[i].replace(regxToMatchTLD, '');
    }
  }
}, false);
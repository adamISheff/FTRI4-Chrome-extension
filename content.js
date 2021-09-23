
// Pick random string for unsplash search
const randomize = () => {
  const choice = Math.floor(Math.random() * 4);
  switch(choice) {
    case 0:
      return 'apple';
    case 1:
      return 'fingers';
    case 2:
      return 'gfuel';
    case 3:
      return 'snake';
    default:
      return ''
  }
}

// Fetch and set new background from unsplash
const setNewBackground = () => {
  
  fetch(`https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}?${randomize()}`).then( data => {
    console.log('setting url...');
    console.log('url: ' + data.url);
    document.body.style.backgroundImage = `url(${data.url})`;         
  });

}

// Clone and add download button
const generateDownloadButton = () => {
  let googleSearchButton = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b");

  let downloadButton = googleSearchButton.cloneNode(true);
  downloadButton.value = 'Download Background Image';
  downloadButton.ariaLabel = 'Download Background Image';
  
  // Download Button listener to download background image
  downloadButton.addEventListener('click', (event) => {
    const link = document.createElement('a')
    link.href = document.body.style.backgroundImage.slice(5,-2);
    link.download = 'downloadedImage'
    searchButtonDiv.appendChild(link)
    console.log(link.href);
    link.click()
    searchButtonDiv.removeChild(link)
    alert('Your Unsplash Image is Ready for Download');
  });

  // Append cloned button to div containing search buttons
  let searchButtonDiv = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center");
  searchButtonDiv.appendChild(downloadButton);
}

// On Initial Load
window.addEventListener('load', (event) => {
  
  // Get and set background image on initial load
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundImage = setNewBackground();
  
  // Remove google logo image
  const imgs = document.getElementsByTagName('img')
  imgs[imgs.length - 2].remove();

  // Clone Google Search Button and edit text and onclick behavior
  generateDownloadButton();
});
 
// Get new images and update background image
setInterval(() => {
  setNewBackground();
}, 5000);


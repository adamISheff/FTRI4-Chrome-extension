
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

// On Initial Load
window.addEventListener('load', (event) => {
  
  // Get and set background image
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundImage = `url('https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}?${randomize()}')`;
  
  // Remove google logo image
  const imgs = document.getElementsByTagName('img')
  imgs[imgs.length - 2].remove();

  // Clone Google Search Button and edit text and onclick behavior
  let googleSearchButton = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b");

  let downloadButton = googleSearchButton.cloneNode(true);
  downloadButton.value = 'Download Background Image';
  downloadButton.ariaLabel = 'Download Background Image';
  
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
});


setInterval(() => {
  document.body.style.backgroundImage = `url('https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}?${randomize()}')`;
}, 8000);


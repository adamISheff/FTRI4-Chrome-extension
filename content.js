// Variable to store our slideshow and slideshow interval
let slideshow;
let slideshowInterval = 5000;
let searchWords = ['apple', 'fingers', 'gfuel', 'snake'];

// Pick random string for unsplash search
const randomize = () => {
  const choice = Math.floor(Math.random() * searchWords.length);
  return searchWords[choice];
}

// Fetch and set new background from unsplash
const setNewBackground = (searchText = randomize()) => {  
  console.log(searchText);
  fetch(`https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}?${searchText}`)
    .then( data => {
    console.log('setting url...');
    console.log('url: ' + data.url);
    document.body.style.backgroundImage = `url(${data.url})`;         
  });
}

// Add download background image button
const generateDownloadButton = () => {
  let googleSearchButton = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b");

  let downloadButton = googleSearchButton.cloneNode(true);
  downloadButton.value = 'Download Background Image';
  downloadButton.ariaLabel = 'Download Background Image';
  
  // Download Button listener to download background image
  downloadButton.addEventListener('click', (event) => {

    // Cancel default button click behavior
    event.preventDefault();

    // Get url of background image
    let href = document.body.style.backgroundImage.slice(5,-2);

    // Open new window with image for download
    window.open(href, 'Your Unsplash Image');
  });

  // Append cloned button to div containing search buttons
  let searchButtonDiv = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center");
  searchButtonDiv.appendChild(downloadButton);
}

// Add button to search for image in text input field
const generatePictureSearch = () => {
  let googleSearchButton = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b");
  let imageSearch = googleSearchButton.cloneNode(true);
  imageSearch.value = 'Get Your Image';
  imageSearch.ariaLabel = 'Get Your Image';
  
  // Image Search Button listener on click - get new image with search value
  imageSearch.addEventListener('click', (event) => {
    
    // Cancel default button click behavior
    event.preventDefault();
    
    // Get text input
    const searchText = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").value;
    
    // Update default search words
    searchWords = searchText.split(' ');

    stopSlideShow();
    setNewBackground(searchText);
  });

  // Append imageSearch button to div containing search buttons
  let searchButtonDiv = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center");
  searchButtonDiv.appendChild(imageSearch);
}

// Add button to restart slideshow
const generateStartSlideShowButton = () => {
  let googleSearchButton = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b");
  let startShowButton = googleSearchButton.cloneNode(true);
  startShowButton.value = 'The Slide Show Goes On';
  startShowButton.ariaLabel = 'The Slide Show Goes OnGet Your Image';
  
  // Image Search Button listener on click - get new image with search value
  startShowButton.addEventListener('click', (event) => {
    
    // Cancel default button click behavior
    event.preventDefault();
    
    // Start slideshow
    startSlideShow();    
  });

  // Append cloned button to div containing search buttons
  let searchButtonDiv = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center");
  searchButtonDiv.appendChild(startShowButton);
}

// Add button to stop slideshow
const generateStopSlideShowButton = () => {
  let googleSearchButton = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b");
  let stopSlideShowButton = googleSearchButton.cloneNode(true);
  stopSlideShowButton.value = 'Pause on This Image';
  stopSlideShowButton.ariaLabel = 'Pause on This Image';

  // Image Search Button listener on click - get new image with search value
  stopSlideShowButton.addEventListener('click', (event) => {
    
    // Cancel default button click behavior
    event.preventDefault();
    
    // Start slideshow
    stopSlideShow();    
  });

  // Append cloned button to div containing search buttons
  let searchButtonDiv = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center");
  searchButtonDiv.appendChild(stopSlideShowButton);
}

const startSlideShow = () => {
  if (!slideshow) {
    slideshow = setInterval(() => {
      setNewBackground();
    }, slideshowInterval);
  } 
}

const stopSlideShow = () => {
  // Clear current interval and reset slideshow
  clearInterval(slideshow);
  slideshow = null;
}

// On Initial Load
window.addEventListener('load', () => {
  
  // Get and set default background image on initial load
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1568059985329-4a7bdd1154de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=852&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGV8fHx8fHwxNjMyNDE2NjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1745')";

  // Remove google logo image
  const imgs = document.getElementsByTagName('img')
  imgs[imgs.length - 2].remove();

  // Remove text element in button area
  document.querySelector("body > div.L3eUgb > div.o3j99.qarstb > div > div").remove();
  
  // Add our download, picture, and start slideshow buttons
  generateDownloadButton();
  generatePictureSearch();
  generateStartSlideShowButton();
  generateStopSlideShowButton();
});

// Initialize slideshow
startSlideShow();

// import { createApi } from "unsplash-js";
// import fetch from 'node-fetch';

// Create unsplash API connection
// const unsplash = createApi({
//   accessKey: 'Pynh1zTqY-qTshUJA4rnNHhfS-gwml_-0cxGDnbbGCk',
//   fetch: fetch,
// });

// Function to get new random image URL 
// let imgURL;
// const getRandomImage = () => {
//     unsplash.photos.getRandom()
//       .then(result => imgURL = result.response.urls.full);
//   }

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

window.addEventListener('load', (event) => {
  // Remove google logo image and share button
  document.getElementById('hplogo').remove();
  const shareButton = document.getElementsByClassName('SuUcIb');
  shareButton[0].remove();

  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundImage = `url('https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}?${randomize()}')`;
});

setInterval(() => {
  document.body.style.backgroundImage = `url('https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}?${randomize()}')`;
}, 8000);
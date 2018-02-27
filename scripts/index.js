const API_KEY = 'AIzaSyDKlbq8bjC7T5p4XMjGJH30BTM4lO1EB-A';
//const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';


const store = {
  videos: []
};



// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {

  const settings = {
    url: BASE_URL,
    data: {
      q: `${searchTerm}`,
      key: API_KEY,
      part: 'snippet'
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
 
};

// fetchVideos('Bat', function(response){
//      console.log(response);
//  });
// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.

const decorateResponse = function(response) {
  let arr2 = [];
  response.items.map(items => {
    let obj = {};

    obj.items = items.id;
    obj.thumbnails = items.snippet.thumbnails;
    obj.title = items.snippet.title;

    arr2.push(obj);
  });
  // console.log(arr2);
  return arr2
};
// fetchVideos('Bat', function(response){
// let decorated =  decorateResponse(response);
// // console.log(response)
// });
// decorateResponse(test1)
//decorateResponse(fetchVideos('Bat', (name) => name));
//decorateResponse(test1)

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
  for(let i=0;i<video.length;i++){
    const element1 = video[i].title;
    return $(`<li>${element1}</li>`);
  }

};
fetchVideos('Bat', function(response){
  let decorated =  decorateResponse(response);
  // console.log(response)
  generateVideoItemHtml(decorated)
  });
// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});

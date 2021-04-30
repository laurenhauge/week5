// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// get a reference to the click me button 
let clickMeButton = document.querySelector(`.click-me`)

// event listener for click me button 
clickMeButton.addEventListener(`click`, async function(event){
let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
pageTitleElement.innerHTML = `Movies to watch!`
})

// get ref to lik to add a movie
let addMovieLink = document.querySelector(`.add-movie`)
addMovieLink.addEventListener(`click`, async function(event){
  // prevent link's default behaviors
  event.preventDefault()

  // Get a reference to the bulleted list of movies
let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>
`)
})

//get a reference to "zoom image button"
let zoomImageButton = document.querySelector(`.zoom-image`)

//event listener 
zoomImageButton.addEventListener(`click`, async function(event){
  
// Get a reference to the image
let image = document.querySelector(`img`)

// Add the `border-pink-500` class to the image element
image.classList.add(`border-pink-500`)

//make image larger
image.classList.toggle(`w-96`)
image.classList.toggle(`w-full`)
})

//reference to  "change image"
let changeImageButton = document.querySelector(`.change-image`)

//event listener
changeImageButton.addEventListener(`click`, async function(event){
  //get reference 
  let image = document.querySelector(`img`)

  image.setAttribute(`src`, `../images/grogu2.jpg`)
})

//reference 
let sayHiButton = document.querySelector(`.say-hi`)

//event listener 
sayHiButton.addEventListener(`click`, async function(event){
  // stop default behavior 
  event.preventDefault()

  //reference 
let firstNameInput = document.querySelector(`#first-name`)

//get value in first name input 
let firstName = firstNameInput.value 

let greetElement = document.querySelector(`.greet`)

if (firstName.length > 0){
//create a sentence to put in greet element 
let sentence = `Hi, ${firstName}`

greetElement.innerHTML = sentence
} else {
  greetElement.innerHTML = ``
}
})

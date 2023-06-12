// Global Constants
const apiKey = "asUHLzVEaxvgREuzPcAWjqhKcAPXTo4v"
const limit = 9
// const rating = g

/**
 * Update the DOM to display results from the Giphy API query.
 *
 * @param {Object} results - An array of results containing each item
 *                           returned by the response from the Giphy API.
 *
 */
function displayResults(results) {
  results.forEach(element => {
    let res = document.createElement('section');
    res.classList.add('display-results')
    let img = document.createElement('img')
    img.classList.add('gif-img');
    img.src = 'http://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=' + searchTerm;

    res.innerHTML += img.src
  });
  
}

/**
 * Make the actual `fetch` request to the Giphy API
 * and appropriately handle the response.
 *
 * @param {String} searchTerm - The user input text used as the search query
 *
 */
async function getGiphyApiResults(searchTerm) {
  const response = await fetch(searchTerm)
  const data = await response.json()
  return data.data
}


const searchform = document.getElementById(search-form)

/**
 * The function responsible for handling all form submission events.
 *
 * @param {SubmitEvent} event - The SubmitEvent triggered when submitting the form
 *
 */
async function handleFormSubmit(event) {

  event.preventDefault()
}

searchForm.addEventListener("submit", handleFormSubmit)

/**
 * Handle fetching the next set of results from the Giphy API
 * using the same search term from the previous query.
 *
 * @param {MouseEvent} event - The 'click' MouseEvent triggered by clicking the 'Show more' button
 *
 */
async function handleShowMore(event) {
  // YOUR CODE HERE
}

window.onload = function () {
  // YOUR CODE HERE
  // Add any event handlers here
  displayResults(results)
}


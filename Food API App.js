

let searchInput     = document.getElementById('input-field');
let searchButton    = document.getElementById('search-button');
let searchRandom    = document.getElementById('search-button-random');
let container       = document.getElementById('main-content');



// addEventListener & function for the search-inputs
searchButton.addEventListener('click', fetchData);

async function fetchData() {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInput.value);
        let data = await response.json();
        
        
        if (searchInput.value.trim() == "") {
            container.innerHTML = "<p>Please enter a search!</p>";
            return; // Stops the input field from fetching results
        }
        
            container.innerHTML = ''; // Resets the error message and let's new input-field accept a new search
            for(let index = 0; index < data.meals.length; index++) {
                
                // The content which appears on the page
                container.innerHTML += 
                `<a href="${data.meals[index].strYoutube}">
                <ul><li>${data.meals[index].strMeal}</li></ul>
                <img src="${data.meals[index].strMealThumb}">`;
        }
    }
    catch(message) {
        //Ger error-message när man inte får en träff
        throw new Error(container.innerHTML+=`<p>Sorry, no hits!</p>`);   
    }
}



// addEventListener & function for the random button and hits
searchRandom.addEventListener('click', fetchRandom);

async function fetchRandom() {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        let data = await response.json();

        container.innerHTML = ''; // Resets the error message and let's new input-field accept a new search
        for(let index = 0; index < data.meals.length; index++) {

            container.innerHTML += `<a href="${data.meals[index].strYoutube}">
            <ul><li>${data.meals[index].strMeal}</li></ul>
            <img src="${data.meals[index].strMealThumb}">`;
            
        } 

    }
    catch(message) {
        throw new Error(message);
        
    }
}

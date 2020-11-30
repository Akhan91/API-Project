

let searchInput     = document.getElementById('input-field');
let searchButton    = document.getElementById('search-button');
let searchRandom    = document.getElementById('search-button-random');
let container       = document.getElementById('main-content');




searchButton.addEventListener('click', fetchData);

async function fetchData() {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInput.value);
        let data = await response.json();
        
        
        if (searchInput.value.trim() == "") {
            container.innerHTML = "<p>Please enter a search!";
            return; // Stops the input field from fetching results
        }
        
            container.innerHTML = ''; // Resets the error message and let's new input-field accept a new search
        
            
            // noll-ställer innerHTML vid varje sökning
            container.innerHTML="";
            for(let index = 0; index < data.meals.length; index++) {
                
                // Det som visas på sidan.
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




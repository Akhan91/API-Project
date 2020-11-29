

let searchInput     = document.getElementById('input-field');
let searchButton    = document.getElementById('search-button');
let container       = document.getElementById('main-content');



searchButton.addEventListener('click', fetchData);

async function fetchData() {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInput.value);
        let data = await response.json();

        container.innerHTML="";
        for(let index = 0; index < data.meals.length; index++) {

            
            container.innerHTML += `<ul><li>${data.meals[index].strMeal}</li></ul>`;
            // console.log(data.meals.strMeal);
            console.log(data.meals[index].strMeal);
        }
            

    }
    catch(message) {
        throw new Error(message);
    }
}

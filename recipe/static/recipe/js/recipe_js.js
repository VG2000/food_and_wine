const cuisine = document.getElementById('chooseCuisine');

function filterByCuisine(e) {
console.log("hi")
const term = e.target.value.toUpperCase();
const recipes = document.querySelectorAll('.recipe-row');

recipes.forEach(recipe => {
    const cuisine = recipe.querySelector('.cuisine').innerText.toUpperCase();

    if(cuisine.indexOf(term) > -1) {
        recipe.style.display = 'table-row';
    } else {
        recipe.style.display = 'none';
    }
});

    // Clear country field
    cuisine.value = '';

}

// add event listeners
cuisine.addEventListener('change', filterByCuisine)
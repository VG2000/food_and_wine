const recipe_name = document.getElementById('txt_srch');
const cuisine = document.getElementById('chooseCuisine');
const meal_type = document.getElementById('chooseMealType');
const showAllBtn = document.getElementById('recipe-filter-btn');


// Filter by name
function filterByName(e) {
const term = e.target.value.toUpperCase();
const recipes = document.querySelectorAll('.recipe-row');

recipes.forEach(recipe => {
    const name = recipe.querySelector('.name').innerText.toUpperCase();

    if(name.indexOf(term) > -1) {
        recipe.style.display = 'table-row';
    } else {
        recipe.style.display = 'none';
    }
});

}

function filterByCuisine(e) {
const term = e.target.value.toUpperCase();
const recipes = document.querySelectorAll('.recipe-row');

recipes.forEach(recipe => {
    const name = recipe.querySelector('.cuisine').innerText.toUpperCase();

    if(name.indexOf(term) > -1) {
        recipe.style.display = 'table-row';
    } else {
        recipe.style.display = 'none';
    }
});

    // Clear country field
    cuisine.value = '';

}
function filterByMealType(e) {
const term = e.target.value.toUpperCase();
const recipes = document.querySelectorAll('.recipe-row');

recipes.forEach(recipe => {
    const meal_type = recipe.querySelector('.meal-type').innerText.toUpperCase();

    if(meal_type.indexOf(term) > -1) {
        recipe.style.display = 'table-row';
    } else {
        recipe.style.display = 'none';
    }
});
    // Clear country field
    meal_type.value = '';
}

// Show all
function showAll() {
    const recipes = document.querySelectorAll('.recipe-row');

recipes.forEach(recipe => {
     recipe.style.display = 'table-row';
});
    text.value = ''
}

// add event listeners
recipe_name.addEventListener('input', filterByName);
cuisine.addEventListener('change', filterByCuisine);
meal_type.addEventListener('change', filterByMealType);
showAllBtn.addEventListener('click',showAll );
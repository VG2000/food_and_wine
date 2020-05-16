const country = document.getElementById('chooseCountry');
const region = document.getElementById('chooseRegion');
const rating = document.getElementById('inputRating');
const text = document.getElementById('txt_srch');
const showAllBtn = document.getElementById('wine-filter-btn');

// Filter by country
function filterByCountry(e) {
const term = e.target.value.toUpperCase();
const wines = document.querySelectorAll('.wine-row');

wines.forEach(wine => {
    const country = wine.querySelector('.country').innerText.toUpperCase();

    if(country.indexOf(term) > -1) {
        wine.style.display = 'table-row';
    } else {
        wine.style.display = 'none';
    }
});

    // Clear country field
    country.value = '';

}
// Filter by region
function filterByRegion(e) {
const term = e.target.value.toUpperCase();
const wines = document.querySelectorAll('.wine-row');

console.log(wines)
wines.forEach(wine => {
    const region = wine.querySelector('.region').innerText.toUpperCase();

    if(region.indexOf(term) > -1) {
        wine.style.display = 'table-row';
    } else {
        wine.style.display = 'none';
    }
});

    // Clear region field
    region.value = '';


}
// Filter by rating
function filterByRating(e) {
const term = e.target.value.toUpperCase();
const wines = document.querySelectorAll('.wine-row');

wines.forEach(wine => {
    const rating = wine.querySelector('.rating');

    if(rating.indexOf(term) >= rating) {
        wine.style.display = 'table-row';
    } else {
        wine.style.display = 'none';
    }
});

    
}

// Filter by name
function filterByName(e) {
const term = e.target.value.toUpperCase();
const wines = document.querySelectorAll('.wine-row');

wines.forEach(wine => {
    const name = wine.querySelector('.name').innerText.toUpperCase();

    if(name.indexOf(term) > -1) {
        wine.style.display = 'table-row';
    } else {
        wine.style.display = 'none';
    }
});

}

// Show all
function showAll() {
    const wines = document.querySelectorAll('.wine-row');

wines.forEach(wine => {
     wine.style.display = 'table-row';
});
    text.value = ''
}

// Add event listeners
country.addEventListener('change', filterByCountry);
region.addEventListener('change', filterByRegion);
rating.addEventListener('input', filterByRating);
text.addEventListener('input', filterByName);
showAllBtn.addEventListener('click', showAll);



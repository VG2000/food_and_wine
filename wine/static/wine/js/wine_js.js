const country = document.getElementById('chooseCountry');
const region = document.getElementById('chooseRegion');
const rating = document.getElementById('inputRating');
const text = document.getElementById('txt_srch');
const retailer = document.getElementById('inputRetailer');
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

// Filter by retailer
function filterByRetailer(e) {
const term = e.target.value.toUpperCase();
const wines = document.querySelectorAll('.wine-row');

wines.forEach(wine => {
    const name = wine.querySelector('.retailer').innerText.toUpperCase();

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

// Table header sort
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("wineTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

    //   console.log(x.innerHTML.toLowerCase().replace('£',''))
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */

    //   Check for a number
        if (Number(x.innerHTML.toLowerCase().replace('£',''))) {
            console.log(x.innerHTML)
                if (dir == "asc") {
            if (Number(x.innerHTML.replace('£', '')) > Number(y.innerHTML.replace('£', ''))) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
            }
        } else if (dir == "desc") {
            if (Number(x.innerHTML.replace('£', '')) < Number(y.innerHTML.replace('£', ''))) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
            }
        }
            // Is not a number so do the text sort
        } else {
            if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
        }
      
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



// Add event listeners
country.addEventListener('change', filterByCountry);
region.addEventListener('change', filterByRegion);
rating.addEventListener('input', filterByRating);
text.addEventListener('input', filterByName);
retailer.addEventListener('input', filterByRetailer);
showAllBtn.addEventListener('click', showAll);



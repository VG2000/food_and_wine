
const showBtn = document.getElementById('showBtn');
const fetchBtn = document.getElementById('fetchAPI');

const english = document.getElementById('english');
const spanish = document.getElementById('spanish');

const number = document.getElementById('flash-num');
const url =window.location.href+'word/'



function getWord() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // need to make test for hide class to make sure that spanish shows and english is hiddem
        english.classList.remove('show');
        spanish.classList.remove('hide');
        spanish.innerText = data['spanish_word']
        english.innerText = data['english_word']
        number.value = `${data['id']}`
    }     
    );
}


function flipCard() {
    english.classList.toggle('show');
    spanish.classList.toggle('hide');
}

showBtn.addEventListener('click', flipCard);
fetchBtn.addEventListener('click', getWord);



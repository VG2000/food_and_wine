
const showBtn = document.getElementById('showBtn');
const fetchBtn = document.getElementById('fetchAPI');
const english = document.getElementById('english');
const spanish = document.getElementById('spanish');
const number = document.getElementById('flash-num');

const url ='http://127.0.0.1:8000/spanish/flashcards/word/'


function getWord() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // need to make test for hide class to make sure that spanish shows and english is hiddem
        english.classList.remove('show');
        spanish.classList.remove('hide');
        spanish.innerText = data['spanish_word']
        english.innerText = data['english_word']
        number.innerText = `FLASHCARD - #  ${data['id']}`
        console.log(data)
    }
        
    );
}

function flipCard() {
    english.classList.toggle('show');
    spanish.classList.toggle('hide');
}




showBtn.addEventListener('click', flipCard)
fetchBtn.addEventListener('click', getWord)


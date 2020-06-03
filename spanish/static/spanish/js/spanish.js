
const showBtn = document.getElementById('showBtn');
const fetchBtn = document.getElementById('fetchAPI');

const english = document.getElementById('english');
const spanish = document.getElementById('spanish');

const number = document.getElementById('flash-num');
const vgChkBox = document.getElementById('vgChkBox');
const saveBtn = document.getElementById('save');
// const url =window.location.href+'word/'
// const url = 'http://127.0.0.1:8000/spanish/flashcards/word/'

function getWord() {
    // check url
    const loc = window.location.href
    const pos = loc.lastIndexOf('/')
    
    console.log(pos)

    const url_part = loc.slice(0,pos)
    const url =url_part+'/word/'

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
    fetchBtn.blur();
};


function flipCard() {
    english.classList.toggle('show');
    spanish.classList.toggle('hide');
    showBtn.blur()
}

function getFocus(e) {
    if (e.keyCode === 32) {
        flipCard()
    } else if (e.keyCode === 13) {
       getWord();
    } else {
    };

};

function chkStatus() {
    if (number.value === '' || vgChkBox.checked === false) {
         event.preventDefault();
         vgChkBox.checked = false;
    }
};

showBtn.addEventListener('click', flipCard);
fetchBtn.addEventListener('click', getWord);
saveBtn.addEventListener('click', chkStatus);
document.addEventListener('keyup', getFocus);
  
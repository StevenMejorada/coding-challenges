const wrongLettersEl = document.getElementById("wrong-letters");
const wordEl = document.getElementById("word");
const popup = document.getElementById("popup-container");
const finalMessage = document.getElementById("final-message");
const playButton = document.getElementById("play-button");
const notification = document.getElementById("notification-container");


const figureParts = document.querySelectorAll('.figure-part');

// Words array
const correctLetters = [];
const wrongLetters = [];

// Generate a random word;

const words = ["programming", "application", "house"];

let selectedWord = words[Math.floor(Math.random()*words.length)];


// Display new word and letters
function displayWord(){
  wordEl.innerHTML = `
  ${selectedWord.split("").map(letter=>{
    return `<span class="letter">${correctLetters.includes(letter)? letter:""}</span>`
  }).join("")}
  `

  const innerWord = word.innerText.replace(/\n/g,"");

  if(innerWord===selectedWord){
    finalMessage.innerText = "Congratulations!";
    popup.style.display ="flex";
  }

}
// Show notification
function showNotification(){
  notification.classList.add("show");

  setTimeout(()=>{
    notification.classList.remove("show");
  },2000);
}

// Update wrong letters
function updateWrongLettersEl(){
  wrongLettersEl.innerHTML =`
  ${wrongLetters.length>0?"<p>Wrong</p>":""}
  ${wrongLetters.map(letter=>`<span>${letter}</span>`)}
  `;

  figureParts.forEach((part,index)=>{
    const errors = wrongLetters.length;

    if(index<errors){
      part.style.display ="block";
    } else{
      part.style.display = "none";
    }
  })

  if(figureParts.length===wrongLetters.length){
    finalMessage.innerText ="You failed!";
    popup.style.display ="flex";
  }
}
// Event Listener
window.addEventListener("keydown", e=>{
  if(e.keyCode>=65 && e.keyCode<=90){
    const letter = e.key;

    if(selectedWord.includes(letter)){
      if(!correctLetters.includes(letter)){
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else{
      if(!wrongLetters.includes(letter)){
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else{
        showNotification();
      }

    }
  }
})

playButton.addEventListener("click",()=>{
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random()*words.length)];
  displayWord();

  updateWrongLettersEl();

  popup.style.display= "none";

})

displayWord();
const characterEl = document.querySelector("#character");
const inputEl = document.querySelector("#input");
const submitEl = document.querySelector("#submit");
const resultEl = document.querySelector("#result");

const morseCode = {
  "Ab": ".-",
  "Bb": "-...",
  "Cb": "-.-.",
  "Db": "-..",
  "Eb": ".",
  "Fb": "..-.",
  "Gb": "--.",
  "Hb": "....",
  "Ib": "..",
  "Jb": ".---",
  "Kb": "-.-",
  "Lb": ".-..",
  "Mb": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
};


inputEl.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });

  

function getRandomCharacter() {
  const characters = Object.keys(morseCode);
  return characters[Math.floor(Math.random() * characters.length)];
}

function checkAnswer() {
    const character = characterEl.textContent;
    const answer = inputEl.value.toUpperCase();
  
    if (answer === morseCode[character]) {
      resultEl.textContent = "Correct!";
      resultEl.style.color = "green";
    } else {
      resultEl.textContent = `Incorrect! The correct answer was ${morseCode[character]}`;
      resultEl.style.color = "red";
    }
  
    // Update the character
    characterEl.textContent = getRandomCharacter();
  
    // Clear the input field
    inputEl.value = "";
  }


window.onload = function() {
   const input = document.getElementById("input");
   const output = document.getElementById("output");
   const convertButton = document.getElementById("convert");

   const morseCode = {
   "a": ".-",
   "b": "-...",
   "c": "-.-.",
   "d": "-..",
   "e": ".",
   "f": "..-.",
   "g": "--.",
   "h": "....",
   "i": "..",
   "j": ".---",
   "k": "-.-",
   "l": ".-..",
   "m": "--",
   "n": "-.",
   "o": "---",
   "p": ".--.",
   "q": "--.-",
   "r": ".-.",
   "s": "...",
   "t": "-",
   "u": "..-",
   "v": "...-",
   "w": ".--",
   "x": "-..-",
   "y": "-.--",
   "z": "--..",
   "0": "-----",
   "1": ".----",
   "2": "..---",
   "3": "...--",
   "4": "....-",
   "5": ".....",
   "6": "-....",
   "7": "--...",
   "8": "---..",
   "9": "----.",
   };

   convertButton.addEventListener("click", function () {
   const text = input.value;
   let result = "";
   for (const letter of text) {
      if (letter === " ") {
         result += "  ";
      } else {
         result += morseCode[letter.toLowerCase()] + " ";
      }
   }
   output.value = result;
   });
}
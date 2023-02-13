window.onload = function() {
    const sentences = [
        "to be or not to be",
        "the quick brown fox jumps over the lazy dog",
        "hello world",
        "how are you",
        "good morning"
      ];
      
      const morseCode = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----',
        ' ': ' '
      };
      
      const generateButton = document.querySelector("#generate-button");
      const sentenceText = document.querySelector("#sentence-text");
      const morseText = document.querySelector("#morse-text");
      const inputBox = document.querySelector("#input-box");
      const progressText = document.querySelector("#progress-text");
      
      let total = 0;
      let correct = 0;
      
      generateButton.addEventListener("click", function() {
        const sentence = sentences[Math.floor(Math.random() * sentences.length)];
        sentenceText.textContent = sentence;
      
        let morse = "";
        for (let i = 0; i < sentence.length; i++) {
          const char = sentence[i].toLowerCase();
          morse += morseCode[char] + " ";
        }
        morseText.textContent = morse;
      
        inputBox.value = "";
        inputBox.focus();
      });
      
      submitButton.addEventListener("click", function() {
        if (inputBox.value === morseText.textContent) {
          correct++;
          total++;
          progressText.textContent = `Correct: ${correct} / Total: ${total}`;
        } else {
          total++;
          progressText.textContent = `Correct: ${correct} / Total: ${total}`;
        }
      });
      
};
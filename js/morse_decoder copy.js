window.onload = function() {
  const button = document.getElementById("decode-button");
  const output = document.getElementById("output");
  console.log("system started");
  function decodeMorse() {
    const input = document.getElementById("input");
    const morseCode = input.value;
    const morseCodeAlphabet = {
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '.--.-.': 'Á',
      '.--.--': 'Ä',
      '.-.-.-': '.',
      '-.--.': '(',
      '-.--.-': ')',
      '-....-': '-',
      '.--.-': '@',
      '---...': ':',
      '-.-.-.': ';',
      '-..-.': '/',
      '-.--.-': 'X',
      '-....-': '-',
      '.....': '5',
      '--..--': ',',
      '.-.-.-.': '.',
      '-.-.--': '!',
      '-.-.-.': ';',
      '-...-': '=',
      '..--..': '?',
      '.--...': '#',
      '...---...': 'SOS',
      ' ': ' ',
    };
    return morseCode
      .trim()
      .split('   ')
      .map((word) =>
        word
          .split(' ')
          .map((char) => morseCodeAlphabet[char])
          .join('')
      )
      .join(' ');
  }
  function decode() {
    const decodedText = decodeMorse();
    document.getElementById("output").innerText = decodedText;
  }
  document.getElementById("decode-button").addEventListener("click", function() {
    decode();
  });
  

}
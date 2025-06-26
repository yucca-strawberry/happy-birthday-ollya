const messages = [
      "Ты щедрая ♡",
      "Ты красивая ♡",
      "Ты богиня ♡",
      "Я тебя очень ценю ♡",
      "Ты классно танцуешь ♡",
      "Ты самая смешная ♡",
      "У тебя классный \n музыкальный вкус ♡",
      "Спасибо тебе за \n твою заботу ♡",
      "Я тебя люблю ♡"
];

let currentIndex = 0;

function changeText() {
    currentIndex = (currentIndex + 1) % messages.length;
    document.getElementById("compText").textContent = messages[currentIndex];
}
// Typewriter effect
const words = ["Web Developer", "Designer", "Coder", "Learner"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typewriter = document.getElementById("typewriter-text");

function type() {
  currentWord = words[i];
  if (!isDeleting && j <= currentWord.length) {
    typewriter.innerHTML = currentWord.substring(0, j++);
    setTimeout(type, 150);
  } else if (isDeleting && j >= 0) {
    typewriter.innerHTML = currentWord.substring(0, j--);
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 500);
  }
}
type();
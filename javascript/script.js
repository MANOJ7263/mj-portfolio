const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Typing effect
const typedText = document.getElementById("typed-text");
const text = "I’m Developer | AI Enthusiast";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  } else {
    typedText.textContent = "";
    i = 0;
    setTimeout(typeEffect, 1000);
  }
}

window.onload = typeEffect;

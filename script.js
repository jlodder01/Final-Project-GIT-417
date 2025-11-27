const slide = document.getElementById("carouselSlide");
const images = slide.querySelectorAll(".carousel-slide");
const dotsContainer = document.getElementById("carouselDots");

let index = 0;

/* Create dots */
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  slide.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

/* Buttons */
document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % images.length;
  updateCarousel();
};

document.getElementById("prevBtn").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
};

/* Dot navigation */
dots.forEach(dot => {
  dot.onclick = () => {
    index = Number(dot.dataset.index);
    updateCarousel();
  };
});

/* Auto-slide */
setInterval(() => {
  index = (index + 1) % images.length;
  updateCarousel();
}, 4000);


  function handleGuess(e) {
    e.preventDefault();

    // Get the number the user typed in
    const guess = document.getElementById("userGuess");

    if (guess === null) {
        console.error("Element with ID 'userGuess' not found.");
        return;
    }

    const userGuess = Number(guess.value);

    // Generate random number 1–10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    var resultMessage = document.getElementById("resultMessage");

    if (resultMessage === null) {
        console.error("Element with ID 'resultMessage' not found.");
        return;
    }

    // Validation (in case they leave it blank)
    if (!userGuess) {
      resultMessage.textContent = "Please enter a number!";
      resultMessage.style.color = "red";
      return;
    }

    // Check if they match
    if (userGuess === randomNumber) {
      resultMessage.textContent = `🎉 Correct! The number was ${randomNumber}.`;
      resultMessage.style.color = "green";
    } else {
      resultMessage.textContent = `❌ Wrong! You guessed ${userGuess}, but the number was ${randomNumber}.`;
      resultMessage.style.color = "red";
    }
  }

const hamburger = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");

  // Toggle menu when clicking the hamburger
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();     // Prevent click from bubbling to document
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  // Close menu when clicking anywhere else
  document.addEventListener("click", (e) => {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger) {
      menu.style.display = "none";
    }
  });
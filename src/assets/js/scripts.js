// Function Anchor Link
function scrollToAbout() {
  const element = document.getElementById("miles");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToOurKey() {
  const element = document.getElementById("ourKey");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Function to show the Reg Form and hide the Worker Form
function showReg() {
  document.getElementById("formReg").classList.add("visible");
  document.getElementById("formWorker").classList.remove("visible");
}

// Function to show the Worker Form and hide the Reg Form
function showWorker() {
  document.getElementById("formWorker").classList.add("visible");
  document.getElementById("formReg").classList.remove("visible");
}

// Function Ease In Ease Out
window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".reveal");
  let windowHeight = window.innerHeight;

  elements.forEach(function (element) {
    let position = element.getBoundingClientRect().top;

    if (position < windowHeight - 150) {
      element.classList.add("active");
    }
  });
});

// Button Scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const footer = document.querySelector("footer");

  window.addEventListener("scroll", function () {
    // Get the position of the footer
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Show the button when the user scrolls down and is close to the footer
    if (window.scrollY > 100 && footerTop > windowHeight) {
      scrollToTopBtn.classList.remove("hidden");
    } else {
      scrollToTopBtn.classList.add("hidden");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

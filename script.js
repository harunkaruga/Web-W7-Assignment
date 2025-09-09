/* ================== Part 2: Functions, Scope, Parameters, Return ================== */

// Example function with parameters + return value
function calculateArea(width, height) {
  return width * height; // returns area of rectangle
}

// Global scope variable
let globalMessage = "Hello from global scope!";

function showScopeExample() {
  // Local scope variable
  let localMessage = "Hello from local scope!";
  
  console.log(globalMessage); // Accessible inside function
  console.log(localMessage);  // Accessible only here
}

showScopeExample(); 
// console.log(localMessage); // ❌ would cause an error (local only)

console.log("Box Area:", calculateArea(5, 10)); // Example usage of return value


/* ================== Part 3: Combine JS + CSS Animations ================== */

// Animate box with button click
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  // Toggles class to trigger CSS animation
  box.classList.toggle("animate");
});

// Modal Control
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// Function with parameter (true = open, false = close)
function toggleModal(show) {
  if (show) {
    modal.classList.add("show");
    modal.classList.remove("hidden");
  } else {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
}

// Event listeners to open/close modal
openModal.addEventListener("click", () => toggleModal(true));
closeModal.addEventListener("click", () => toggleModal(false));

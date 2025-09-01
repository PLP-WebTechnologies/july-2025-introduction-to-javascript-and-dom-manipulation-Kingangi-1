// ==================== Part 1: Variables & Conditionals ====================
let userName = "Brian";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ==================== Part 2: Custom Functions ====================
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the assignment demo.";
}

function squareNumber(num) {
  return num * num;
}

// ==================== Part 3: Loops ====================
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop iteration: " + i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log("While Loop count: " + counter);
  counter++;
}

// ==================== Part 4: DOM Interactions ====================
let messageElement = document.getElementById("message");
let buttonElement = document.getElementById("actionBtn");
let listContainer = document.getElementById("listContainer");

// Interaction 1: Change text content on button click
buttonElement.addEventListener("click", function() {
  messageElement.textContent = greetUser(userName);

  // Interaction 2: Create a new list dynamically
  let ul = document.createElement("ul");
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Square of " + i + " is " + squareNumber(i);
    ul.appendChild(li);
  }

  // Clear old list and add the new one
  listContainer.innerHTML = "";
  listContainer.appendChild(ul);

  // Interaction 3: Change button style dynamically
  buttonElement.style.backgroundColor = "green";
  buttonElement.textContent = "Clicked!";
});

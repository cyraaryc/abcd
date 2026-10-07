/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

let counter: number = 0;

document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
`;

const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  const colors = ["red", "blue", "green", "yellow"];
  const number = Math.floor(Math.random() * 4) + 1;

  document.body.style.backgroundColor = colors[number];

  const numberChance = Math.floor(Math.random() * 2) + 1;
  if (numberChance == 1) {
    counter += 1;
  } else {
    counter -= 1;
  }
  counterElement.textContent = counter.toString();
});

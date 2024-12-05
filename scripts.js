// Get the screen and buttons
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

// Initialize an empty string for the current expression
let currentExpression = '';

// Function to update the screen
function updateScreen() {
  screen.value = currentExpression;
}

// Event listener for button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear the screen
      currentExpression = '';
      updateScreen();
    } else if (value === '=') {
      // Calculate the result
      try {
        currentExpression = eval(currentExpression).toString();
        updateScreen();
      } catch (error) {
        currentExpression = 'Error';
        updateScreen();
      }
    } else {
      // Append the value to the current expression
      currentExpression += value;
      updateScreen();
    }
  });
});

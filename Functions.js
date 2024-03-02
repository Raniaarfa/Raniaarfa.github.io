// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    const body = document.body;
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
}

// Attach the function to the button click event
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', changeBackgroundColor);

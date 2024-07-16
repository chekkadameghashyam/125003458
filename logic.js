let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function appendCharacter(char) {
    if (display.textContent === '0') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
        display.textContent = 'Error';
    }
}

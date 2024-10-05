function changeColor(color) {
    document.body.style.backgroundColor = color;

    // Reset button colors
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('red', 'blue', 'green');
    });

    // Set clicked button to default color
    if (color === 'red') {
        buttons[0].classList.remove('red');
    } else if (color === 'blue') {
        buttons[1].classList.remove('blue');
    } else if (color === 'green') {
        buttons[2].classList.remove('green');
    }
}

function resetColors() {
    document.body.style.backgroundColor = '';
    const buttons = document.querySelectorAll('button');

    // Reset button states to their original colors
    buttons[0].classList.add('red');
    buttons[1].classList.add('blue');
    buttons[2].classList.add('green');
}

let targetButton = document.querySelector(".targetButton");
let squareSize = 80;
let side = `${squareSize}px`

targetButton.style.height = side;
targetButton.style.width = side;

targetButton.addEventListener('click', () => {
    // targetButton.style.display = 'none';
    buttonPlacement();
});

const container = document.querySelector(".container");

console.log(container.clientHeight);
console.log(container.clientWidth);
console.log(targetButton.clientHeight);
console.log(targetButton.clientWidth);

const randomizer = (element, size) => {
    const maxHeight = container.clientHeight - size;
    const maxWidth = container.clientWidth - size;
    const randomHeight = Math.floor(Math.random()*maxHeight);
    const randomWidth = Math.floor(Math.random()*maxWidth);
    return [randomHeight,randomWidth];
}

const buttonPlacement = () => {    
    targetButton.style.display = 'none';
    let randomNumbers = randomizer(targetButton, squareSize);
    targetButton.style.top = `${randomNumbers[0]}px`;
    targetButton.style.left = `${randomNumbers[1]}px`;
    targetButton.style.display = 'block';
}

buttonPlacement();
let targetButton = document.querySelector(".targetButton");
const container = document.querySelector(".container");

console.log(container.clientHeight);
console.log(container.clientWidth);
console.log(targetButton.clientHeight);
console.log(targetButton.clientWidth);
const randomizer = (element) => {
    const maxHeight = container.clientHeight - element.clientHeight;
    const maxWidth = container.clientWidth - element.clientWidth;
    const randomHeight = Math.floor(Math.random()*maxHeight);
    const randomWidth = Math.floor(Math.random()*maxWidth);
    return [randomHeight,randomWidth];
}

const buttonPlacement = () => {    
    targetButton.style.display = 'none';
    let randomNumbers = randomizer(targetButton)
    targetButton.style.top = `${randomNumbers[0]}px`;
    targetButton.style.left = `${randomNumbers[1]}px`;
    targetButton.style.display = 'block';
}

buttonPlacement();

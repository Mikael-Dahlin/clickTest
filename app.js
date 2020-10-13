const startButton = document.querySelector(".startButton");
const targetButton = document.querySelector(".targetButton");
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const originalHeaderText = header.textContent;
const squareSize = 80;
const side = `${squareSize}px`
let showButtonTime;
let clickButatonTime;
let counter;

const buttonSetup = () => {
    targetButton.style.height = side;
    targetButton.style.width = side;     
}

const start = () => {
    counter = 0;
    header.textContent = originalHeaderText;
    setTimeout(buttonPlacement, 2500);
}

startButton.addEventListener('click', start)

targetButton.addEventListener('click', () => {
    clickButtonTime = new Date();
    targetButton.style.display = 'none';
    const timed = (clickButtonTime.getTime() - showButtonTime.getTime()) / 1000
    header.textContent = `it took ${timed}s to click the button`;
    if(timed < 1){
        counter++;
        header.textContent = `${header.textContent}, ${counter}/15`
        if(counter === 15){
            const h1 = document.createElement('h1');
            h1.textContent = "Congrats you managed to click the button 15 times!";
            h1.classList.add("congrats");
            container.appendChild(h1);
            return;
        }
        const delay = 1400 + Math.ceil(Math.random()*1000);
        setTimeout(buttonPlacement, delay);
    }
    else{
        header.textContent = `Sorry, ${header.textContent}, you managed to get ${counter} buttons.`
        return;
    }
});

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
    let randomNumbers = randomizer(targetButton, squareSize);
    targetButton.style.top = `${randomNumbers[0]}px`;
    targetButton.style.left = `${randomNumbers[1]}px`;
    targetButton.style.display = 'block';
    showButtonTime = new Date();
}
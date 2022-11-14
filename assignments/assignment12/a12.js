// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }


function check(){
    console.log('test');
}

function submit(){
    alert(output.textContent);
}

function plusRunner(){
    plus(outputInt);
}

function reset(){
    outputInt = 0;
    output.textContent = outputInt;
}

function plus(){
    if (outputInt < 9999999999){
        outputInt += 1;
        output.textContent = outputInt; 
    }
}   

function minus(){
    if (outputInt > 0){
        outputInt -= 1;
        output.textContent = outputInt; 
    }
}   

function random(){
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

//const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
//const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
//const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const yesButton = document.querySelector('.yes-button').addEventListener('click', submit);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);


// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const width = canvas.width = window.innerWidth;
// const height = canvas.height = window.innerHeight;

// var canvas = document.querySelector("canvas");
 
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
 
//             var l = canvas.getContext('2d');
 
//             // x and y are the co-ordinates of the circle
 
//             // vx and vy are the respective speeds
 
//             var x = Math.floor(Math.random() * innerWidth);
//             var y = Math.floor(Math.random() * innerHeight);
//             var vx = Math.floor(Math.random() * 2);
//             var vy = Math.floor(Math.random() * 4);
//             var radius = 20;
 
//             move();
           
//             // This function will do the animation
//             function move() {
//                 requestAnimationFrame(move);
 
//                 // It clears the specified pixels within
//                 // the given rectangle
//                 l.clearRect(0, 0, innerWidth, innerHeight);
 
//                 // Creating a circle
//                 l.beginPath();
//                 l.strokeStyle = "black";
//                 l.arc(x, y, radius, 0, Math.PI * 2, false);
//                 l.stroke();
 
//                 // Conditions sso that the ball bounces
//                 // from the edges
//                 if (radius + x > innerWidth)
//                     vx = 0 - vx;
 
//                 if (x - radius < 0)
//                     vx = 0 - vx;
 
//                 if (y + radius > innerHeight)
//                     vy = 0 - vy;
 
//                 if (y - radius < 0)
//                     vy = 0 - vy;
 
//                 x = x + vx;
//                 y = y + vy;
 
//             }
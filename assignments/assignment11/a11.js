
// const b = document.getElementById("js-new-quote");
// let image = document.getElementById("img");

// b.addEventListener("click", () =>{
//     image.src="https://gateway.marvel.com/v1/";
// });

// imgButton.addEventListener('click', () =>{
//     randImg.src="https://dog.ceo/api/breeds/image/random";
// });


const randImg = document.getElementById('random-img');
const imgButton = document.getElementById('btn-img');
const spinner = document.querySelector('#js-spinner');

imgButton.addEventListener('click', fetchRandImg);
// imgButton.addEventListener("click", () => {
//     confetti("tsparticles", {
//       angle: 90,
//       count: 25,
//       position: { x: 50, y: 50 },
//       spread: 90,
//       startVelocity: 60,
//       decay: 0.9,
//       gravity: 1,
//       drift: 0,
//       ticks: 200,
//       colors: ["#fff", "#f00"],
//       shapes: ["square", "circle"],
//       scalar: 1,
//       zIndex: 2000,
//       disableForReducedMotion: true
//     });
//   });

function fetchRandImg() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        randImg.innerHTML = `<img src="${data.message}"/>`;
    }) 
}
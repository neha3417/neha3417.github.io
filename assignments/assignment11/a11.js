
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

imgButton.addEventListener('click', fetchRandImg);

function fetchRandImg() {
  fetch('https://random.imagecdn.app/500/150')

    .then(response => response.json())
    .then(data => {
        randImg.innerHTML = `<img src="${data.message}"/>`;

  }) 
}

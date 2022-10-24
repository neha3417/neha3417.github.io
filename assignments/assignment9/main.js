const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['abstract.PNG', `david.PNG`, `forg.PNG`, `lilshop.PNG`, `museum.PNG`]

/* Declaring the alternative text for each image file */

const alt = {
    'abstract.PNG' : 'abstract line portrait',
    //'billie.PNG' : 'billie eilish digital portrait',
    'david.PNG' : 'thermal portrait of david',
    //'kermit.PNG' : 'astronaut kermit',
    'lilshop.PNG' : 'little shop of horrors virtual playbill',
    'museum.PNG' : 'ocean conservation museum'
}


/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      }
});
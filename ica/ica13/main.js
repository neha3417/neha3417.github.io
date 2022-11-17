const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
  
const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}
  
const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// async function animatingAlice(){
//     try {
//         const animateAlice = await alice1.animate(aliceTumbling, aliceTiming).finished;
//         return animateAlice;
//     }
//     catch(error){
//         console.error(`Failed Alice Animation: ${error}`);  
//     }
// }

async function animatingAlice(){
    try {
        const a1 = alice1.animate(aliceTumbling, aliceTiming);
        await a1.finished;
        const a2 = alice2.animate(aliceTumbling, aliceTiming);
        await a2.finished;
        const a3 = alice3.animate(aliceTumbling, aliceTiming);
        await a3.finished;
    }
    catch(error){
        console.error(`Failed Alice Animation: ${error}`);  
    }
}

animatingAlice();

// alice1.animate(aliceTumbling, aliceTiming).finished
// .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
// .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);
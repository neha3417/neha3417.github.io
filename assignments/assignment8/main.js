
//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 2 degrees fahrenheit outside, so it was pretty cold. :insertx: went for a walk. When they got to :inserty:, they decided to get some snacks and perhaps a beverage, then :insertz:. Bob saw everything but is horrified of confrontation and therefore did nothing. I guess they couldnt be that upset — :insertx: weighs 4000 pounds, and maybe snacks werent the best idea.';
const insertX = ['Your absolute best friend', 'The window cleaners across the street', 'That person you saw in the hallway once and forgot about'];
const insertY = ['the C4C Italian section', 'Universal', 'movie theater that only plays Nemo'];
const insertZ = ['cried and then exploded while spilling a hot coffee', 'failed an exam and prompty dropped out of college', 'picked up some trash on the sidewalk and got bonked by the Buff bus'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
      
    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300 * 0.0714286)} stone`;
        const temperature =  `${Math.round((94 - 32) * (5 / 9))} centigrade`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
      
    }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
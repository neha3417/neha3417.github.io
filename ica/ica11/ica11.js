
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

async function getQuote(){
    console.log("button clicked");
    const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    try{
        const res = await fetch(endpoint)
        if (!res.ok){
            throw Error(res.statusText)
        }
        const json = await res.json();
        displayQuote(json.message);
    } 
    catch(error){
        console.log(error)
        alert('No new quote');
    }
}

function displayQuote(quote){
    const q = document.querySelector('#js-quote-text');
    q.textContent = quote;
}

getQuote();
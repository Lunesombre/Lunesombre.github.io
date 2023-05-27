// V4

let nextUrl = null;
let previousUrl = null;
const navigationContainer = document.createElement("div");
navigationContainer.className = "navigation";

async function getPokemon(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const pokeList = json.results;
        nextUrl = json.next;
        previousUrl = json.previous;
        await Promise.all(pokeList.map(pokemon => displayPokemon(pokemon.name)));
        updateNavigationbuttons();
    } catch (error) {
        console.error("Error fetching Pokemon: ", error);
    }
}

async function displayPokemon(name) {
    const URLindiv = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
        const response = await fetch(URLindiv);
        const pokemon = await response.json();
        const card = document.createElement('div');
        card.className='card';
        card.id= 'pkm_n'+pokemon.id;
        const image = document.createElement("img");
        image.src = pokemon.sprites["front_default"];
        image.alt = "Picture of "+pokemon.name;
        image.title = `N° ${pokemon.id} : ${pokemon.name}`;
        const name = document.createElement("div")
        name.textContent = pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
        card.appendChild(image);
        card.appendChild(name);
        const cards = document.querySelector(".cards")
        cards.appendChild(card);
    } catch (error) {
        console.error(`Error fetching the Pokemon ${name} details: `, error);
    }
}

function updateNavigationbuttons(){
    navigationContainer.innerHTML="";
    
    const previousButton = document.createElement("button");
    // if(previousUrl == null){
    //     previousButton.disabled=true;
    // }else{
    //     previousButton.disabled=false;
    // };
    // I'm leaving the previous "if" commented in the code because I found the notation below while poking around on the internet but I'm not used to it, that way i won't forget how I did it earlier - silly me for not versionning that part.
    previousButton.disabled = !previousUrl;

    previousButton.textContent = "Previous";
    previousButton.addEventListener('click', ()=> navigate(previousUrl));
    navigationContainer.appendChild(previousButton);
    
    const nextButton = document.createElement("button");
    nextButton.disabled = !nextUrl;
    nextButton.textContent = "Next";
    nextButton.addEventListener('click', ()=> navigate(nextUrl));
    navigationContainer.appendChild(nextButton);

}

function navigate(url) {
    const cards = document.querySelector(".cards");
    cards.innerHTML = "";
    getPokemon(url);
}

document.body.appendChild(navigationContainer)
getPokemon("https://pokeapi.co/api/v2/pokemon/?limit=20");
// for(i=0; i<20; i++)
// {
// const URL = "https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random()*800);
// fetch(URL)  
// .then(function(reponse){
//     return reponse.json();
// })
// .then(function(json){
//     console.log(json)
//     document.body.innerHTML+=`<img src='${json.sprites['front_default']}'>`
// });
// }

const URLv2 = "https://pokeapi.co/api/v2/pokemon/?limit=251"
fetch(URLv2)  
    .then(function(reponse){
        // console.log(reponse);
        return reponse.json();
    })
    .then(function(json){
        // console.log(json);
        return json.results;
    })
    .then(function(test){
        const pokemons = test
        pokemons.forEach(pokemon => 
            // console.log(pokemon.name)
            displayPokemon(pokemon.name)
            )
            
        })
        .catch(function(erreur){
            console.error(erreur);
        });
        
        // document.body.innerHTML+=`<img src="https://pokeapi.co/api/v2/pokemon/${pokemon.name}" alt="${pokemon.name} "></img>`


function displayPokemon(name){
    const URLindiv = "https://pokeapi.co/api/v2/pokemon/"+name;
    fetch(URLindiv)
    .then(function(reponse){
        console.log(reponse);
        return reponse.json();
    })
    .then(function(poke){
        document.body.innerHTML+=`<img src='${poke.sprites['front_default']}'>`
    })
}







        // const URLindiv = "https://pokeapi.co/api/v2/pokemon/"+pokemon.name;
        // fetch(URLindiv)
        // .then(function(poke){
        //     document.body.innerHTML+=`<img src='${poke.sprites['front_default']}'>`
        // })
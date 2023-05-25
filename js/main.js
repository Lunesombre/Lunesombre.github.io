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

// function getPokemon(){
// const URLv2 = "https://pokeapi.co/api/v2/pokemon/?limit=251"
// fetch(URLv2)  
//     .then(function(reponse){
//         // console.log(reponse);
//         return reponse.json();
//     })
//     .then(function(json){
//         // console.log(json);
//         return json.results;
//     })
//     .then(function(test){
//         const pokemons = test
//         pokemons.forEach(pokemon => 
//             // console.log(pokemon.name)
//             displayPokemon(pokemon.name)
//             )
            
//         })
//         .catch(function(erreur){
//             console.error(erreur);
//         });
        
//         // document.body.innerHTML+=`<img src="https://pokeapi.co/api/v2/pokemon/${pokemon.name}" alt="${pokemon.name} "></img>`
//     };

// function displayPokemon(name){
//     const URLindiv = "https://pokeapi.co/api/v2/pokemon/"+name;
//     fetch(URLindiv)
//     .then(function(reponse){
//         console.log(reponse);
//         return reponse.json();
//     })
//     .then(function(poke){
//         document.body.innerHTML+=`<img src='${poke.sprites['front_default']}'>`
//     })
// }

// getPokemon();

//V3
async function getPokemon(){
    const URLv3 = "https://pokeapi.co/api/v2/pokemon/"
    let reponse = await fetch(URLv3); 
    let json = await reponse.json();
    let pokeListe = json.results; 
    pokeListe.forEach(pokemon => displayPokemon(pokemon.name));
    };
    
async function displayPokemon(name){
    const URLindiv = "https://pokeapi.co/api/v2/pokemon/"+name;
    let reponse = await fetch(URLindiv);
    let pokemon = await reponse.json();
    document.body.innerHTML+=`<img src='${pokemon.sprites['front_default']}'>`;
    };

getPokemon();
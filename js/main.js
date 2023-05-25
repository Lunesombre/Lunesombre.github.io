for(i=0; i<20; i++)
{
const URL = "https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random()*800);
fetch(URL)  
.then(function(reponse){
    return reponse.json();
})
.then(function(json){
    console.log(json)
    document.body.innerHTML+=`<img src='${json.sprites['front_default']}'>`
});
}
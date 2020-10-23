const POKEURL = 'https://pokeapi.co/api/v2/pokemon/';
const MAX_POKES = 700;

window.onload = () => {
    document.getElementById("pokebtn").addEventListener('click', newRandom);
}

function newRandom(){
    var ranNum = Math.floor(Math.random() * MAX_POKES);
    getPoke(ranNum).done(data => {
        if(data){
            var elemento = document.createElement('div');

            elemento.innerHTML = `
                <img src="${data.sprites.front_default}" alt="poke">
                <p>${data.name}</p>
            `
            document.getElementById("pokemons").appendChild(elemento);
        }
    });
}

function getPoke(id){
    return $.ajax({url: `${POKEURL}${id}`});
}
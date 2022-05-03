import 'babel-polyfill';

const getPokemonData = async () => {
    let input = document.querySelector(".pokemon-input");

    let pokemonName = document.querySelector(".pokemon-name");
    
    // const res = await fetch(`https://${window.location.hostname}:8190/data`);
    const res = await fetch(`http://${window.location.hostname}:8090/data`);
    const data = await res.json();
    pokemonName.innerHTML = data.results[input.value].name;
}
var button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemonData);


export default getPokemonData;
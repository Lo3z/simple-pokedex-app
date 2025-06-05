let pokemonRepository = (function(){
    let pokemonList = [
    {name: 'Bulbasaur', height: 2.04, types: ['Grass', ' Poison']},
    {name: 'Ivysaur', height: 3.03, types: ['Grass', ' Poison']},
    {name: 'Venusaur', height: 6.07, types: ['Grass', ' Poison']},
    {name: 'Charmander', height: 2, types: ['Fire']},
    {name: 'Charmeleon', height: 3.07, types: ['Fire']},
    {name: 'Charizard', height: 5.07, types: ['Fire', ' Flying']},
    {name: 'Squirtle', height: 1.08, types: ['Water']},
    {name: 'Wartortle', height: 3.03, types: ['Water']},
    {name: 'Blastoise', height: 5.03, types: ['Water']},
    ];

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonButton');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', function(){
            showDetails(pokemon)
        });
    }

    function showDetails(pokemon){
        console.log(pokemon.name);
    }

    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
        return pokemonList;
        },
        addListItem: addListItem
    }
})();

pokemonRepository.add({name: 'Pikachu', height: '1.04', types: ['Electric']});

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});
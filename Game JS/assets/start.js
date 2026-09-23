const select = document.querySelector(".Pokemons");
const playerSpace = document.querySelector(".player .space");
const start = document.querySelector(".start");
const containerBattle = document.querySelector(".environment");
const nameAtualizado = document.querySelectorAll(".name");
let movesP = "";

select.addEventListener("click", e => {

    const container = e.target.closest(".Poke");
    if (!container) return; // clicou fora de qualquer Poke

    const subDiv = container.querySelector(".descriptionPoke");
    const namePoke = subDiv.querySelectorAll(".nameStart");

    const criar = pokedex.find(e => e.nome === namePoke[0].textContent);
    const href = criar.href;
    movesP = criar.moves;

    const img = document.createElement("img");
    img.src = href;
    img.classList = "pokemonP";

    playerSpace.innerHTML = ""; 
    playerSpace.appendChild(img);
    nameAtualizado[1].textContent = namePoke[0].textContent; 

    start.style.display = "none";
    containerBattle.style.display = "block";

    const loading = document.querySelector(".loading-screen");

    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);

    startBattle();
});
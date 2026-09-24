const select = document.querySelector(".Pokemons");
const playerSpace = document.querySelector(".player .space");
const start = document.querySelector(".start");
const containerBattle = document.querySelector(".environment");
const nameAtualizado = document.querySelectorAll(".name");
const dialog = document.querySelector(".chooseMoves");
let movesP = "";
const backElement = document.querySelector(".corpoMoves")

select.addEventListener("click", e => {

    const container = e.target.closest(".Poke");
    if (!container) return; // clicou fora de qualquer Poke

    const subDiv = container.querySelector(".descriptionPoke");
    const namePoke = subDiv.querySelectorAll(".nameStart");
    const criar = pokedex.find(e => e.nome === namePoke[0].textContent);
    const href = criar.hrefBack;
    movesP = criar.moves;

    const img = document.createElement("img");
    img.src = href;
    img.classList = "pokemonP";

    playerSpace.innerHTML = ""; 
    playerSpace.appendChild(img);
    nameAtualizado[1].textContent = namePoke[0].textContent; 
    

    // ===================================== DIALOG =========================================
    dialog.showModal();
    dialog.style.display = "flex";
    
    const element = pokedex.find(e => e.nome === namePoke[0].textContent);
    const gifStart = document.getElementById("gifStart");

    const titlePoke = document.getElementById("titlePoke");
    titlePoke.textContent = element.nome;
    gifStart.src = criar.hrefFront;

    switch (element.type) {
        case "normal": backElement.style.backgroundColor = "#A8A77A"; break;
        case "fire": backElement.style.backgroundColor = "#EE8130"; break;
        case "water": backElement.style.backgroundColor = "#6390F0"; break;
        case "electric": backElement.style.backgroundColor = "#F7D02C"; break;
        case "grass": backElement.style.backgroundColor = "#7AC74C"; break;
        case "ice": backElement.style.backgroundColor = "#96D9D6"; break;
        case "fighting": backElement.style.backgroundColor = "#C22E28"; break;
        case "poison": backElement.style.backgroundColor = "#A33EA1"; break;
        case "ground": backElement.style.backgroundColor = "#E2BF65"; break;
        case "flying": backElement.style.backgroundColor = "#A98FF3"; break;
        case "psychic": backElement.style.backgroundColor = "#F95587"; break;
        case "bug": backElement.style.backgroundColor = "#A6B91A"; break;
        case "rock": backElement.style.backgroundColor = "#B6A136"; break;
        case "ghost": backElement.style.backgroundColor = "#735797"; break;
        case "dragon": backElement.style.backgroundColor = "#6F35FC"; break;
        case "steel": backElement.style.backgroundColor = "#B7B7CE"; break;
        case "fairy": backElement.style.backgroundColor = "#D685AD"; break;
        default: backElement.style.backgroundColor = "#121212"; break;
    }

    const valendo = document.getElementById("valendo");
    const voltar = document.getElementById("voltar");
    voltar.addEventListener("click", e => {
        dialog.close();
        dialog.style.display = "none";
    });
    valendo.addEventListener("click", e => {
        criarPoke();
    });

});

function criarPoke(){

    dialog.close();
    dialog.style.display = "none";
    start.style.display = "none";
    containerBattle.style.display = "block";

    const loading = document.querySelector(".loading-screen");

    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);

    startBattle();

};


const select = document.querySelector(".Pokemons");
const playerSpace = document.querySelector(".player .space");
const start = document.querySelector(".start");
const containerBattle = document.querySelector(".environment");
const nameAtualizado = document.querySelectorAll(".name");
const dialog = document.querySelector(".chooseMoves");
let movesP = [];
let movesS = [];
const backElement = document.querySelector(".corpoMoves");
const backType = document.querySelectorAll(".typeNum");
const typeOne = document.getElementById("typeOne");
const typeTwo = document.getElementById("typeTwo");
const escolha = document.querySelectorAll(".skew-text");

const valendo = document.getElementById("valendo");
const voltar = document.getElementById("voltar");
const btnMoves = document.querySelector(".choose");
const dialogList = document.querySelector(".moveList");

// =========================================================================
// LÓGICA PARA FECHAR DIALOGS AO CLICAR FORA (NO BACKDROP)
// =========================================================================
function fecharAoClicarFora(dialogElement) {
    dialogElement.addEventListener("click", e => {
        const rect = dialogElement.getBoundingClientRect();
        const isInDialog = (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );

        if (!isInDialog) {
            dialogElement.close();
        }
    });
}

fecharAoClicarFora(dialog);
fecharAoClicarFora(dialogList);

dialog.addEventListener("close", () => {
    dialog.style.display = "none";
});

dialogList.addEventListener("close", () => {
    dialogList.style.display = "none";
});

// =========================================================================
// EVENTOS DOS BOTÕES DO DIALOG
// =========================================================================
voltar.addEventListener("click", () => {

    for(let i=0; i<escolha.length; i++){

        escolha[i].textContent = "Escolha seu ataque";

    }

    dialog.close();
});

valendo.addEventListener("click", () => {  

    let four = false;
    
    for(let i=0; i<escolha.length; i++){

        if(escolha[i].textContent == "Escolha seu ataque"){

            four = true;
            break;
        };

    }
    
    if(four === true){

        window.alert("Escolha os 4 ataques");
        return;

    }

    criarPoke();
});

// =========================================================================
// SELEÇÃO DE POKÉMON
// =========================================================================
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

    dialog.showModal();
    dialog.style.display = "flex";

    const element = pokedex.find(e => e.nome === namePoke[0].textContent);
    const gifStart = document.getElementById("gifStart");

    const titlePoke = document.getElementById("titlePoke");
    titlePoke.textContent = element.nome;
    gifStart.src = criar.hrefFront;

    switch (element.type1) {
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

    switch (element.type1) {
        case "normal": backType[0].style.backgroundColor = "#A8A77A"; typeOne.textContent = 'NORMAL'; break;
        case "fire": backType[0].style.backgroundColor = "#EE8130"; typeOne.textContent = 'FIRE'; break;
        case "water": backType[0].style.backgroundColor = "#6390F0"; typeOne.textContent = 'WATER'; break;
        case "electric": backType[0].style.backgroundColor = "#F7D02C"; typeOne.textContent = 'ELECTRIC'; break;
        case "grass": backType[0].style.backgroundColor = "#7AC74C"; typeOne.textContent = 'GRASS'; break;
        case "ice": backType[0].style.backgroundColor = "#96D9D6"; typeOne.textContent = 'ICE'; break;
        case "fighting": backType[0].style.backgroundColor = "#C22E28"; typeOne.textContent = 'FIGHTING'; break;
        case "poison": backType[0].style.backgroundColor = "#A33EA1"; typeOne.textContent = 'POISON'; break;
        case "ground": backType[0].style.backgroundColor = "#E2BF65"; typeOne.textContent = 'GROUND'; break;
        case "flying": backType[0].style.backgroundColor = "#A98FF3"; typeOne.textContent = 'FLYING'; break;
        case "psychic": backType[0].style.backgroundColor = "#F95587"; typeOne.textContent = 'PSYCHIC'; break;
        case "bug": backType[0].style.backgroundColor = "#A6B91A"; typeOne.textContent = 'BUG'; break;
        case "rock": backType[0].style.backgroundColor = "#B6A136"; typeOne.textContent = 'ROCK'; break;
        case "ghost": backType[0].style.backgroundColor = "#735797"; typeOne.textContent = 'GHOST'; break;
        case "dragon": backType[0].style.backgroundColor = "#6F35FC"; typeOne.textContent = 'DRAGON'; break;
        case "steel": backType[0].style.backgroundColor = "#B7B7CE"; typeOne.textContent = 'STEEL'; break;
        case "fairy": backType[0].style.backgroundColor = "#D685AD"; typeOne.textContent = 'FAIRY'; break;
        default: backType[0].style.backgroundColor = "#121212"; typeOne.textContent = ''; break;
    };

    switch (element.type2) {
        case "normal": backType[1].style.backgroundColor = "#A8A77A"; typeTwo.textContent = 'NORMAL'; break;
        case "fire": backType[1].style.backgroundColor = "#EE8130"; typeTwo.textContent = 'FIRE'; break;
        case "water": backType[1].style.backgroundColor = "#6390F0"; typeTwo.textContent = 'WATER'; break;
        case "electric": backType[1].style.backgroundColor = "#F7D02C"; typeTwo.textContent = 'ELECTRIC'; break;
        case "grass": backType[1].style.backgroundColor = "#7AC74C"; typeTwo.textContent = 'GRASS'; break;
        case "ice": backType[1].style.backgroundColor = "#96D9D6"; typeTwo.textContent = 'ICE'; break;
        case "fighting": backType[1].style.backgroundColor = "#C22E28"; typeTwo.textContent = 'FIGHTING'; break;
        case "poison": backType[1].style.backgroundColor = "#A33EA1"; typeTwo.textContent = 'POISON'; break;
        case "ground": backType[1].style.backgroundColor = "#E2BF65"; typeTwo.textContent = 'GROUND'; break;
        case "flying": backType[1].style.backgroundColor = "#A98FF3"; typeTwo.textContent = 'FLYING'; break;
        case "psychic": backType[1].style.backgroundColor = "#F95587"; typeTwo.textContent = 'PSYCHIC'; break;
        case "bug": backType[1].style.backgroundColor = "#A6B91A"; typeTwo.textContent = 'BUG'; break; //[cite: 1]
        case "rock": backType[1].style.backgroundColor = "#B6A136"; typeTwo.textContent = 'ROCK'; break; //[cite: 1]
        case "ghost": backType[1].style.backgroundColor = "#735797"; typeTwo.textContent = 'GHOST'; break; //[cite: 1]
        case "dragon": backType[1].style.backgroundColor = "#6F35FC"; typeTwo.textContent = 'DRAGON'; break; //[cite: 1]
        case "steel": backType[1].style.backgroundColor = "#B7B7CE"; typeTwo.textContent = 'STEEL'; break; //[cite: 1]
        case "fairy": backType[1].style.backgroundColor = "#D685AD"; typeTwo.textContent = 'FAIRY'; break; //[cite: 1]
        default: backType[1].style.backgroundColor = "#121212"; typeTwo.textContent = ''; break; //[cite: 1]
    };

    // =========================================================================
    // BOTÃO DE MOVES
    // =========================================================================
    btnMoves.addEventListener("click", e => {
        const container = e.target.closest(".skew-container");
        if (!container) return;

        // posição deste slot entre os slots (0, 1, 2, 3)
        const slots = [...btnMoves.querySelectorAll(".skew-container")];
        const index = slots.indexOf(container);

        const textMove = container.querySelector(".skew-text");

        dialogList.showModal();
        dialogList.style.display = "flex";

        const containerMove = document.querySelector(".mainMoves");
        containerMove.innerHTML = ""; 

        for (let i = 0; i < movesP.length; i++) {

            const divMove = document.createElement("div");
            const textType = document.createElement("p");
            const textName = document.createElement("p");
            const textDamege = document.createElement("p");
            const textCategoryKey = document.createElement("p");
            divMove.classList.add("skew");

            textType.textContent = movesP[i].type;
            textName.textContent = movesP[i].name;
            textDamege.textContent = movesP[i].power;
            textCategoryKey.textContent = movesP[i].CategoryKey;
            divMove.dataset.tip = movesP[i].description;

            divMove.appendChild(textType);
            divMove.appendChild(textName);
            divMove.appendChild(textDamege);
            divMove.appendChild(textCategoryKey);
            containerMove.appendChild(divMove);

            divMove.addEventListener("click", e=> {

                const up = movesP.find(e => e.name === textName.textContent);

                 // impede o mesmo golpe em dois slots diferentes
                const repetido = movesS.findIndex(e => e && e.name === up.name);
                if (repetido !== -1 && repetido !== index) {
                    alert("Esse golpe já está em outro slot!");
                    return;
                }

                movesS[index] = up; // salva (ou troca) naquela posição

                if(textMove){
                    textMove.innerHTML = textName.textContent;
                }

                dialogList.close();

            })

        };


    });

});


function criarPoke() {

    dialog.close();
    start.style.display = "none";
    containerBattle.style.display = "block";

    const loading = document.querySelector(".loading-screen");

    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);

    startBattle();

};

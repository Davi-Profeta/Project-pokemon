// Script Actions
const environment = document.querySelector("environment");
const actions = document.querySelector(".functions");
const container = document.querySelector(".actions");
const description = document.querySelector(".detalhes");

actions.addEventListener("click", e => {
    if(e.target.classList.contains("NameActions")){
        const btn = e.target;

        if(btn.textContent === "FIGHT"){
            actions.textContent = "";
            actions.style.width = "65%";
            description.style.width = "35%";
            
            ataques();
        }


    }

}) 

function reconstrucao(){
    container.style.display = "flex";
    actions.innerHTML = `
    <p class="NameActions">FIGHT</p>
    <p class="NameActions">BAG</p>
    <p class="NameActions">POKÉMON</p>
    <p class="NameActions">RUN</p>
`;
    actions.style.display = "flex";
    actions.style.flexWrap = "nowrap";
    actions.style.width = "50%";
    description.style.width = "50%";
    description.innerHTML = "";
}

function ataques(){

    moves.charmander.forEach(element => {
        const divs = document.createElement("div");
        divs.classList.add("divs");
        divs.textContent = element.name;

        actions.appendChild(divs);
    });

    actions.style.flexWrap = "wrap";
}

// IVs pokemon
const names = document.querySelectorAll(".name");
const nameInimigo = names[0].textContent;
const namePlayer = names[1].textContent;

const lv = document.querySelectorAll(".nivel");
const lvInimigo = Number(lv[0].textContent);
const lvPlayer = Number(lv[1].textContent);

const pokemonInimigo = criarPokemon(nameInimigo, Gengar, lvInimigo);
const pokemonJogador = criarPokemon(namePlayer, Charmander, lvPlayer);

function gerarIV() {
    return Math.floor(Math.random() * 32); // 0 a 31
};

function gerarIVs() {
    return {
        HP: gerarIV(),
        Attack: gerarIV(),
        Defense: gerarIV(),
        SpAttack: gerarIV(),
        SpDefense: gerarIV(),
        Speed: gerarIV()
    };
}

function calcularHP(base, iv, nivel) {
    return Math.floor(((2 * base + iv) * nivel) / 100) + nivel + 10;
}

function calcularStat(base, iv, nivel) {
    return Math.floor(((2 * base + iv) * nivel) / 100) + 5;
}

function criarPokemon(nome, base, nivel) {
    const ivs = gerarIVs();

    return {
        nome,
        nivel,
        base,
        ivs,
        statsReais: {
            HP: calcularHP(base.HP, ivs.HP, nivel),
            Attack: calcularStat(base.Attack, ivs.Attack, nivel),
            Defense: calcularStat(base.Defense, ivs.Defense, nivel),
            SpAttack: calcularStat(base.SpAttack, ivs.SpAttack, nivel),
            SpDefense: calcularStat(base.SpDefense, ivs.SpDefense, nivel),
            Speed: calcularStat(base.Speed, ivs.Speed, nivel)
        }
    };
}

// Dano
let HPDiv = document.querySelectorAll(".hp");
let HPEnemy = pokemonInimigo.statsReais.HP;
const HPMax = HPEnemy;
let HPPlayer = pokemonJogador.statsReais.HP;


actions.addEventListener("click", e => {
    if(e.target.classList.contains("divs")){

        const text = e.target.textContent;
        const ataque = moves.charmander.find(e => e.name === text);
        const damage = Number(ataque.power);
        HPEnemy -= damage;
        if(HPEnemy <= 0){
            HPEnemy = 0;
        }
        
        description.style.width = "100%";
        actions.style.display = "none";
        attacksDescriptionPlayer(ataque.name,pokemonJogador.nome);

        setTimeout(() => { /* Sem isso, o mesmo clique que ativou o golpe também dispararia esse listener, pulando a espera por um novo clique do jogador */
            document.addEventListener("click", e => {

            const porcentagem = (HPEnemy / HPMax) * 100;
            HPDiv[0].style.width = porcentagem + "%";
            container.style.display = "none";

            setTimeout(() => {
                if(HPEnemy === 0){
                    gameOver();
                    window.location.reload();
                }
            }, 2000);

                setTimeout(() => { 
                    document.addEventListener("click", e => {
            
                        enemyAttack();

                    }, { once: true });
                }, 0);

            }, { once: true });
        }, 0);

        
    }
})

function enemyAttack(){
    const stats = pokemonInimigo;
    const Attacks = moves.charmander;
    const indiceAleatorio = Math.floor(Math.random() * Attacks.length);
    const ataqueAleatorio = Attacks[indiceAleatorio];

    const power = Number(ataqueAleatorio.power);
    console.log(power);
    HPPlayer -= power;
    if(HPPlayer <= 0 ){
        HPPlayer = 0;
    }

    container.style.display = "flex";
    attacksDescriptionEnemy(ataqueAleatorio.name,stats.nome);

    setTimeout(() => { /* Sem isso, o mesmo clique que ativou o golpe também dispararia esse listener, pulando a espera por um novo clique do jogador */
        document.addEventListener("click", e => {

            const porcentagem = (HPPlayer / HPMax) * 100;
            HPDiv[1].style.width = porcentagem + "%";
            container.style.display = "none";

            setTimeout(() => {
                if(HPPlayer === 0){
                    gameOver();
                    window.location.reload();
                }
            }, 2000)

                setTimeout(() => { 
                    document.addEventListener("click", e => {
                    
                        reconstrucao();
                        return;

                    }, { once: true });
                }, 0);

        }, { once: true });
    }, 0);

}

function gameOver(){
    window.alert("Fim de jogo");
};

function attacksDescriptionPlayer(nameAttack,namePokemon){
    description.textContent = namePokemon + " usou " + nameAttack;

};

function attacksDescriptionEnemy(nameAttack,namePokemon){
    description.textContent = namePokemon + " usou " + nameAttack;
}
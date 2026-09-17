
// Script Actions
const environment = document.querySelector("environment");
const actions = document.querySelector(".functions");
const container = document.querySelector(".actions");
const description = document.querySelector(".detalhes");

startBattle();

function startBattle() {

    actions.addEventListener("click", e => {
        if (e.target.classList.contains("NameActions")) {
            const btn = e.target;

            if (btn.textContent === "FIGHT") {
                actions.textContent = "";
                actions.style.width = "65%";
                description.style.width = "35%";

                ataques();
            }


        }

    })

};

function reconstrucao() {
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

    return;
}

function ataques() {

    movesFire.charmander.forEach(element => {
        const divs = document.createElement("div");
        divs.classList.add("divs");
        divs.textContent = element.name;

        actions.appendChild(divs);
    });

    actions.style.flexWrap = "wrap";
}

/* =================================== IVs pokemon ============================================== */
const names = document.querySelectorAll(".name");
const nameInimigo = names[0].textContent;
const namePlayer = names[1].textContent;

const lv = document.querySelectorAll(".nivel");
const lvInimigo = Number(lv[0].textContent);
const lvPlayer = Number(lv[1].textContent);

const DexEnemy = pokedex.find(e => e.nome === nameInimigo);
const DexPlayer = pokedex.find(e => e.nome === namePlayer);
const typeEffectivenessEnemy = DexEnemy.typeEffectiveness;
const typeEffectivenessPlayer = DexPlayer.typeEffectiveness;
const typeEnemy = DexEnemy.type;
const typePlayer = DexPlayer.type;

if (typePlayer) { 

    for (let tipo in typeEffectivenessPlayer) {

        if (tipo === typeEnemy) {
            console.log("ok");
        } else {
            console.log("não")
        }
    }

}

if (typeEnemy) {

    for (let tipo in typeEffectivenessEnemy) {

        if (tipo === typePlayer) {
            console.log("ok");
        } else {
            console.log("não")
        }
    }

}

const baseEnemy = DexEnemy.stats;
const basePlayer = DexPlayer.stats;

const pokemonInimigo = criarPokemon(nameInimigo, baseEnemy, lvInimigo);
const pokemonJogador = criarPokemon(namePlayer, basePlayer, lvPlayer);


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


/* ============================== Battle ============================ */
let HPDiv = document.querySelectorAll(".hp");
let HPEnemy = pokemonInimigo.statsReais.HP;
const HPMaxEnemy = HPEnemy;
let HPPlayer = pokemonJogador.statsReais.HP;
const HPMaxPlayer = HPPlayer;
const filaDeTurnos = [];

function actionShift() {
    if (filaDeTurnos.length > 0) {
        const currentTurn = filaDeTurnos.shift();
        currentTurn();
    }
}

actions.addEventListener("click", e => {
    if (e.target.classList.contains("divs")) {

        const text = e.target.textContent;
        const ataque = movesFire.charmander.find(e => e.name === text);

        if (pokemonJogador.statsReais.Speed > pokemonInimigo.statsReais.Speed) {
            filaDeTurnos.push(() => ShiftPlayer(ataque));
            filaDeTurnos.push(enemyAttack);
        } else {
            filaDeTurnos.push(enemyAttack);
            filaDeTurnos.push(() => ShiftPlayer(ataque));
        }

        filaDeTurnos.push(reconstrucao);

        actionShift();
    }
});

function ShiftPlayer(ataque) {
    const damage = Number(ataque.power);

    if (ataque.CategoryKey === "Special") {
        const SpA = SpAttackP(damage, ataque);
        HPEnemy -= SpA;
        if (HPEnemy <= 0) HPEnemy = 0;
    }

    if (ataque.CategoryKey === "Physical") {
        const AP = AttackP(damage, ataque);
        HPEnemy -= AP;
        if (HPEnemy <= 0) HPEnemy = 0;
    }

    description.style.width = "100%";
    actions.style.display = "none";
    attacksDescriptionPlayer(ataque.name, pokemonJogador.nome);

    setTimeout(() => {
        document.addEventListener("click", e => {

            const porcentagem = (HPEnemy / HPMaxEnemy) * 100;
            HPDiv[0].style.width = porcentagem + "%";
            container.style.display = "none";

            if (HPEnemy === 0) {
                filaDeTurnos.length = 0;
                setTimeout(() => {
                    gameOver();
                    window.location.reload();
                }, 1000);
            } else {
                setTimeout(() => {
                    document.addEventListener("click", e => {

                        actionShift();
                        container.style.display = "flex";

                    }, { once: true });
                }, 0);
            }

        }, { once: true });
    }, 0);

}

function enemyAttack() {
    const stats = pokemonInimigo;
    const Attacks = movesFire.charmander;
    const indiceAleatorio = Math.floor(Math.random() * Attacks.length);
    const ataqueAleatorio = Attacks[indiceAleatorio];
    const power = Number(ataqueAleatorio.power);

    if (ataqueAleatorio.CategoryKey === "Special") {
        const SpA = SpAttackE(power, ataqueAleatorio);
        HPPlayer -= SpA;
        if (HPPlayer <= 0) HPPlayer = 0;
    }

    if (ataqueAleatorio.CategoryKey === "Physical") {
        const AP = AttackE(power, ataqueAleatorio);
        HPPlayer -= AP;
        if (HPPlayer <= 0) HPPlayer = 0;
    }

    description.style.width = "100%";
    actions.style.display = "none";
    attacksDescriptionEnemy(ataqueAleatorio.name, stats.nome);

    setTimeout(() => {
        document.addEventListener("click", e => {

            const porcentagem = (HPPlayer / HPMaxPlayer) * 100;
            HPDiv[1].style.width = porcentagem + "%";
            container.style.display = "none";

            if (HPPlayer === 0) {
                filaDeTurnos.length = 0;
                setTimeout(() => {
                    gameOver();
                    window.location.reload();
                }, 1000);
            } else {
                setTimeout(() => {
                    document.addEventListener("click", e => {

                        actionShift();
                        container.style.display = "flex";

                    }, { once: true });
                }, 0);
            }

        }, { once: true });
    }, 0);


}

function gameOver() {
    window.alert("Fim de jogo");
};

function attacksDescriptionPlayer(nameAttack, namePokemon) {
    description.textContent = namePokemon + " usou " + nameAttack;


};

function attacksDescriptionEnemy(nameAttack, namePokemon) {
    description.textContent = namePokemon + " usou " + nameAttack;
}



/* ====================== Ataques com calculos ============================ */
function SpAttackP(damage, ataque) {
    if (ataque.CategoryKey === "Special") {
        return ((((2 * lvPlayer / 5) + 2) * damage * (pokemonJogador.statsReais.SpAttack / pokemonInimigo.statsReais.SpDefense)) / 50) + 2;
    }

}

function AttackP(damage, ataque) {
    if (ataque.CategoryKey === "Physical") {
        return ((((2 * lvPlayer / 5) + 2) * damage * (pokemonJogador.statsReais.Attack / pokemonInimigo.statsReais.Defense)) / 50) + 2;
    }

}

function SpAttackE(damage, ataque) {
    if (ataque.CategoryKey === "Special") {
        return ((((2 * lvInimigo / 5) + 2) * damage * (pokemonInimigo.statsReais.SpAttack / pokemonJogador.statsReais.SpDefense)) / 50) + 2;
    }

}

function AttackE(damage, ataque) {
    if (ataque.CategoryKey === "Physical") {
        return ((((2 * lvInimigo / 5) + 2) * damage * (pokemonInimigo.statsReais.Attack / pokemonJogador.statsReais.Defense)) / 50) + 2;
    }

}

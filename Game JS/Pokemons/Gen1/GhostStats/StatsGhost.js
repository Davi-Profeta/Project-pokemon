const movesGhost = {
    Gengar: [
    // ===== NORMAL =====
    { name: "Scary Face",       type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Reduz bastante a Velocidade do alvo.", effects: [{ target: "enemy", stat: "speed", stages: -2, chance: 100 }] },
    { name: "Protect",          type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Protege o usuário de ataques neste turno. Pode falhar se usado em sequência.", effects: [] },
    { name: "Endure",           type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "O usuário sobrevive a qualquer golpe com pelo menos 1 de HP neste turno.", effects: [] },
    { name: "Sleep Talk",       type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Usa um golpe aleatório enquanto o usuário está dormindo.", effects: [] },
    { name: "Substitute",       type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Gasta parte do HP para criar um boneco que recebe os golpes.", effects: [] },
    { name: "Metronome",        type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Balança o dedo para usar quase qualquer golpe do jogo aleatoriamente.", effects: [] },
    { name: "Confide",          type: "normal",   power: 0,   pp: 20, CategoryKey: "Status",   description: "Reduz o Atq. Esp. do alvo conversando segredos.", effects: [{ target: "enemy", stat: "spAtk", stages: -1, chance: 100 }] },
    { name: "Double Team",       type: "normal",   power: 0,   pp: 15, CategoryKey: "Status",   description: "Cria cópias ilusórias para aumentar a evasiva.", effects: [{ target: "self", stat: "evasion", stages: 1, chance: 100 }] },
    { name: "Lick",             type: "normal",   power: 30,  pp: 30, CategoryKey: "Physical", description: "Lambe o alvo com uma língua longa. Pode paralisar.", effects: [{ target: "enemy", status: "paralysis", chance: 30 }] },
    { name: "Facade",           type: "normal",   power: 70,  pp: 20, CategoryKey: "Physical", description: "O poder dobra se o usuário estiver envenenado, queimado ou paralisado.", effects: [] },
    { name: "Tera Blast",       type: "normal",   power: 80,  pp: 10, CategoryKey: "Special",  description: "Vira o tipo Tera do usuário quando ele está Terastalizado.", effects: [] },
    { name: "Body Slam",        type: "normal",   power: 85,  pp: 15, CategoryKey: "Physical", description: "Joga o corpo contra o alvo. Pode paralisar.", effects: [{ target: "enemy", status: "paralysis", chance: 30 }] },
    { name: "Hyper Beam",       type: "normal",   power: 150, pp: 5,  CategoryKey: "Special",  description: "Um feixe de energia extremamente poderoso. O usuário descansa no próximo turno.", effects: [] },
    { name: "Giga Impact",      type: "normal",   power: 150, pp: 5,  CategoryKey: "Physical", description: "Ataca com força total. O usuário precisa descansar no próximo turno.", effects: [] },
    { name: "Explosion",        type: "normal",   power: 250, pp: 5,  CategoryKey: "Physical", description: "O usuário se auto-destrói para causar um dano devastador ao redor.", effects: [] },
    // ===== FIRE =====
    { name: "Sunny Day",        type: "fire",     power: 0,   pp: 5,  CategoryKey: "Status",   description: "Deixa o sol forte por cinco turnos, fortalecendo golpes de Fogo.", effects: [] },
    { name: "Will-O-Wisp",      type: "fire",     power: 0,   pp: 15, CategoryKey: "Status",   description: "Lança uma chama fantasmagórica que pode queimar o alvo.", effects: [{ target: "enemy", status: "burn", chance: 100 }] },
    { name: "Fire Punch",       type: "fire",     power: 75,  pp: 15, CategoryKey: "Physical", description: "Um soco flamejante. Pode queimar.", effects: [{ target: "enemy", status: "burn", chance: 10 }] },
    // ===== ELECTRIC =====
    { name: "Thunder Wave",     type: "electric", power: 0,   pp: 20, CategoryKey: "Status",   description: "Dispara uma fraca descarga elétrica que paralisa o alvo.", effects: [{ target: "enemy", status: "paralysis", chance: 100 }] },
    { name: "Thunder Punch",    type: "electric", power: 75,  pp: 15, CategoryKey: "Physical", description: "Um soco elétrico. Pode paralisar o alvo.", effects: [{ target: "enemy", status: "paralysis", chance: 10 }] },
    { name: "Thunderbolt",      type: "electric", power: 90,  pp: 15, CategoryKey: "Special",  description: "Dispara um forte raio elétrico. Pode paralisar o alvo.", effects: [{ target: "enemy", status: "paralysis", chance: 10 }] },
    { name: "Thunder",          type: "electric", power: 110, pp: 10, CategoryKey: "Special",  description: "Um raio devastador cai sobre o alvo. Pode paralisar.", effects: [{ target: "enemy", status: "paralysis", chance: 30 }] },
    // ===== FIGHTING =====
    { name: "Brick Break",      type: "fighting", power: 75,  pp: 15, CategoryKey: "Physical", description: "Uma pancada que também quebra barreiras como Reflect e Light Screen.", effects: [] },
    { name: "Drain Punch",      type: "fighting", power: 75,  pp: 10, CategoryKey: "Physical", description: "Um soco que rouba HP do alvo para curar o usuário.", effects: [] },
    { name: "Focus Blast",      type: "fighting", power: 120, pp: 5,  CategoryKey: "Special",  description: "Uma rajada de energia concentrada. Pode reduzir a Def. Esp. do alvo.", effects: [{ target: "enemy", stat: "spDef", stages: -1, chance: 10 }] },
    { name: "Focus Punch",      type: "fighting", power: 150, pp: 20, CategoryKey: "Physical", description: "Um soco muito forte que falha se o usuário for atingido enquanto se concentra.", effects: [] },
    // ===== POISON =====
    { name: "Acid Armor",       type: "poison",   power: 0,   pp: 20, CategoryKey: "Status",   description: "Altera a estrutura celular para aumentar bastante a Defesa.", effects: [{ target: "self", stat: "defense", stages: 2, chance: 100 }] },
    { name: "Toxic",            type: "poison",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Envenena gravemente o alvo, fazendo o dano aumentar a cada turno.", effects: [{ target: "enemy", status: "badPoison", chance: 100 }] },
    { name: "Poison Gas",       type: "poison",   power: 0,   pp: 40, CategoryKey: "Status",   description: "Lança uma nuvem de gás tóxico para envenenar os alvos.", effects: [{ target: "enemy", status: "poison", chance: 100 }] },
    { name: "Smog",             type: "poison",   power: 30,  pp: 20, CategoryKey: "Special",  description: "Sopra uma fumaça imunda. Pode envenenar.", effects: [{ target: "enemy", status: "poison", chance: 40 }] },
    { name: "Poison Jab",       type: "poison",   power: 80,  pp: 20, CategoryKey: "Physical", description: "Ataca o alvo com um braço ou espinho venenoso. Pode envenenar.", effects: [{ target: "enemy", status: "poison", chance: 30 }] },
    { name: "Sludge Bomb",      type: "poison",   power: 90,  pp: 10, CategoryKey: "Special",  description: "Arremessa lama tóxica no alvo. Pode envenenar.", effects: [{ target: "enemy", status: "poison", chance: 30 }] },
    { name: "Sludge Wave",      type: "poison",   power: 95,  pp: 10, CategoryKey: "Special",  description: "Uma onda de lama nojenta atinge todos ao redor. Pode envenenar.", effects: [{ target: "enemy", status: "poison", chance: 10 }] },
    // ===== GROUND =====
    { name: "Spite",            type: "ghost",    power: 0,   pp: 10, CategoryKey: "Status",   description: "Reduz o PP do último golpe usado pelo alvo.", effects: [] },
    // ===== PSYCHIC =====
    { name: "Hypnosis",         type: "psychic",  power: 0,   pp: 20, CategoryKey: "Status",   description: "Uma atração hipnótica que faz o alvo dormir.", effects: [{ target: "enemy", status: "sleep", chance: 100 }] },
    { name: "Rest",             type: "psychic",  power: 0,   pp: 5,  CategoryKey: "Status",   description: "O usuário dorme por dois turnos para recuperar todo o HP e curar problemas de status.", effects: [] },
    { name: "Trick",            type: "psychic",  power: 0,   pp: 10, CategoryKey: "Status",   description: "Troca o item segurado com o do alvo.", effects: [] },
    { name: "Skill Swap",       type: "psychic",  power: 0,   pp: 10, CategoryKey: "Status",   description: "Usa poder psíquico para trocar de habilidade com o alvo.", effects: [] },
    { name: "Psybeam",          type: "psychic",  power: 65,  pp: 20, CategoryKey: "Special",  description: "Dispara um raio peculiar. Pode confundir o alvo.", effects: [{ target: "enemy", status: "confusion", chance: 10 }] },
    { name: "Psychic",          type: "psychic",  power: 90,  pp: 10, CategoryKey: "Special",  description: "Uma forte força telecinética ataca o alvo. Pode reduzir a Def. Esp.", effects: [{ target: "enemy", stat: "spDef", stages: -1, chance: 10 }] },
    { name: "Dream Eater",      type: "psychic",  power: 100, pp: 15, CategoryKey: "Special",  description: "Rouba metade do dano causado de um alvo que esteja dormindo para se curar.", effects: [] },

    // ===== ICE =====
    { name: "Ice Punch",        type: "ice",      power: 75,  pp: 15, CategoryKey: "Physical", description: "Um soco congelante. Pode congelar o alvo.", effects: [{ target: "enemy", status: "freeze", chance: 10 }] },

    // ===== GHOST =====
    { name: "Confuse Ray",      type: "ghost",    power: 0,   pp: 10, CategoryKey: "Status",   description: "Um raio nefasto que deixa o alvo confuso.", effects: [{ target: "enemy", status: "confusion", chance: 100 }] },
    { name: "Curse",            type: "ghost",    power: 0,   pp: 10, CategoryKey: "Status",   description: "Sacrifica metade do próprio HP para amaldiçoar o alvo, tirando dano a cada turno.", effects: [] },
    { name: "Destiny Bond",     type: "ghost",    power: 0,   pp: 5,  CategoryKey: "Status",   description: "Se o usuário for nocauteado antes de seu próximo turno, o atacante também é nocauteado.", effects: [] },
    { name: "Night Shade",      type: "ghost",    power: 0,   pp: 15, CategoryKey: "Special",  description: "Causa dano fixo exatamente igual ao nível do usuário.", effects: [] },
    { name: "Hex",              type: "ghost",    power: 65,  pp: 10, CategoryKey: "Special",  description: "O poder dobra se o alvo estiver sofrendo com alguma condição de status.", effects: [] },
    { name: "Shadow Claw",      type: "ghost",    power: 70,  pp: 15, CategoryKey: "Physical", description: "Corta com uma garra feita de sombra. Alta chance de acerto crítico.", effects: [] },
    { name: "Shadow Ball",      type: "ghost",    power: 80,  pp: 15, CategoryKey: "Special",  description: "Atira uma esfera de escuridão. Pode reduzir a Def. Esp. do alvo.", effects: [{ target: "enemy", stat: "spDef", stages: -1, chance: 20 }] },
    { name: "Poltergeist",      type: "ghost",    power: 110, pp: 5,  CategoryKey: "Physical", description: "Manipula o item do alvo para atacá-lo. Falha se o alvo não tiver item.", effects: [] },
    // ===== DRAGON =====
    { name: "Dragon Pulse",     type: "dragon",   power: 85,  pp: 10, CategoryKey: "Special",  description: "Envia uma onda de choque pela boca contra o alvo.", effects: [] },
    // ===== DARK =====
    { name: "Nasty Plot",       type: "dark",     power: 0,   pp: 20, CategoryKey: "Status",   description: "Pensa em esquemas malignos para aumentar bastante o Atq. Esp.", effects: [{ target: "self", stat: "spAtk", stages: 2, chance: 100 }] },
    { name: "Taunt",            type: "dark",     power: 0,   pp: 20, CategoryKey: "Status",   description: "Provoca o alvo, impedindo-o de usar golpes de Status por três turnos.", effects: [] },
    { name: "Fling",            type: "dark",     power: 0,   pp: 10, CategoryKey: "Physical", description: "Arremessa o item que segura no alvo. Poder e efeito dependem do item.", effects: [] },
    { name: "Payback",          type: "dark",     power: 50,  pp: 10, CategoryKey: "Physical", description: "O poder dobra se o usuário se mover depois do alvo.", effects: [] },
    { name: "Sucker Punch",     type: "dark",     power: 70,  pp: 5,  CategoryKey: "Physical", description: "Ataca primeiro. Falha se o alvo não estiver preparando um ataque de dano.", effects: [] },
    { name: "Dark Pulse",       type: "dark",     power: 80,  pp: 15, CategoryKey: "Special",  description: "Sopra uma aura cheia de pensamentos sombrios. Pode fazer o alvo hesitar.", effects: [{ target: "enemy", status: "flinch", chance: 20 }] },
    { name: "Foul Play",        type: "dark",     power: 95,  pp: 15, CategoryKey: "Physical", description: "Usa o atributo de Ataque do alvo contra ele mesmo para causar dano.", effects: [] }
]
};

// Base Gengar
const Gengar = {
    HP: 60,
    Attack: 65,
    Defense: 60,
    SpAttack: 130,
    SpDefense: 75,
    Speed: 110
}

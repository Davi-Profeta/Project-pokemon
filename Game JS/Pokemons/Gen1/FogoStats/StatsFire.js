const movesFire = {
    charmander: [
    // ===== NORMAL =====
    { name: "Growl",          type: "normal",   power: 0,   pp: 40, CategoryKey: "Status",   description: "Reduz o Ataque do alvo.", effects: [{ target: "enemy", stat: "attack", stages: -1, chance: 100 }] },
    { name: "Smokescreen",    type: "normal",   power: 0,   pp: 20, CategoryKey: "Status",   description: "Reduz a precisão do alvo.", effects: [{ target: "enemy", stat: "accuracy", stages: -1, chance: 100 }] },
    { name: "Scary Face",     type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Reduz bastante a Velocidade do alvo.", effects: [{ target: "enemy", stat: "speed", stages: -2, chance: 100 }] },
    { name: "Belly Drum",     type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "O usuário perde metade do HP para maximizar o próprio Ataque.", effects: [{ target: "self", stat: "attack", stages: 6, chance: 100 }] },
    { name: "Protect",        type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Protege o usuário de ataques neste turno. Pode falhar se usado em sequência.", effects: [] },
    { name: "Endure",         type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "O usuário sobrevive a qualquer golpe com pelo menos 1 de HP neste turno.", effects: [] },
    { name: "Sleep Talk",     type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Usa um golpe aleatório enquanto o usuário está dormindo.", effects: [] },
    { name: "Swords Dance",   type: "normal",   power: 0,   pp: 20, CategoryKey: "Status",   description: "Aumenta bastante o Ataque do usuário.", effects: [{ target: "self", stat: "attack", stages: 2, chance: 100 }] },
    { name: "Substitute",     type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Gasta parte do HP para criar um boneco que recebe os golpes.", effects: [] },
    { name: "Helping Hand",   type: "normal",   power: 0,   pp: 20, CategoryKey: "Status",   description: "Aumenta o poder do golpe de um aliado neste turno.", effects: [] },
    { name: "Roar",           type: "normal",   power: 0,   pp: 20, CategoryKey: "Status",   description: "Assusta o alvo, forçando-o a sair de batalha.", effects: [] },
    { name: "Tackle",         type: "normal",   power: 40,  pp: 35, CategoryKey: "Physical", description: "Uma investida com o corpo inteiro contra o alvo.", effects: [] },
    { name: "Scratch",        type: "normal",   power: 40,  pp: 35, CategoryKey: "Physical", description: "Arranha o alvo com garras afiadas.", effects: [] },
    { name: "False Swipe",    type: "normal",   power: 40,  pp: 40, CategoryKey: "Physical", description: "Nunca nocauteia o alvo, que sempre fica com pelo menos 1 de HP.", effects: [] },
    { name: "Weather Ball",   type: "normal",   power: 50,  pp: 10, CategoryKey: "Special",  description: "O tipo e o poder mudam conforme o clima.", effects: [] },
    { name: "Swift",          type: "normal",   power: 60,  pp: 20, CategoryKey: "Special",  description: "Dispara estrelas que nunca erram.", effects: [] },
    { name: "Slash",          type: "normal",   power: 70,  pp: 20, CategoryKey: "Physical", description: "Corta com as garras. Alta chance de acerto crítico.", effects: [] },
    { name: "Facade",         type: "normal",   power: 70,  pp: 20, CategoryKey: "Physical", description: "O poder dobra se o usuário estiver envenenado, queimado ou paralisado.", effects: [] },
    { name: "Tera Blast",     type: "normal",   power: 80,  pp: 10, CategoryKey: "Special",  description: "Vira o tipo Tera do usuário quando ele está Terastalizado.", effects: [] },
    { name: "Body Slam",      type: "normal",   power: 85,  pp: 15, CategoryKey: "Physical", description: "Joga o corpo contra o alvo. Pode paralisar.", effects: [{ target: "enemy", status: "paralysis", chance: 30 }] },
    { name: "Take Down",      type: "normal",   power: 90,  pp: 20, CategoryKey: "Physical", description: "Uma investida imprudente que também causa dano de recuo ao usuário.", effects: [] },

    // ===== FIRE =====
    { name: "Sunny Day",      type: "fire",     power: 0,   pp: 5,  CategoryKey: "Status",   description: "Deixa o sol forte por cinco turnos, fortalecendo golpes de Fogo.", effects: [] },
    { name: "Will-O-Wisp",    type: "fire",     power: 0,   pp: 15, CategoryKey: "Status",   description: "Lança uma chama fantasmagórica que pode queimar o alvo.", effects: [{ target: "enemy", status: "burn", chance: 100 }] },
    { name: "Fire Spin",      type: "fire",     power: 35,  pp: 15, CategoryKey: "Special",  description: "Prende o alvo em um redemoinho de fogo por alguns turnos.", effects: [] },
    { name: "Ember",          type: "fire",     power: 40,  pp: 25, CategoryKey: "Special",  description: "Pequenas chamas atingem o alvo. Pode queimar.", effects: [{ target: "enemy", status: "burn", chance: 10 }] },
    { name: "Flame Charge",   type: "fire",     power: 50,  pp: 20, CategoryKey: "Physical", description: "Envolve-se em chamas para atacar. Aumenta a Velocidade do usuário.", effects: [{ target: "self", stat: "speed", stages: 1, chance: 100 }] },
    { name: "Fire Fang",      type: "fire",     power: 65,  pp: 15, CategoryKey: "Physical", description: "Morde com presas flamejantes. Pode queimar ou fazer o alvo hesitar.", effects: [{ target: "enemy", status: "burn", chance: 10 }, { target: "enemy", status: "flinch", chance: 10 }] },
    { name: "Fire Punch",     type: "fire",     power: 75,  pp: 15, CategoryKey: "Physical", description: "Um soco flamejante. Pode queimar.", effects: [{ target: "enemy", status: "burn", chance: 10 }] },
    { name: "Temper Flare",   type: "fire",     power: 75,  pp: 10, CategoryKey: "Physical", description: "Um ataque desesperado. O poder dobra se o golpe anterior do usuário falhou.", effects: [] },
    { name: "Fire Pledge",    type: "fire",     power: 80,  pp: 10, CategoryKey: "Special",  description: "Uma coluna de fogo atinge o alvo. Tem efeitos especiais combinado com outro Pledge de um aliado.", effects: [] },
    { name: "Flamethrower",   type: "fire",     power: 90,  pp: 15, CategoryKey: "Special",  description: "Um poderoso jato de fogo. Pode queimar.", effects: [{ target: "enemy", status: "burn", chance: 10 }] },
    { name: "Heat Wave",      type: "fire",     power: 95,  pp: 10, CategoryKey: "Special",  description: "Sopra um ar escaldante nos oponentes. Pode queimar.", effects: [{ target: "enemy", status: "burn", chance: 10 }] },
    { name: "Inferno",        type: "fire",     power: 100, pp: 5,  CategoryKey: "Special",  description: "Envolve o alvo em fogo intenso. Sempre queima se acertar, mas é impreciso.", effects: [{ target: "enemy", status: "burn", chance: 100 }] },
    { name: "Fire Blast",     type: "fire",     power: 110, pp: 5,  CategoryKey: "Special",  description: "Uma enorme explosão de fogo. Pode queimar.", effects: [{ target: "enemy", status: "burn", chance: 10 }] },
    { name: "Flare Blitz",    type: "fire",     power: 120, pp: 15, CategoryKey: "Physical", description: "Avança envolto em chamas. O usuário sofre dano de recuo. Pode queimar.", effects: [{ target: "enemy", status: "burn", chance: 10 }] },
    { name: "Overheat",       type: "fire",     power: 130, pp: 5,  CategoryKey: "Special",  description: "Chamas com força total. Reduz bastante o Atq. Esp. do usuário depois.", effects: [{ target: "self", stat: "spAtk", stages: -2, chance: 100 }] },

    // ===== ELECTRIC =====
    { name: "Thunder Punch",  type: "electric", power: 75,  pp: 15, CategoryKey: "Physical", description: "Um soco elétrico. Pode paralisar o alvo.", effects: [{ target: "enemy", status: "paralysis", chance: 10 }] },

    // ===== FIGHTING =====
    { name: "Counter",        type: "fighting", power: 0,   pp: 20, CategoryKey: "Physical", description: "Devolve o dobro do dano físico recebido. Sempre age por último.", effects: [] },
    { name: "Brick Break",    type: "fighting", power: 75,  pp: 15, CategoryKey: "Physical", description: "Uma pancada que também quebra barreiras como Reflect e Light Screen.", effects: [] },
    { name: "Focus Blast",    type: "fighting", power: 120, pp: 5,  CategoryKey: "Special",  description: "Uma rajada de energia concentrada. Pode reduzir a Def. Esp. do alvo.", effects: [{ target: "enemy", stat: "spDef", stages: -1, chance: 10 }] },
    { name: "Focus Punch",    type: "fighting", power: 150, pp: 20, CategoryKey: "Physical", description: "Um soco muito forte que falha se o usuário for atingido enquanto se concentra.", effects: [] },

    // ===== GROUND =====
    { name: "Dig",            type: "ground",   power: 80,  pp: 10, CategoryKey: "Physical", description: "Cava para baixo da terra no primeiro turno e ataca no segundo.", effects: [] },

    // ===== PSYCHIC =====
    { name: "Rest",           type: "psychic",  power: 0,   pp: 5,  CategoryKey: "Status",   description: "O usuário dorme por dois turnos para recuperar todo o HP e curar problemas de status.", effects: [] },

    // ===== ROCK =====
    { name: "Rock Tomb",      type: "rock",     power: 60,  pp: 15, CategoryKey: "Physical", description: "Arremessa pedregulhos no alvo. Reduz a Velocidade dele.", effects: [{ target: "enemy", stat: "speed", stages: -1, chance: 100 }] },
    { name: "Ancient Power",  type: "rock",     power: 60,  pp: 5,  CategoryKey: "Special",  description: "Uma força ancestral ataca o alvo. Pode aumentar todos os atributos do usuário.", effects: [{ target: "self", stat: "all", stages: 1, chance: 10 }] },
    { name: "Rock Slide",     type: "rock",     power: 75,  pp: 10, CategoryKey: "Physical", description: "Grandes pedras atingem os oponentes. Podem fazê-los hesitar.", effects: [{ target: "enemy", status: "flinch", chance: 30 }] },

    // ===== GHOST =====
    { name: "Shadow Claw",    type: "ghost",    power: 70,  pp: 15, CategoryKey: "Physical", description: "Corta com uma garra feita de sombra. Alta chance de acerto crítico.", effects: [] },

    // ===== DRAGON =====
    { name: "Dragon Dance",   type: "dragon",   power: 0,   pp: 20, CategoryKey: "Status",   description: "Uma dança mística que aumenta o Ataque e a Velocidade do usuário.", effects: [{ target: "self", stat: "attack", stages: 1, chance: 100 }, { target: "self", stat: "speed", stages: 1, chance: 100 }] },
    { name: "Dragon Tail",    type: "dragon",   power: 60,  pp: 10, CategoryKey: "Physical", description: "Joga o alvo para longe, forçando-o a sair de batalha.", effects: [] },
    { name: "Breaking Swipe", type: "dragon",   power: 60,  pp: 15, CategoryKey: "Physical", description: "Golpeia com a cauda todos os oponentes. Reduz o Ataque deles.", effects: [{ target: "enemy", stat: "attack", stages: -1, chance: 100 }] },
    { name: "Dragon Breath",  type: "dragon",   power: 60,  pp: 20, CategoryKey: "Special",  description: "Ataca com um sopro de energia dracônica. Pode paralisar.", effects: [{ target: "enemy", status: "paralysis", chance: 30 }] },
    { name: "Dragon Claw",    type: "dragon",   power: 80,  pp: 15, CategoryKey: "Physical", description: "Corta o alvo com garras afiadas.", effects: [] },
    { name: "Dragon Pulse",   type: "dragon",   power: 85,  pp: 10, CategoryKey: "Special",  description: "Envia uma onda de choque pela boca contra o alvo.", effects: [] },
    { name: "Dragon Rush",    type: "dragon",   power: 100, pp: 10, CategoryKey: "Physical", description: "Avança com uma aura ameaçadora. Pode fazer o alvo hesitar.", effects: [{ target: "enemy", status: "flinch", chance: 20 }] },
    { name: "Outrage",        type: "dragon",   power: 120, pp: 10, CategoryKey: "Physical", description: "Ataca descontrolado por dois a três turnos e depois fica confuso.", effects: [] },

    // ===== DARK =====
    { name: "Fling",          type: "dark",     power: 0,   pp: 10, CategoryKey: "Physical", description: "Arremessa o item que segura no alvo. Poder e efeito dependem do item.", effects: [] },
    { name: "Bite",           type: "dark",     power: 60,  pp: 25, CategoryKey: "Physical", description: "Morde com presas afiadas. Pode fazer o alvo hesitar.", effects: [{ target: "enemy", status: "flinch", chance: 30 }] },
    { name: "Crunch",         type: "dark",     power: 80,  pp: 15, CategoryKey: "Physical", description: "Tritura com presas afiadas. Pode reduzir a Defesa do alvo.", effects: [{ target: "enemy", stat: "defense", stages: -1, chance: 20 }] },

    // ===== STEEL =====
    { name: "Metal Claw",     type: "steel",    power: 50,  pp: 35, CategoryKey: "Physical", description: "Arranha com garras de aço. Pode aumentar o Ataque do usuário.", effects: [{ target: "self", stat: "attack", stages: 1, chance: 10 }] },
    { name: "Iron Tail",      type: "steel",    power: 100, pp: 15, CategoryKey: "Physical", description: "Golpeia com uma cauda dura como aço. Pode reduzir a Defesa do alvo.", effects: [{ target: "enemy", stat: "defense", stages: -1, chance: 30 }] }
]};

// Base Charmander

const Charmander = {
    HP: 39,
    Attack: 52,
    Defense: 43,
    SpAttack: 60,
    SpDefense: 50,
    Speed: 65
};


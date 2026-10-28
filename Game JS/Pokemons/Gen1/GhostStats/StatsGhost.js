const movesGhost = {
    Gengar: [
    // ===== NORMAL =====
    { name: "Scary Face",       type: "normal",   power: 0,   pp: 10, CategoryKey: "Status",   description: "Reduz bastante a Velocidade do alvo.", effects: [{ target: "enemy", stat: "Speed", stages: -2, chance: 100 }] },
    
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

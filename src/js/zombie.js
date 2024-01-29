import Character from "./character";
// import Bowman from "./bowman";
// import Swordsman from "./swordsman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Undead from "./undead";


export default class Zombie extends Character {
    constructor(name) {
        super(name);
        this.type = 'Zombie';
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10
    }

    levelUP() {
        const baseStats = super.levelUP(this.health, this.level, this.attack, this.defence);
        return baseStats
    }
}
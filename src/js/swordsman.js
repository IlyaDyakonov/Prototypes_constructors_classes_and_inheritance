import Character from "./character";
// import Bowman from "./bowman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Undead from "./undead";
// import Zombie from "./zombie";


export default class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Swordsman';
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
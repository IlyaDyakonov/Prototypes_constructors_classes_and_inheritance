import Character from "./character";
// import Swordsman from "./swordsman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Undead from "./undead";
// import Zombie from "./zombie";


export default class Bowman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Bowman';
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25
    }

    levelUP() {
        const baseStats = super.levelUP(this.health, this.level, this.attack, this.defence);
        return baseStats
    }
}
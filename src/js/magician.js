import Character from "./character";
// import Bowman from "./bowman";
// import Swordsman from "./swordsman";
// import Daemon from "./daemon";
// import Undead from "./undead";
// import Zombie from "./zombie";


export default class Magician extends Character {
    constructor(name) {
        super(name);
        this.type = 'Magician';
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40
    }

    levelUP() {
        const baseStats = super.levelUP(this.health, this.level, this.attack, this.defence);
        return baseStats
    }
}
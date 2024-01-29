import Character from "./character";
// import Bowman from "./bowman";
// import Swordsman from "./swordsman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Zombie from "./zombie";


export default class Undead extends Character {
    constructor(name) {
        super(name);
        this.type = 'Undead';
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
import Character from "./character";
// import Bowman from "./bowman";
// import Swordsman from "./swordsman";
// import Daemon from "./daemon";
// import Undead from "./undead";
// import Zombie from "./zombie";


export default class Magician extends Character {
    constructor(name, type = "Magician") {
        super(name, type);
        this.attack = 10;
        this.defence = 40
    }

    levelUP() {
        super.levelUP();
    }
}
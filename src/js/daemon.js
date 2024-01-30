import Character from "./character";
// import Bowman from "./bowman";
// import Swordsman from "./swordsman";
// import Magician from "./magician";
// import Undead from "./undead";
// import Zombie from "./zombie";


export default class Daemon extends Character {
    constructor(name, type = "Daemon") {
        super(name, type);
        this.attack = 10;
        this.defence = 40
    }

    levelUP() {
        super.levelUP();
    }
}
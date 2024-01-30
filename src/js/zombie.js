import Character from "./character";
// import Bowman from "./bowman";
// import Swordsman from "./swordsman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Undead from "./undead";


export default class Zombie extends Character {
    constructor(name, type = "Zombie") {
        super(name, type);
        this.attack = 40;
        this.defence = 10
    }

    levelUP() {
        super.levelUP();
    }
}
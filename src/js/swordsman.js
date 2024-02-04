import Character from "./character";
// import Bowman from "./bowman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Undead from "./undead";
// import Zombie from "./zombie";


export default class Swordsman extends Character {
    constructor(name, type = "Swordsman") {
        super(name, type);
        this.attack = 40;
        this.defence = 10
    }
}
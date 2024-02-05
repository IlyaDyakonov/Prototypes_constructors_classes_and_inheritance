import Character from "./character";
// import Swordsman from "./swordsman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Undead from "./undead";
// import Zombie from "./zombie";


export default class Bowman extends Character {
    constructor(name, type = "Bowman") {
        super(name, type);
        this.attack = 25;
        this.defence = 25
    }
}

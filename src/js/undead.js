import Character from "./character";
// import Bowman from "./bowman";
// import Swordsman from "./swordsman";
// import Magician from "./magician";
// import Daemon from "./daemon";
// import Zombie from "./zombie";


export default class Undead extends Character {
    constructor(name, type = "Undead") {
        super(name, type);
        this.attack = 25;
        this.defence = 25
    }
}
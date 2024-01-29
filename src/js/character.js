export default class Character {
    constructor(name) {
        if (typeof name === 'string' && (name.length >= 2 && name.length <= 10)) {
            this.name = name;
        } else {
            throw new Error("ИМЯ указано неверно!")
        }
    }

    levelUP (health, level, attack, defence) {
        if (health > 0) {
            this.health = 100;
            this.level = level + 1;
            this.attack = (attack / 100) * 120;
            this.defence = (defence / 100) * 120;
        } else {
            throw new Error ("Нельзя повысить левел умершего персонажа!")
        }
    }

    demage (points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }else {
            throw new Error ("Персонаж уже мёртв!")
        }
    }
}
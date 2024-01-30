export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (!(typeof name === 'string') || (name.length < 2 || name.length > 10)) {
            throw new Error("ИМЯ указано неверно!")
        } else {
            this.name = name;
        }

        if (!types.includes(type)) {
            throw new Error("Такого класса персонажа не существует!")
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;
    }

    levelUP () {
        if (this.health <= 0) {
            throw new Error ("Нельзя повысить левел умершего персонажа!")
        } else {
            this.health = 100;
            this.level = this.level + 1;
            this.attack = (this.attack / 100) * 120;
            this.defence = (this.defence / 100) * 120;
        }
    }

    demage (points) {
        if (this.health <= 0) {
            throw new Error ("Персонаж уже мёртв!")
        } else {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
import Character from '../character';
import Bowman from '../bowman';
import Zombie from '../zombie';


test ('Имя меньше 2', () => {
    expect(() => {
        new Character('F');}).toThrow("ИМЯ указано неверно!");
    });

test('имя больше 10', () => {
    expect(() => {
        new Character('праостарроо');}).toThrow('ИМЯ указано неверно!');
    });

test ('Имя строка', () => {
    expect(() => {
        new Character(3242, 'Bowman');
    }).toThrow("ИМЯ указано неверно!");
});

test('Имя введено корректно', () => {
    const firstPlayer = new Character('Silverhend', 'Bowman');
    expect(firstPlayer.name).toBe('Silverhend');
});

test('Класс персонажа введён правильно', () => {
    const firstPlayer = new Character('Silverhend', 'Bowman');
    expect(firstPlayer.type).toBe('Bowman');
});

test('Класс персонажа введён НЕ правильно', () => {
    const firstPlayer = () => new Character('Silverhend', 'Bowm');
    expect(firstPlayer).toThrow("Такого класса персонажа не существует!");
});

test('тестируем levelUP с колличеством health = 0', () => {
    const firstPlayer = new Character('Silverhend', 'Bowman');
    firstPlayer.health = 0;
    expect(() => {
        firstPlayer.levelUP(firstPlayer.health, firstPlayer.level, firstPlayer.attack, firstPlayer.defence);
    }).toThrow("Нельзя повысить левел умершего персонажа!");
});

test('тестируем levelUP Bowman с колличеством health > 0', () => {
    const player = new Bowman('Silverhend');
    player.levelUP();
    expect(player.health).toBe(100);
    expect(player.level).toBe(2);
    expect(player.attack).toBe(30);
    expect(player.defence).toBe(30);
});

test('тестируем ошибку в уроне в demage', () => {
    const firstPlayer = new Character('Silverhend', 'Bowman');
    firstPlayer.health = 0;
    expect(() => {
        firstPlayer.demage(10);
    }).toThrow('Персонаж уже мёртв!')
});

test('тестируем урон одного персонажа по другому', () => {
    const firstPlayer = new Bowman('Silverhend', 'Bowman');
    const secondPlayer = new Zombie('Sina', 'Zombie');
    const healthFirstPlayer = 70;
    firstPlayer.demage(secondPlayer.attack)
    expect(firstPlayer.health).toBe(70);
})
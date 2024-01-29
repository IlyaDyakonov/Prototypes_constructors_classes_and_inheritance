import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
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
            new Character(3242);}).toThrow("ИМЯ указано неверно!");
    });

test('Имя введено корректно', () => {
    const firstPlayer = new Character('Silverhend');
    expect(firstPlayer.name).toBe('Silverhend');
    });

test('тестируем levelUP с колличеством health = 0', () => {
    const firstPlayer = new Character('Silverhend');
    firstPlayer.health = 0;
    expect(() => {
        firstPlayer.levelUP(firstPlayer.health, firstPlayer.level, firstPlayer.attack, firstPlayer.defence);
    }).toThrow("Нельзя повысить левел умершего персонажа!");
});

test('тестируем ошибку в уроне в demage', () => {
    const firstPlayer = new Character('Silverhend');
    firstPlayer.health = 0;
    expect(() => {
        firstPlayer.demage(10);
    }).toThrow('Персонаж уже мёртв!')
});


// type bowman
test('создание type Bowman', () => {
    const player = new Bowman('Silverhend');
    const character = {
    'name': 'Silverhend',
    'type': 'Bowman',
    'health': 100,
    'level': 1,
    'attack': 25,
    'defence': 25
};
    expect(player).toEqual(character)
});

test('тестируем levelUP Bowman с колличеством health > 0', () => {
    const player = new Bowman('Silverhend');
    player.levelUP(player.health, player.level, player.attack, player.defence);
    expect(player.health).toBe(100);
    expect(player.level).toBe(2);
    expect(player.attack).toBe(30);
    expect(player.defence).toBe(30);
});

test('тестируем урон по персонажу Bowman', () => {
    const firstPlayer = new Bowman('Silverhend');
    firstPlayer.demage(10);
    expect(firstPlayer.health).toBe(92.5);
});


// type Swordsman
test('создание type Swordsman', () => {
    const player = new Swordsman('Silverhend');
    const haracters = {
    'name': 'Silverhend',
    'type': 'Swordsman',
    'health': 100,
    'level': 1,
    'attack': 40,
    'defence': 10
};
    expect(player).toEqual(haracters)
});

test('тестируем levelUP Swordsman с колличеством health > 0', () => {
    const player = new Swordsman('Silverhend');
    player.levelUP(player.health, player.level, player.attack, player.defence);
    expect(player.health).toBe(100);
    expect(player.level).toBe(2);
    expect(player.attack).toBe(48);
    expect(player.defence).toBe(12);
});

test('тестируем урон по персонажу Swordsman', () => {
    const firstPlayer = new Swordsman('Silverhend');
    firstPlayer.demage(10);
    expect(firstPlayer.health).toBe(91);
});

// type Magician
test('создание type Magician', () => {
    const player = new Magician('Silverhend');
    const haracters = {
    'name': 'Silverhend',
    'type': 'Magician',
    'health': 100,
    'level': 1,
    'attack': 10,
    'defence': 40
};
    expect(player).toEqual(haracters)
});

test('тестируем levelUP Magician с колличеством health > 0', () => {
    const player = new Magician('Silverhend');
    player.levelUP(player.health, player.level, player.attack, player.defence);
    expect(player.health).toBe(100);
    expect(player.level).toBe(2);
    expect(player.attack).toBe(12);
    expect(player.defence).toBe(48);
});

test('тестируем урон по персонажу Magician', () => {
    const firstPlayer = new Magician('Silverhend');
    firstPlayer.demage(10);
    expect(firstPlayer.health).toBe(94);
});

// type Daemon
test('создание type Daemon', () => {
    const player = new Daemon('Silverhend');
    const haracters = {
    'name': 'Silverhend',
    'type': 'Daemon',
    'health': 100,
    'level': 1,
    'attack': 10,
    'defence': 40
};
    expect(player).toEqual(haracters)
});

test('тестируем levelUP Daemon с колличеством health > 0', () => {
    const player = new Daemon('Silverhend');
    player.levelUP(player.health, player.level, player.attack, player.defence);
    expect(player.health).toBe(100);
    expect(player.level).toBe(2);
    expect(player.attack).toBe(12);
    expect(player.defence).toBe(48);
});

test('тестируем урон по персонажу Daemon', () => {
    const firstPlayer = new Daemon('Silverhend');
    firstPlayer.demage(10);
    expect(firstPlayer.health).toBe(94);
});

// type Undead
test('создание type Undead', () => {
    const player = new Undead('Silverhend');
    const haracters = {
    'name': 'Silverhend',
    'type': 'Undead',
    'health': 100,
    'level': 1,
    'attack': 25,
    'defence': 25
};
    expect(player).toEqual(haracters)
});

test('тестируем levelUP Undead с колличеством health > 0', () => {
    const player = new Undead('Silverhend');
    player.levelUP(player.health, player.level, player.attack, player.defence);
    expect(player.health).toBe(100);
    expect(player.level).toBe(2);
    expect(player.attack).toBe(30);
    expect(player.defence).toBe(30);
});

test('тестируем урон по персонажу Undead', () => {
    const firstPlayer = new Undead('Silverhend');
    firstPlayer.demage(10);
    expect(firstPlayer.health).toBe(92.5);
});

// type Zombie
test('создание type Zombie', () => {
    const player = new Zombie('Silverhend');
    const haracters = {
    'name': 'Silverhend',
    'type': 'Zombie',
    'health': 100,
    'level': 1,
    'attack': 40,
    'defence': 10
};
    expect(player).toEqual(haracters)
});

test('тестируем levelUP Zombie с колличеством health > 0', () => {
    const player = new Zombie('Silverhend');
    player.levelUP(player.health, player.level, player.attack, player.defence);
    expect(player.health).toBe(100);
    expect(player.level).toBe(2);
    expect(player.attack).toBe(48);
    expect(player.defence).toBe(12);
});

test('тестируем урон по персонажу Zombie', () => {
    const firstPlayer = new Zombie('Silverhend');
    firstPlayer.demage(10);
    expect(firstPlayer.health).toBe(91);
});
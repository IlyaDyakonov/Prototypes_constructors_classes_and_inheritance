import Undead from '../undead';


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
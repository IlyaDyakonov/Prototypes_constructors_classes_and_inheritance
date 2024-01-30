import Swordsman from '../swordsman';

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
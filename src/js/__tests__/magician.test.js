import Magician from '../magician';


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
import Zombie from '../zombie';


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
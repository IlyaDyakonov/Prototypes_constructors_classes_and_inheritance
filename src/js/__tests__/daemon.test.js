import Daemon from '../daemon';


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
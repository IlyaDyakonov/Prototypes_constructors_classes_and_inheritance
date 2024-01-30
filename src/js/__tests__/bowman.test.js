import Bowman from '../bowman';

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

test('тестируем урон по персонажу Bowman', () => {
    const firstPlayer = new Bowman('Silverhend');
    firstPlayer.demage(10);
    expect(firstPlayer.health).toBe(92.5);
});
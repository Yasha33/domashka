var bg = new BattleGround(30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character(5));

console.log(bg);

var snake = new Snake(1);
bg.area.find(el => el.type === 'Character').attack(snake);

var pol = new Pole('#wrapper', bg);


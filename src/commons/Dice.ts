const random = (min:number, max:number):number => Math.floor(min + Math.random() * (max - min + 1));

const rollDice = (faces:number):number => {
  switch (faces) {
    case 66:
      return rollDice(6) * 10 + rollDice(6);
    default:
      return random(1, faces);
  }
};

const Dice = {
  roll: (x:number) => rollDice(x),
  d2: () => rollDice(2),
  d4: () => rollDice(4),
  d6: () => rollDice(6),
  d8: () => rollDice(8),
  d10: () => rollDice(10),
  d12: () => rollDice(12),
  d20: () => rollDice(20),
  d66: () => rollDice(66),
  d100: () => rollDice(100),
};

export default Dice;

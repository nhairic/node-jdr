import Dice from "../Dice";

test('should roll some dice', () => {

  const result = Dice.d10();
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThan(11);
});

import RuinGenerator from '../../Class/RuinGenerator';

test('should roll some gangrene', () => {
  const gangrene = new RuinGenerator();
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(2).mockReturnValueOnce(11);
  expect(gangrene.generate()).toEqual({ description: '', diceResult: 11, name: 'Abri' });
});

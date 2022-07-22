import GangreneGenerator from '../../Class/GangreneGenerator';

test('should roll some gangrene', () => {
  const gangrene = new GangreneGenerator();
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(66);
  expect(gangrene.generate()).toEqual(2);
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(56);
  expect(gangrene.generate()).toEqual(2);
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(60);
  expect(gangrene.generate()).toEqual(2);
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(11);
  expect(gangrene.generate()).toEqual(0);
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(12);
  expect(gangrene.generate()).toEqual(0);
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(13);
  expect(gangrene.generate()).toEqual(1);
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(55);
  expect(gangrene.generate()).toEqual(1);
  jest.spyOn(gangrene.dice, 'roll').mockReturnValue(42);
  expect(gangrene.generate()).toEqual(1);
});

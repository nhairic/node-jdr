import ArtifactGenerator from '../../Class/ArtifactGenerator';

test('Should get a artifact', () => {
  const artifact = new ArtifactGenerator();
  jest.spyOn(artifact.dice, 'roll').mockReturnValue(112);
  const res = artifact.generate();
  expect(res.name).toEqual('ANTIDÉPRESSEURS');
  expect(res.diceResultB).toEqual(111);
  expect(res.diceResultH).toEqual(114);
});

test('Should get a artifact', () => {
  const artifact = new ArtifactGenerator();
  jest.spyOn(artifact.dice, 'roll').mockReturnValue(111);
  const res = artifact.generate();
  expect(res.name).toEqual('ANTIDÉPRESSEURS');
  expect(res.diceResultB).toEqual(111);
  expect(res.diceResultH).toEqual(114);
});

test('Should get a artifact', () => {
  const artifact = new ArtifactGenerator();
  jest.spyOn(artifact.dice, 'roll').mockReturnValue(114);
  const res = artifact.generate();
  expect(res.name).toEqual('ANTIDÉPRESSEURS');
  expect(res.diceResultB).toEqual(111);
  expect(res.diceResultH).toEqual(114);
});

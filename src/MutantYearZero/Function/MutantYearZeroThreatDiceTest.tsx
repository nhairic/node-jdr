import Dice from '../../Transverse/Dice/Class/Dice';
import MutantYearZeroStdDiceTestResultType from '../Type/MutantYearZeroStdDiceTestResultType';

const MutantYearZeroThreatDiceTest = (
  numberOfDice: number,
): MutantYearZeroStdDiceTestResultType => {
  const dice: Dice = new Dice(6);
  let radioactive: number = 0;
  let biohazard: number = 0;
  const forceAttribute: number = 0;
  const forceSkill: number = 0;
  const forceEquipement: number = 0;
  for (let index = 0; index < numberOfDice; index += 1) {
    const roll = dice.roll(1);
    if (roll === 6) {
      radioactive += 1;
    } else if (roll === 1) {
      biohazard += 1;
    }
  }
  return {
    radioactive,
    biohazard,
    forceAttribute,
    forceSkill,
    forceEquipement,
  };
};

export default MutantYearZeroThreatDiceTest;

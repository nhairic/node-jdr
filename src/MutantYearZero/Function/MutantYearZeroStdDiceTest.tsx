import Dice from '../../Transverse/Dice/Class/Dice';
import MutantYearZeroStdDiceTestResultType from '../Type/MutantYearZeroStdDiceTestResultType';

const MutantYearZeroStdDiceTest = (
  attribute: number = 0,
  skill: number = 0,
  equipement: number = 0,
): MutantYearZeroStdDiceTestResultType => {
  const dice: Dice = new Dice(6);
  let radioactive: number = 0;
  let biohazard: number = 0;
  let forceAttribute: number = 0;
  let forceSkill: number = 0;
  let forceEquipement: number = 0;
  for (let index = 0; index < attribute; index += 1) {
    const roll = dice.roll(1);
    if (roll === 6) {
      radioactive += 1;
    } else if (roll !== 1) {
      forceAttribute += 1;
    }
  }
  for (let index = 0; index < skill; index += 1) {
    const roll = dice.roll(1);
    if (roll === 6) {
      radioactive += 1;
    } else if (roll !== 1) {
      forceSkill += 1;
    }
  }
  for (let index = 0; index < equipement; index += 1) {
    const roll = dice.roll(1);
    if (roll === 6) {
      radioactive += 1;
    } else if (roll === 1) {
      biohazard += 1;
    } else {
      forceEquipement += 1;
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

export default MutantYearZeroStdDiceTest;

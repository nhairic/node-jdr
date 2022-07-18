import Dice from '../../Transverse/Dice/Class/Dice';
import GangreneGeneratorInterface from '../Interface/GangreneGeneratorInterface';
import SectorDataType from '../Type/SectorDataType';

class SectorGenerator {
  _dice66 : Dice = new Dice(66);

  _grangreneGenerator : GangreneGeneratorInterface;

  _sector: SectorDataType = {
    position: '',
    environment: '',
    ruins: { diceResult: 0, name: '' },
    artifact: '',
    exploredLevel: '',
    threat: '',
    grangreneLevel: 1,
  };

  _gangrene: number = 0;

  _environmentName: string = '';

  constructor(grangreneGenerator: GangreneGeneratorInterface) {
    this._grangreneGenerator = grangreneGenerator;
  }

  public generate = (): SectorDataType => {
    this._sector.grangreneLevel = this._grangreneGenerator.generate();
    return this._sector;
  };
}

export default SectorGenerator;

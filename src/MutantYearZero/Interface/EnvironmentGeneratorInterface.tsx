import EnvironmentDataType from '../Type/EnvironmentDataType';

interface EnvironmentGeneratorInterface {
  threatLevel: number;
  generate(): EnvironmentDataType;
}

export default EnvironmentGeneratorInterface;

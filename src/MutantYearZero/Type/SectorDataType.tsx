import AmbienceDataType from './AmbienceDataType';
import EnvironmentDataType from './EnvironmentDataType';

type SectorDataType = {
    position: string;
    environment: EnvironmentDataType;
    exploredLevel: string;// e|c|u explored|crossed|unknowed
    grangreneLevel: number;
    threatLevel: number;
    ambience: AmbienceDataType;
}

export default SectorDataType;

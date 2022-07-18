import RuinDataType from './RuinDataType';

type SectorDataType = {
    position: string;
    environment: string;
    ruins: RuinDataType;
    artifact: string;
    exploredLevel: string;// e|c|u explored|crossed|unknowed
    threat: string;
    grangreneLevel: number;
}

export default SectorDataType;

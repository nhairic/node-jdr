import ArtifactDataType from './ArtifactDataType';
import RuinDataType from './RuinDataType';
import ThreatDataType from './ThreatDataType';

type EnvironmentDataType = {
    name: string;
    className: string;
    threat: ThreatDataType;
    artifact: ArtifactDataType;
    ruin: RuinDataType;
}

export default EnvironmentDataType;

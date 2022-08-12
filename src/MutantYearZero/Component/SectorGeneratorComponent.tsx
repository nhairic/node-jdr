import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { CardGroup, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import SectorDataType from '../Type/SectorDataType';
import SectorGenerator from '../Class/SectorGenerator';
import GangreneGenerator from '../Class/GangreneGenerator';
import AmbienceGenerator from '../Class/AmbienceGenerator';
import EnvironmentGenerator from '../Class/EnvironmentGenerator';
import RuinGenerator from '../Class/RuinGenerator';
import ThreatGenerator from '../Class/ThreatGenerator';
import ArtifactGenerator from '../Class/ArtifactGenerator';
import GangreneComponent from './GangreneComponent';

const SectorGeneratorComponent: React.FC = () => {
  const [data, setValue] = useState<SectorDataType>({
    position: '',
    environment: {
      name: '',
      className: '',
      threat: {
        diceResultB: 0,
        diceResultH: 0,
        name: '',
        description: '',
        effect: '',
        zoneKnowledgeModifier: 0,
        page: 0,
        special: false,
      },
      artifact: {
        diceResultB: 0,
        diceResultH: 0,
        name: '',
        commentaire: '',
        mandatoryDev: '',
        bonusDev: '',
        effect: '',
        description: '',
      },
      ruin: {
        diceResult: 0,
        name: '',
        description: '',
      },
    },
    exploredLevel: 'c',
    grangreneLevel: 0,
    threatLevel: 0,
    ambience: {
      diceResult: 0,
      name: '',
      teaser: '',
      type: '',
    },
  });
  const grangreneGenerator = new GangreneGenerator();
  const ambienceGenerator = new AmbienceGenerator();
  const ruinGenerator = new RuinGenerator();
  const threatGenerator = new ThreatGenerator();
  const artifactGenerator = new ArtifactGenerator();
  const environmentGenerator = new EnvironmentGenerator(
    ruinGenerator,
    threatGenerator,
    artifactGenerator,
  );

  const generator = new SectorGenerator(
    grangreneGenerator,
    ambienceGenerator,
    environmentGenerator,
  );
  return (
    <Col className="sector-generator">
      <h2 className="h2-myz">Sector generator</h2>
      <CardGroup className="sector-generator">
        <Card className="sector-environment">
          <Card.Header className="card-header-sector-generator">Environnement</Card.Header>
          <Card.Body>
            {data.environment.name}
            <ul>
              <li>{data.exploredLevel}</li>
            </ul>
          </Card.Body>
          <Card.Footer className="card-footer-sector-generator">
            <GangreneComponent level={data.grangreneLevel} />
          </Card.Footer>
        </Card>
        <Card className="sector-ambience">
          <Card.Header>Ambiance</Card.Header>
          <Card.Body>
            <Card.Title>{data.ambience.name}</Card.Title>
            <Card.Text>{data.ambience.teaser}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {data.ambience.type}
          </Card.Footer>
        </Card>
        <Card className="sector-ruin">
          <Card.Header>Ruines</Card.Header>
          <Card.Body>
            <Card.Title>{data.environment.ruin.name}</Card.Title>
            <Card.Text>{data.environment.ruin.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            { '&nbsp;' }
          </Card.Footer>
        </Card>
        <Card className="sector-artefact">
          <Card.Header>Artefact</Card.Header>
          <Card.Body>
            <Card.Title>{data.environment.artifact.name}</Card.Title>
            <Card.Text>{data.environment.artifact.description}</Card.Text>
            <Card.Text>{data.environment.artifact.effect}</Card.Text>
            <Card.Text>{data.environment.artifact.mandatoryDev}</Card.Text>
            <Card.Text>{data.environment.artifact.bonusDev}</Card.Text>
            <Card.Text>{data.environment.artifact.commentaire}</Card.Text>
          </Card.Body>
          <Card.Footer>
            { '&nbsp;' }
          </Card.Footer>
        </Card>
        <Card className="sector-threat">
          <Card.Header>Menace</Card.Header>
          <Card.Body>
            <Card.Title>{data.environment.threat.name}</Card.Title>
            <Badge pill bg="warning">
              {data.environment.threat.zoneKnowledgeModifier}
            </Badge>
            <Card.Text>
              <div className="scroll-description">
                {data.environment.threat.description}
              </div>
              <em>{data.environment.threat.effect}</em>
              <em>{data.environment.threat.page}</em>
              <em>{data.environment.threat.special}</em>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <span className="font-override-for-font-mutante">
              Niveau :
              {' '}
              {data.threatLevel}
            </span>
          </Card.Footer>
        </Card>
      </CardGroup>
      <div>
        <button type="button" onClick={() => setValue(generator.generate())}>Générer</button>
      </div>
    </Col>
  );
};

export default SectorGeneratorComponent;

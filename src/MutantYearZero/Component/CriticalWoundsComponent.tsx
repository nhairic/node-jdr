import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CriticalWoundsDataType from '../Type/CriticalWoundsDataType';
import CriticalWoundsGenerator from '../Class/CriticalWoundsGenerator';

/*
const atypique = {
  blessure: 'Dégâts atypiques',
  mortelle: 'oui',
  periode_soin: 'D6 jours',
  effet_durant_guerison: 'Vous êtes inconscient jusqu’à ce qu’on vous soigne ou que vous mourriez.',
  convalescence: '-',
};

const force = {
  blessure: 'Dégâts d’un jet forcé',
  mortelle: 'non',
  periode_soin: '-',
  effet_durant_guerison: 'Aucun.',
  convalescence: '-',
};
*/

const CriticalWoundsComponent : React.FC = () => {
  const criticalWoundsGenerator = new CriticalWoundsGenerator();
  const [criticalWound, setValue] = useState<CriticalWoundsDataType>(
    criticalWoundsGenerator.DefaultWound,
  );

  return (
    <Card className="critical-wounds">
      <Card.Header className="h2-myz">
        <Card.Title>Blessure Critique</Card.Title>
      </Card.Header>
      <Card.Body className="bg-blur">
        <ul>
          <li>
            Dé :
            {' '}
            {criticalWound?.diceResult ? criticalWound?.diceResult : ''}
          </li>
          <li>
            Blessure :
            {' '}
            {criticalWound?.blessure ?? ''}
          </li>
          <li>
            Mortelle :
            {' '}
            {criticalWound?.mortelle ?? ''}
          </li>
          <li>
            Période de soin :
            {' '}
            {criticalWound?.periode_soin ?? ''}
          </li>
          <li>
            Effet durant la guerison :
            {' '}
            {criticalWound?.effet_durant_guerison ?? ''}
          </li>
          <li>
            Convalescence(jour) :
            {' '}
            {criticalWound?.convalescence ?? ''}
          </li>
        </ul>
        <em>
          * Pour une blessure aussi grave,
          tous les tests de Soins sont effectués avec un modificateur de -1.
        </em>
      </Card.Body>
      <Card.Footer className="bg-dark">
        <Button variant="warning" id="launchcw" key="launchCW" type="button" onClick={() => setValue(criticalWoundsGenerator.generate())}>Lancer</Button>
      </Card.Footer>
    </Card>
  );
};
/*
        <tfoot>
          <tr>
            <li colSpan={6}><strong>Autre critiques possible</strong></li>
          </tr>
          <tr>
            <li>-</li>
            <li>{atypique.blessure}</li>
            <li>{atypique.mortelle}</li>
            <li>{atypique.periode_soin}</li>
            <li>{atypique.effet_durant_guerison}</li>
            <li>{atypique.convalescence}</li>
          </tr>
          <tr>
            <li>-</li>
            <li>{force.blessure}</li>
            <li>{force.mortelle}</li>
            <li>{force.periode_soin}</li>
            <li>{force.effet_durant_guerison}</li>
            <li>{force.convalescence}</li>
          </tr>
        </tfoot>

*/
export default CriticalWoundsComponent;

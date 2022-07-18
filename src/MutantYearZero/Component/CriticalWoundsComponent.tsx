import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dice from '../../Transverse/Dice/Class/Dice';
import WoundData from '../Type/WoundDataType';
import CWJson from '../Data/critiques.json';

interface CriticalWoundsStateInterface {
  criticalWound: null | WoundData;
  message: null | string;
}

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

const DefaultWound = {
  d66: 0,
  blessure: ' ',
  mortelle: '-',
  periode_soin: ' ',
  effet_durant_guerison: ' ',
  convalescence: '',
};
// todo tranform in function
class CriticalWoundsComponent extends React.Component <{}, CriticalWoundsStateInterface> {
  constructor() {
    super({});
    this.state = {
      criticalWound: null,
      message: null,
    };
  }

  getCriticalWounds() {
    const dice = new Dice(6);
    const WoundIndex = dice.roll(2, true);
    const wound = CWJson.find((cw) => cw.d66 === WoundIndex);
    if (wound) {
      this.setState(
        {
          criticalWound: wound,
        },
      );
    }
  }

  // eslint-disable-next-line class-methods-use-this
  searchClick = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value, 10);
    if (newValue > 10 && newValue < 67) {
      const wound = CWJson.find((cw) => cw.d66 === newValue);
      if (wound) {
        this.setState(
          {
            criticalWound: wound,
            message: null,
          },
        );
        return;
      }
    }
    this.setState(
      {
        criticalWound: DefaultWound,
        message: `Aucun résultat pour ${newValue}`,
      },
    );
  };

  render() {
    const { criticalWound, message } = this.state;
    return (
      <div className="critical-wounds">
        <h2 className="h2-myz">Blessure Critique</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>D</th>
              <th>Blessure</th>
              <th>Mortelle</th>
              <th>Période de soin</th>
              <th>Effet durant la guerison</th>
              <th>Convalescence(jour)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{criticalWound?.d66 ? criticalWound?.d66 : ''}</td>
              <td>{criticalWound?.blessure ?? ''}</td>
              <td>{criticalWound?.mortelle ?? ''}</td>
              <td>{criticalWound?.periode_soin ?? ''}</td>
              <td>{criticalWound?.effet_durant_guerison ?? ''}</td>
              <td>{criticalWound?.convalescence ?? ''}</td>
            </tr>
            <tr>
              <td colSpan={6}>
                <em>
                  * Pour une blessure aussi grave,
                  tous les tests de Soins sont effectués avec un modificateur de -1.
                </em>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}><strong>Autre critiques possible</strong></td>
            </tr>
            <tr>
              <td>-</td>
              <td>{atypique.blessure}</td>
              <td>{atypique.mortelle}</td>
              <td>{atypique.periode_soin}</td>
              <td>{atypique.effet_durant_guerison}</td>
              <td>{atypique.convalescence}</td>
            </tr>
            <tr>
              <td>-</td>
              <td>{force.blessure}</td>
              <td>{force.mortelle}</td>
              <td>{force.periode_soin}</td>
              <td>{force.effet_durant_guerison}</td>
              <td>{force.convalescence}</td>
            </tr>
          </tfoot>
        </Table>
        <Row>
          <Col>
            { message ? (
              <Alert variant="warning">
                {message}
              </Alert>
            ) : ''}
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Button variant="dark" id="launchcw" key="launchCW" type="button" onClick={() => this.getCriticalWounds()}>Lancer</Button>
          </Col>
          <Col>
            <Form.Label htmlFor="searchcw" variant="dark">
              Search
            </Form.Label>
            <input
              type="number"
              width="20"
              min="11"
              max="66"
              id="searchcw"
              name="search_cw"
              className="form-range"
              key="searchCW"
              onChange={this.searchClick}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CriticalWoundsComponent;

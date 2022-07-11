import * as React from 'react';
import Dice66 from '../Dice/Dice66';
import WoundData from './WoundData';
import CWJson from './Data/critiques.json';

interface CriticalWoundsStateInterface {
  criticalWound: null | WoundData;
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

class CriticalWounds extends React.Component <{}, CriticalWoundsStateInterface> {
  constructor() {
    super({});
    this.state = {
      criticalWound: null,
    };
  }

  getCriticalWounds() {
    const dice = new Dice66();
    const WoundIndex = dice.result();
    const wound = CWJson.find((cw) => cw.d66 === WoundIndex);
    if (wound) {
      this.setState(
        {
          criticalWound: wound,
        },
      );
    }
  }

  render() {
    const { criticalWound } = this.state;
    return (
      <div className="critical-wounds">
        <h2>Blessure Critique</h2>
        <table>
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
              <td>{criticalWound?.d66 ?? ''}</td>
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
        </table>
        <button type="button" onClick={() => this.getCriticalWounds()}>Lancer</button>
      </div>
    );
  }
}

export default CriticalWounds;

import * as React from 'react';

interface ArchComponentStateInterface {
  name: string;
  position: string;
}

class ArchComponent extends React.Component <{}, ArchComponentStateInterface> {
  constructor() {
    super({});
    this.state = {
      name: 'Apolo 123',
      position: 'c-12',
    };
  }

  render() {
    const { name, position } = this.state;
    return (
      <div>
        <h2>Arche</h2>
        <dd>{name}</dd>
        <dd>{position}</dd>
      </div>
    );
  }
}

export default ArchComponent;

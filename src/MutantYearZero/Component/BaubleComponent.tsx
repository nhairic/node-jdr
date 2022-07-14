import React, { useState } from 'react';
import Bauble from '../Class/Bauble';
import BaubleDataType from '../Type/BaubleDataType';

const BaubleComponent: React.FC = () => {
  const [data, setValue] = useState<BaubleDataType>({
    diceResult: 0,
    name: '',
  });
  const bauble = new Bauble();
  return (
    <div>
      <h2>Babiole</h2>
      <span>{data.name}</span>
      <div>
        <input
          type="number"
          min="111"
          max="666"
          id="searchcw"
          name="search_cw"
          key="searchCW"
          onChange={(event) => setValue(bauble.getData(parseInt(event.target.value, 10)))}
        />
        <button type="button" onClick={() => setValue(bauble.getRandomData())}>Trouver une babiole</button>
      </div>
    </div>
  );
};

export default BaubleComponent;

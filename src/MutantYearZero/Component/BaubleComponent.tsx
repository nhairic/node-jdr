import React, { useState } from 'react';
import Bauble from '../Class/Bauble';
import BaubleDataType from '../Type/BaubleDataType';

const BaubleComponent: React.FC = () => {
  const [data, setValue] = useState<BaubleDataType>({
    d66: 0,
    name: '',
  });
  const bauble = new Bauble();
  return (
    <div>
      <h2>Babiole</h2>
      <span>{data.name}</span>
      <button type="button" onClick={() => setValue(bauble.getRandomData())}>Trouver une babiole</button>
    </div>
  );
};

export default BaubleComponent;

import React from 'react';
import { FaBiohazard, FaHeart } from 'react-icons/fa';

interface GangreneProps {
  level: number;
}

const GangreneComponent = ({ level }: GangreneProps) => {
  const gangrene = level === 0 ? <FaHeart color="green" /> : Array(level).fill(<FaBiohazard color="red" />);
  return (
    <div>
      { gangrene }
    </div>
  );
};

export default GangreneComponent;

import React, { ReactNode, useState } from 'react';
import { HiLoadComponent } from './common';

const ColorPicker = ({children}: { children: ReactNode }) => {
  const [color, setColor] = useState('');
  return <div className='card'>
    <input type='text' value={color} onChange={e => setColor(e.target.value)} placeholder='Введите желаемый цвет' />
    <p style={{color}}>Второй с чилдрен</p>
    {children}
  </div>;
};
const SecondSolution = () => <ColorPicker>
  <HiLoadComponent />
</ColorPicker>;
export default SecondSolution;

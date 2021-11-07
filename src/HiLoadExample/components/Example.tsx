import React, { FC, useState } from 'react';
import { HiLoadComponent } from './common';
import { ExampleType } from '../../types';

const Example: FC<ExampleType> = ({title, memo}) => {
  const [color, setColor] = useState('');
  return <div className='card'>
    <input type='text' value={color} onChange={e => setColor(e.target.value)} placeholder='Введите желаемый цвет' />
    <p style={{color}}>{title}</p>
    <HiLoadComponent memo={memo} />
  </div>;
};

export default Example;

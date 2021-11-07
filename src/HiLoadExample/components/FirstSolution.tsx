import React, { useState } from 'react';
import { HiLoadComponent } from './common';

export const InputForm = () => {
  const [color, setColor] = useState('');
  return (
    <>
      <input type='text' value={color} onChange={e => setColor(e.target.value)} placeholder='Введите желаемый цвет' />
      <p style={{color}}>Решение без мемо</p>
    </>
  );
};
const FirstSolution = () => {
  return (
    <div className='card'>
      <InputForm />
      <HiLoadComponent />
    </div>
  );
};


export  default FirstSolution

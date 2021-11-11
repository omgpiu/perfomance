import React, { useState } from 'react';
import { CARD_TEXT, HiLoadComponent } from './common';
import MyInput from '../../common/MyInput';

export const InputForm = () => {
  const [color, setColor] = useState('');

  return (
    <>
      <p style={{color}}>Решение без мемо</p>
      <MyInput
        value={color}
        onChange={e => setColor(e.target.value)} />
      <p>{CARD_TEXT.no_memo}
      </p>
    </>
  );
};
const FirstSolution = () => {
  console.log('FirstSolution : Решение без мемо');
  return (
    <div className='card'>
      <InputForm />
      <HiLoadComponent />
    </div>
  );
};


export default FirstSolution;

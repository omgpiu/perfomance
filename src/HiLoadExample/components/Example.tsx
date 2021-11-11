import React, { FC, useState } from 'react';
import { CARD_TEXT, HiLoadComponent } from './common';
import { ExampleType } from '../../types';
import MyInput from '../../common/MyInput';

const Example: FC<ExampleType> = ({title, memo}) => {
  console.log('Example ' + title);
  const [color, setColor] = useState('');
  return <div className='card'>
    <p style={{color}}>{title}</p>
    <MyInput
      value={color}
      onChange={e => setColor(e.target.value)} />
    <HiLoadComponent memo={memo} />
    {memo
      ? <p>{CARD_TEXT.memo}</p>
      : <p>{CARD_TEXT.freeze}</p>}
  </div>;
};

export default Example;

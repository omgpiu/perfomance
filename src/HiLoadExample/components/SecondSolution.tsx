import React, { ReactNode, useState } from 'react';
import { CARD_TEXT, HiLoadComponent } from './common';
import MyInput from '../../common/MyInput';

//https://stasonmars.ru/javascript/pogruzhaemsya-v-raboty-s-children-na-react/

const ColorPicker = ({children}: { children: ReactNode }) => {
  console.log('ColorPicker С чилдрен');
  const [color, setColor] = useState('');
  return <div className='card'>
    <p style={{color}}>Решение без мемо с чилдрен</p>
    <MyInput
      value={color}
      onChange={e => setColor(e.target.value)} />
    <p>
      {CARD_TEXT.children}</p>
    {children}
  </div>;
};
const SecondSolution = () => {
  console.log('SecondSolution: С чилдрен');
  return (
    <ColorPicker>
      <HiLoadComponent />
    </ColorPicker>);

};
export default SecondSolution;

import React, { ReactNode, useState } from 'react';
import { HiLoadComponent } from './common';
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
      Мы создали обертку со стейтом и инпутом, куда поместили наш тяжелый компонент.
      Если компонент-обертка с children ререндерится, это не значит, что будут перерендерены children. Как видим,
      обертка
      ререндерится, а внутренности нет.</p>
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

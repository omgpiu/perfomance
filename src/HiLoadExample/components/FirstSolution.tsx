import React, { useState } from 'react';
import { HiLoadComponent } from './common';
import MyInput from '../../common/MyInput';

export const InputForm = () => {
  const [color, setColor] = useState('');

  return (
    <>
      <p style={{color}}>Решение без мемо</p>
      <MyInput
        value={color}
        onChange={e => setColor(e.target.value)} />
      <p>Как же мы решили проблему с рередером? Стейт, который отвечает за value инпута был убран с родителя и перенесен
        в отдельный компонент с инпутом. Теперь родитель не ререндерится, а значит и тяжелый компонент находится в
        безопасности от лишней работы
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

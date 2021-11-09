import React, { FC, useState } from 'react';
import { HiLoadComponent } from './common';
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
      ? <p>Тут тот же самый компонент, но он не перерендеревается вслед за родителем.
        Мы видим, что происходит
        ререндер родителя,обернув тяжелый компонент мы ушли от лагов, но ререндеры остались у родителя. А если у нас 20
        siblings, всех в
        мемо? А как же память? </p>
      : <p>В этом кейсе нет никаких оберток, у нас выполняется синхронный блокирующий код, из-за рендера родителя, этот
        компонент так же перерендиривается. Ререндер не проблема, проблема если запускаются тяжелые вычисления. </p>}
  </div>;
};

export default Example;

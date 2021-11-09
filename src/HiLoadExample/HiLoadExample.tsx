import React from 'react';
import Example from './components/Example';
import FirstSolution from './components/FirstSolution';
import SecondSolution from './components/SecondSolution';
//основной видос https://www.youtube.com/watch?v=JzBEbo4enQY&t=178s

const HiLoadExample = () => {
  return (
    <div className='flex-wrapper full_content'>
      <Example title='Тут тормозит' />
      <Example title='А тут memo' memo />
      <FirstSolution />
      <SecondSolution />
    </div>
  );
};


export default HiLoadExample;

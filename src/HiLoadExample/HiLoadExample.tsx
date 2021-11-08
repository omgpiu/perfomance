import React from 'react';
import Example from './components/Example';
import FirstSolution from './components/FirstSolution';
import SecondSolution from './components/SecondSolution';


const HiLoadExample = () => {
  return (
    <div className='flex-wrapper'>
      <Example title='Тут тормозит' />
      <Example title='А тут memo' memo />
      <FirstSolution />
      <SecondSolution />
    </div>
  );
};


export default HiLoadExample;

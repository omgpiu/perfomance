import React from 'react';
import Example from './components/Example';
import FirstSolution from './components/FirstSolution';
import SecondSolution from './components/SecondSolution';
import {ExpensiveChildComponent} from "./styles";
//основной видос https://www.youtube.com/watch?v=JzBEbo4enQY&t=178s

const ExpensiveChild = () => {
  return (
    <ExpensiveChildComponent>
      <Example title='Тут тормозит' />
      <Example title='А тут memo' memo />
      <FirstSolution />
      <SecondSolution />
    </ExpensiveChildComponent>
  );
};


export default ExpensiveChild;

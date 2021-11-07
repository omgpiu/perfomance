import React, { useEffect, useRef, useState } from 'react';
import ExampleUseCallback from './ExampleUseCallback/Example';
import HiLoadExample from './HiLoadExample/HiLoadExample';


const First = ({className}: { className: string }) => {
  return <div className={className}>
    First
  </div>;
};
const Second = ({className}: { className: string }) => {
  const [state, setState] = useState(false);
  return <div className={className} onClick={() => setState(!state)}>
    <Third key='1' />
    Second
  </div>;
};
const Third = () => {
  console.log('render Third');
  return <div className={'third'}>
    Third
  </div>;
};


function App() {
  let style = useRef('border1');
  console.log('render');
  const [state, setState] = useState(0);
  console.log(state);
  useEffect(() => {
    style.current = '';
    // setTimeout(() => style = '', 2000);
  }, [state]);
  useEffect(() => {
    style.current = '';
  }, []);
  const a = () =>
    <>  <First className={'first'} />
      <Second className={'second'} />
      <Third key={'1'} /></>;


  return (
    <div className={`parent`}>
      <HiLoadExample />
      <ExampleUseCallback />
    </div>
  )
    ;
}

export default App;

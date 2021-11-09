import React from 'react';
import ExampleWithMemoization from './ExampleWIthMemoization/Example';
import HiLoadExample from './HiLoadExample/HiLoadExample';
import ExampleAppendToDom from './AttachToDom/AttachToDom';
import WithProvider from './WithProvider';



function App() {

  return (
    <div className='parent'
    >
      <HiLoadExample />
      <ExampleWithMemoization />
      <ExampleAppendToDom />
      <WithProvider />
    </div>
  );

}

export default App;

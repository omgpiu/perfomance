import React from 'react';
import ExampleUseCallback from './ExampleUseCallback/Example';
import HiLoadExample from './HiLoadExample/HiLoadExample';
import ExampleAppendToDom from './AttachToDom/AttachToDom';


function App() {

  return (
    <div className='parent'>
      <HiLoadExample />
      <ExampleUseCallback />
      <ExampleAppendToDom />
    </div>
  );

}

export default App;

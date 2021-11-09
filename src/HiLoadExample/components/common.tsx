import React, { memo } from 'react';

const PayloadComponent = () => {
  console.log('123');
  let now = performance.now();
  while (performance.now() - now < 300) {
    //delay for doing nothing
  }
  return <div className='pay-load'>
    Я делаю важную работу...
  </div>;
};
const MemoPayloadComponent = memo(() => <PayloadComponent />);
export const HiLoadComponent = ({memo}: { memo?: boolean }) => {
  return memo ? <MemoPayloadComponent /> : <PayloadComponent />;
};


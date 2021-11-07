import React, { memo, useState } from 'react';

const PayloadComponent = () => {
  let now = performance.now();
  while (performance.now() - now < 300) {
    //delay for doing nothing
  }
  return <div>
    Тяжелый компонент
  </div>;
};
const MemoPayloadComponent = memo(() => <PayloadComponent />);
export const HiLoadComponent = ({memo}: { memo?: boolean }) => {
  return memo ? <MemoPayloadComponent /> : <PayloadComponent />;
};


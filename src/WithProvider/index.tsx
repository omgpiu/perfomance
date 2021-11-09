import WithProviderPrimitive from './WithProviderPrimitive/WithProviderPrimitive';
import WithProviderObj from './WithProviderObj/WithProviderObj';
import React from 'react';
//основная статья https://alexsidorenko.com/blog/react-render-context/
const WithProvider = () => {
  return (
    <>
      <WithProviderPrimitive />
      <WithProviderObj />

    </>
  );
};
export default WithProvider;

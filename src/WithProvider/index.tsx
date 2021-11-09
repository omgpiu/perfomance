import WithProviderPrimitive from './WithProviderPrimitive/WithProviderPrimitive';
import WithProviderObj from './WithProviderObj/WithProviderObj';
import React from 'react';
//основная статья https://alexsidorenko.com/blog/react-render-context/
const WithProvider = () => {
  return (
    <div className='full_content box-shadow flex-wrapper min-width-1200'>
      <WithProviderPrimitive />
      <WithProviderObj />
    </div>
  );
};
export default WithProvider;

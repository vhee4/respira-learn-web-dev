// import React from 'react';
// import Loader from './index';

const SuspenseLoader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {/* <Loader /> */}
      Loading..
    </div>
  );
};

export default SuspenseLoader;

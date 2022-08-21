import React from 'react';

function Preloader(props) {
  const { load } = props;
  return <div id={load ? 'preloader' : 'preloader-none'} />;
}

export default Preloader;

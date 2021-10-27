import React, { useEffect, useState } from 'react';

const BigButton = (props) => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log("BigButton rerendered");
    onClick();
  }, [clickCount])

  

  const { onClick, label} = props;
  return (
    <button onClick={
      () => {
        setClickCount(clickCount + 1)
      }
      } style={{ background: clickCount > 2 ? 'red' : 'blue', padding:' 30px'}}>
      {label}
    </button>
  );
};


export default BigButton;
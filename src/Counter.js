// Every time you change the state the component re-renders.

import React, { useEffect, useState } from "react";
import BigButton from "./BigButton";

const Counter = () => {
  const [state, setState] = useState(0);
  
  const onRemove = () => setState(state - 1);
  const onAdd = () => setState(state + 1);

  useEffect(() => {
    // DO something
  }, []);
 
  useEffect(() => {
    // DO something
    // DO something
  }, [state]);

  return (
    <div>
      <BigButton onClick={onRemove} label="remove 1" />
      <h1>{state}</h1>
      <BigButton onClick={onAdd} label="add 1" />
    </div>
  );
}

// COMPONENTS AND ELEMENTS ARE NOT THE SAME THING.
// ELEMENTS ARE AN INSTANCE OF A COMPONENT. WHAT A COMPONENT RETURN.

export default Counter;
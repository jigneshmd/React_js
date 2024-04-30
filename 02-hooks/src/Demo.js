// Use State Hooks
import React, { useState } from "react";

const Demo = () => {
  const [std, setStd] = useState(["jatin", "chirag", "jay", "ritesh"]);

  const addvalue = (e) => {
    setStd((oldStd) => [...oldStd, e.target.value]);
  };

  //  const [count, setcnt] = useState(0)
  //  const increement = () =>{
  //   setcnt (count + 1)
  //  }
  //  const decreement = () =>{
  //   if (count > 0) {
  //     setcnt (count -1)
  //   }
  //  }
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={ () => {
        increement ()
      }}>increement</button>
      <button onClick={ () =>{
        decreement ()
      }}>decreement</button> */}

      <input
        type="text"
        onBlur={(event) => {
          addvalue(event);
        }}
      />

      {std.map((result) => {
        return <h1>{result}</h1>;
      })}
    </>
  );
};

export default Demo;

import React,{useRef, useState, useEffect} from 'react';


function ComponentA() {
  const refInput= useRef(true);
  const [count, setCount] = useState(0);

  useEffect(()=>{

    return () =>{
        refInput.current = false;
       
    }
  });

  const fetchValues= ()=>{
      console.log("fetched");
      setTimeout(()=>{
        if(refInput.current)  
          setCount(count+1);
      },2000);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={fetchValues}> Fetch Value !</button>
     
    </div>
  );
}

export default ComponentA;

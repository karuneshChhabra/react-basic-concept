import React,{useEffect} from 'react';

let counter = 0;

function ComponentA(props) {


  useEffect(()=>{

    counter++;

   })

  return (
    <div className="App">
   
     <p>Counter value in component {counter} and counter value in app.js {props.count}   </p>
     
    </div>
  );
}

export default ComponentA;

import React,{useEffect} from 'react';

let counter = 0;

function ComponentB(props) {


    useEffect(()=>{
      
        counter++;

    })
  
  return (
    <div className="App">
      <p>Counter value in component {counter} and counter value in app.js {props.count2}   </p>
     
    </div>
  );
}

export default ComponentB;

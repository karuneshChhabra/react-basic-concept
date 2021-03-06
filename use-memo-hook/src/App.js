import React,{useMemo , useState, useCallback} from 'react';
import './App.css';
import ComponentA from './Components/ComponentA.js'
import ComponentB from './Components/ComponentB.js'


const functionComponent = new Set();

function App() {
  //const memo= useMemo();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const memoForComponentA = useMemo(()=>{
    return(
      <ComponentA count={count}></ComponentA>
    )
  },[count]);

  const memoForComponentB = useMemo(()=>{
    return(
      <ComponentB count2={count2}></ComponentB>
    )
  },[count2]);

  const incrementCounter=  useCallback(() =>{
    console.log("incrementCounter")
    setCount(count+1)
  },[count])

  const incrementCounter2=  useCallback(() =>{
    console.log("incrementCounter2")
    setCount2(count2+1)
  },[count2]);

  functionComponent.add(incrementCounter);
  functionComponent.add(incrementCounter2);
  console.log(functionComponent);





  return (
    <div className="App">
      <p>Count value in App.js 
        {count}
      </p>
      <button onClick={incrementCounter}> Increment for button 1 </button>
      <button onClick={incrementCounter2}> Increment for button 2 </button>

     {memoForComponentA}
     {memoForComponentB}
      
   
     
    </div>
  );
}

export default App;

import React,{useMemo , useState} from 'react';
import './App.css';
import ComponentA from './Components/ComponentA.js'
import ComponentB from './Components/ComponentB.js'

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


  return (
    <div className="App">
      <p>Count value in App.js 
        {count}
      </p>
      <button onClick={()=>setCount(count+1)}> Increment for button 1 </button>
      <button onClick={()=>setCount2(count2+1)}> Increment for button 2 </button>

     {memoForComponentA}
     {memoForComponentB}
      
   
     
    </div>
  );
}

export default App;

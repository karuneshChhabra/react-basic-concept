import React,{useRef,useState} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

function App() {
  const refInput= useRef(null);
  const [show,setShow] = useState(true);
  return (
    <div className="App">
      <input ref={refInput}>
      </input>
      <input>
      </input>
      <input>
      </input>
      <button onClick={()=>refInput.current.focus()}> Click me !</button>

      <button onClick={()=>setShow(!show)}> Show Component !</button>
      {show && <ComponentA/>}
     
    </div>
  );
}

export default App;

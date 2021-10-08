import Hoc from './components/Hoc';
import './App.css';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';



function App() {
  return (
    <div className="App">
    
      <h1> Hello</h1>
      <HoverCounter/>
      <ClickCounter/>

    
    </div>
  );
}

const onChange= ()=>{
  console.log("called");
}

export default App;

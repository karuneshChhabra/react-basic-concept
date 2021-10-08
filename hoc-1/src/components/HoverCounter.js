import HocCounter from './HocCounter';


const  HoverCounter = (props) => {
  console.log(props);

  
  return (
    <div className="App">
        <h1 onMouseOver={props.incrementValue}>Hover it {props.counter}</h1>
    
      
    
    </div>
  );
}


export default HocCounter(HoverCounter);

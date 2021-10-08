import HocCounter from './HocCounter';


const  ClickCounter = (props) => {
    console.log(props)
  return (
    <div >


        <button onClick={props.incrementValue}>Click Me {props.counter}</button>
    
      
    
    </div>
  );
}


export default HocCounter(ClickCounter);

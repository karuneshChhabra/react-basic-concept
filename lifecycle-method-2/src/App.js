import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    // used for initialize the state
    console.log("constructor call");

    this.state={data:null,
    activate:null};
  }

  componentWillMount(){
    console.log("method call before render menthod")
  }

  componentDidMount() {
     this.setState({data:'updated'})
    //used for api call 
    console.log("called after render method");
  }

  
  activateState = ()=>{
    console.log("called");
     this.setState({activate:'active'});
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate is called");
    console.log(prevState);
    if(prevState.activate !==this.state.activate){
      console.log("state changed");
    
    }
  }

  render(){
    console.log("render call");
  return (
    <div className="App">
      
      <button onClick={this.activateState}>Activate state</button>
    </div>
  )};
}

export default App;

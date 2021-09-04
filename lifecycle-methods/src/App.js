import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    // used for initialize the state
    console.log("constructor call");
  }

  componentWillMount(){
    console.log("method call before render menthod")
  }

  componentDidMount() {

    //used for api call 
    console.log("called after render method");
  }

  render(){
    console.log("render call");
  return (
    <div className="App">
      Life Cycle methods 
    </div>
  )};
}

export default App;

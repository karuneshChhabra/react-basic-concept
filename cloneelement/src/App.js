import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <Parent>
       
          <Button />
          <br/><br/>
     
        <Button />
      </Parent>
    </div>
  );
}


  class Parent extends React.Component {
    render() {
      let btncolor = 'blue';
      console.log(this.props.children);
      return (
        <div>
          {React.Children.map(this.props.children,
            child => {
              return React.cloneElement(child,
                { btncolor }, null); //third parameter is null
                // Because we are not adding any children
            })}
        </div>
      )
    }
  }
    
  class Button extends React.Component {
    render() {
      return (
        <button style=
          {{ color: this.props.btncolor }} >
            Click me
        </button>    
         
      
      )
    }
  }
    


export default App;

import React from "react";
import "whatwg-fetch";
import "./App.css";
import TimeForm from "./TimeForm";
class App extends React.Component {
 constructor(props){
   super(props);

   this.fetchCurrentTime = this.fetchCurrentTime.bind(this);
   this.onFormSubmit = this.onFormSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.state={tz:'PST',msg:'now',currentTime:null}
 }

 getApiUrl(){
  const {tz, msg} = this.state;
  const host = 'https://andthetimeis.com';
  return host + '/' + tz + '/' + msg + '.json';
 }
 handleChange(newState){
   console.log(newState);
   
   this.setState(newState);
 }



 fetchCurrentTime(){
   fetch(this.getApiUrl).then(res=>{
    if(res){
     res.json()
    }
   }).then(res=>{ 
   
     if(res){
     this.setState({currentTime: res.dateString});
     }
   })
 }

 onFormSubmit(){
  this.fetchCurrentTime();
}



 render(){
   return(
    <div>
      <div>
        {!this.state.currentTime && <div>
          <button onClick={this.onFormSubmit}>
            Get the current Time
          </button>
          </div>}
          {this.state.currentTime && <div>The current time is: {this.state.currentTime}</div>} 
          <TimeForm 
           tz={this.state.tz}
           msg={this.state.msg}
           onFormChange={this.handleChange}
           onFormSubmit={this.onFormSubmit}
          >

          </TimeForm>
          <p>
          We'll be making a request from: <code>{this.getApiUrl()}</code>
        </p>
      </div>
    </div>
   );
 }
}
export default App;

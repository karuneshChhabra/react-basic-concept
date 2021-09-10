import Promises from "./Promises";
import "./App.css";

function App() {
  // function getCurrentTime(onSuccess, onFail) {
  //   // Get the current 'global' time from an API
  //   return setTimeout(function () {
  //     // randomly decide if the date is retrieved or not
  //     var randomValue = Math.random();
  //     var didSucceed = randomValue >= 0.5;
  //     if (didSucceed) {
  //       var currentTime = new Date();
  //       onSuccess(currentTime);
  //     } else {
  //       onFail("Unknown error");
  //     }
  //   }, 2000);
  // }

  // getCurrentTime(
  //   function (currentTime) {
  //     console.log("The current time is: " + currentTime);
  //   },
  //   function (error) {
  //     console.log("There was an error fetching the time");
  //   }
  // );

  return (
  <div className="App">
    <Promises/>
  </div>);
}

export default App;

import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import baby from './images/baby.jpg';
import './images/coffee.jpg';


function App() {

  useEffect(() =>{

  const fetchImage = async (url) =>{
    //const coffeeImage = await axios.get(url);
    const coffeeImage = await fetch(url);

    console.log(coffeeImage);
    const obj = await coffeeImage.blob();
    console.log(obj);
    return obj;

  }
 // fetchImage('https://mdn.github.io/learning-area/javascript/asynchronous/async-await/coffee.jpg');
 // fetchImage('https://mdn.github.io/learning-area/javascript/asynchronous/async-await/tea.jpg')

  fetchImage('./images/coffee.jpg').then(object1=>{


 

 

 var image1 = document.createElement('img');
 image1.src= URL.createObjectURL(object1);
 document.getElementById('app-content').appendChild(image1);
});


},[])

  return (
    <div className="App">
      <div id='app-content'>
<img src={baby} />
      </div>
    </div>
  );
}

export default App;

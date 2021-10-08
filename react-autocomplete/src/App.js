import './App.css';
import './Custom.css';

import axios from 'axios';
import React,{useState, useEffect} from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [suggestList, setSuggestList] = useState([]);

  useEffect(()=>{
   const loadData = async () =>{

    const response= await axios.get('https://reqres.in/api/users');

    console.log(response.data);
    setUsers(response.data.data);

   }
   loadData();

  },[])

  const onChangeHandler = (text) =>{
   
    let matches = [];

    if(text.length > 0){
      
      matches = users.filter(user =>{
        let regex=new RegExp(`${text}`, 'gi');
         return user.first_name.match(regex);
      })

    }
    console.log(matches);

    setSuggestList(matches);

    setText(text);
  }

  const suggestClickHandler =(value) =>{ 
    console.log(value);
    setText(value);
    
  }

  
  return (
    <div className="container">
      <input className='col-md-12 input' onChange={(e) => onChangeHandler(e.target.value)} value={text} 
       onBlur={()=>{
         setTimeout(()=>{
          setSuggestList([]);
        },300)
       }}
      />
      {suggestList && suggestList.map(suggestValue =>(
        
        <div className="suggestion col-md-12 justify-content-md-center" key={suggestValue.id}
        onClick={() =>{suggestClickHandler(suggestValue.first_name)}} 
        >{suggestValue.first_name}</div>
      ))}
     
    </div>
  );
}

export default App;

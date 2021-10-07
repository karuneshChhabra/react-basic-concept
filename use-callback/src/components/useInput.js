import {useState} from 'react';

export const useInput =(initialValue='')=>{

    const [value,setValue] = useState(initialValue);

    const bindForm ={
       type : 'text',
       value : value,
    
      onChange : (e)=>{
          setValue(e.target.value)
      }
     
    }

    const clearText= ()=>{
        setValue(initialValue);
    }

    return [value,bindForm,clearText];

}
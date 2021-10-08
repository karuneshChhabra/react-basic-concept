import {useEffect,useState} from 'react';


function Hoc(WrapeerComponent,...args) {
    console.log(WrapeerComponent);
    console.log(args);
    const colors= ['red','black','blue','yellow'];

    const color = colors[Math.floor(Math.random()*5)];
    console.log(color);

  return ((props)=>{
        return (
            <div style={{'color':color}}>
              <WrapeerComponent {...props}></WrapeerComponent>
            </div>
        )}
      )
  
}

export default Hoc;

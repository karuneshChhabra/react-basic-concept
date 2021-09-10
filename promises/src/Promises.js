import React from 'react'

function Promises() {

    function getCurrentTime() {
        // Get the current 'global' time from an API using Promise
        return new Promise((resolve, reject) => {
            setTimeout(function() {
            var randomNum = Math.random(); 
            console.log(randomNum);    
            var didSucceed = randomNum >= 0.5;
            didSucceed ? resolve(new Date()) : reject(false);
            });
            })
       }

const getCurrentTimeFunc = (e) =>{
    e.preventDefault();
       getCurrentTime()
        .then(currentTime => {
            console.log('The current first time is:'+currentTime);
            if(currentTime){
              getCurrentTime().then(currentTime2 => {
                console.log('The current time is: ' + currentTime2);
                return true;
              }).catch(err => console.log('There was an error in 2nd:' + err));;
            }
            })
        .catch(err => console.log('There was an error:' + err));
}


    return (
        <div>
            <button onClick={e=>getCurrentTimeFunc(e)}>
                Try me
            </button>
         
        </div>
    )
}

export default Promises;

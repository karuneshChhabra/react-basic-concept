import React from 'react'
import bioharzard from '../biohazard.png';


function Lost() {
    return (
        <div>
            <h1 style={{color:"white"}}>
                You are Lost, Go back !!
            </h1>
            <div style={{paddingTop:"50px"}}>
                <img src={bioharzard} alt="user lost"/>
            </div>
            
        </div>
    )
}

export default Lost;

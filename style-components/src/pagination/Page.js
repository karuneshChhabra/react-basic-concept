import React,{useState} from 'react';
import MaterialUIbutton from '../styleComponents/MaterialUIbutton';
import {Header} from '../styleComponents/MyHeader';
import {PageWrapper} from '../styleComponents/PageWrapper';


function Page() {

    const pages=[
        {
            title:'Page 1',
            buttons:[
                {text:'Next'}
            ]
        },
        {
            title:'Page 2',
            buttons:[
                {text:'Prev'},
                {text:'Next'}
            ]
        },
        {
            title:'Page 3',
            buttons:[
                {text:'Prev'},
                {text:'Next'}
            ]
        },
        {
            title:'Page 4',
            buttons:[
                {text:'Prev'}
            ]
        }
    ]

    const [id,setId] = useState(0);
    let page=pages[id];
    console.log(page);

    const goTo=(index)=>{
        if(index===0 && id===0){
            setId(id+1);
        }else if(index===0){
            setId(id-1); 
        }else{
            setId(id+1);
        }
    }

    return (
        <div className="App">
            <div>
               
            </div>
            <Header>{page.title}</Header>
            <PageWrapper pageNo={id} pageCount={pages.length}>
           {page.buttons.map((button,index) =>(
             
                <MaterialUIbutton key={index} onClick={()=>{goTo(index)}}>{button.text}</MaterialUIbutton>
             
          ))}
           </PageWrapper>
         
        </div>
     
    );
  }
  
  export default Page;
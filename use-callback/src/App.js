
import './App.css';
import {useInput} from './components/useInput';



function App() {

  const [name,bindName,clearName] = useInput('');
  const [email,bindEmail,clearEmail] = useInput('');

const submitForm =(e) =>{
  e.preventDefault();
  clearName();
  clearEmail();
}

  return (
    <div className="App">
      <input {...bindName} >
      </input>
      <br/>
      <input {...bindEmail}>
      </input>
      <br/>
      <button onClick={submitForm}>Submit</button>
      <br/>
      {name}
      <br/>
      {email}
    </div>
  );
}

export default App;

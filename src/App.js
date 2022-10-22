import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [LoginDetail,setLoginDetail] = useState({Name:'Mahnoor',Password:'12345'});
  console.log(alert("YOU ARE SUCCESSFULLY LOGIN"));
  
  

  return (
    <div> 
    <form onSubmit={LoginDetail}>
    <h4>LOGIN FORM</h4>
    <label for="lname">First name:</label><br></br>
    <input type="text" placeholder="EnterName" value="Name"/><br/>
    <br/>
    <label for="lname">Last name:</label><br>
    </br>
    <input type="text"  placeholder='Password' value="Password"/><br/>
    <br/>
    <button onclick = {onsubmit}>
    LOGIN
    </button>
    </form>
    </div>
  );
}


export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const saveData = () => {
    console.log(firstname)
    console.log(lastname)
    console.log(email)
    
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email
    }

    const userSerialized = JSON.stringify(user)
    localStorage.setItem("user", userSerialized)
  }

  return (
    <div className="App">
      
      <div className="form-container">

        <form id="formId" onsubmit="naKlikniecieBtn()">
          
          <p>
            <label for="firstname">Imię</label>
            <input onChange={(e) => setFirstname(e.target.value)} type="text" id="firstname" name="firstname" placeholder="Podaj swoje imię" />
          </p>

          <p>
            <label for="lastname">Nazwisko</label>
            <input onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" name="lastname" placeholder="Podaj swoje nazwisko" />
          </p>

          <p>
            <label for="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Podaj swoje email" />
          </p>

          <button onClick={saveData}>Zapisz</button>

          </form>

      </div>

    </div>
  );
}

export default App;

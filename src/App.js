import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Form = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const saveUser = () => {
    // console.log(firstname)
    // console.log(lastname)
    // console.log(email)
    
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email
    }

    const userSerialized = JSON.stringify(user)
    localStorage.setItem("user", userSerialized)
  }

  const loadUser = () => {

    let user = localStorage.getItem("user")

    if (user) {
      user = JSON.parse(user)

      console.log(user)
      setFirstname(user.firstname)
      setLastname(user.lastname)
      setEmail(user.email)

    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (      
      <div className="form-container">

        <form id="formId" onsubmit="naKlikniecieBtn()">
          
          <p>
            <label for="firstname">Imię</label>
            <input onChange={(e) => setFirstname(e.target.value)} value={firstname} type="text" id="firstname" name="firstname" placeholder="Podaj swoje imię" />
          </p>

          <p>
            <label for="lastname">Nazwisko</label>
            <input onChange={(e) => setLastname(e.target.value)} value={lastname} type="text" id="lastname" name="lastname" placeholder="Podaj swoje nazwisko" />
          </p>

          <p>
            <label for="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email" placeholder="Podaj swoje email" />
          </p>

          <button onClick={saveUser}>Zapisz</button>

          </form>

      </div>
  );
}

function App() {

  

  return (
    <div className="App">
      
      <Form />

    </div>
  );
}

export default App;

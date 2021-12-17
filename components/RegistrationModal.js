import { useState } from "react" 
import axios from 'axios'

export default function RegistrationModal(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconfirmation, setPasswordconfirmation] = useState('')
  
  const submit = async () => {
    const response = await axios.post('/api/auth/register',{
      email, password, passwordconfirmation
    })
    console.log(response)
  }
    return (
      <>
        <h2>Sign up</h2>
        <div>
            <form onSubmit={submit}>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="Email address"
                  onChange={(event)=> setEmail(event.target.value)}
                  />
                <input 
                  id="password" 
                  type="password" 
                  placeholder="Password" 
                  onChange={(event) => setPassword(event.target.value)}
                  />
                <input
                  id="passwordconfirmation"
                  type="password"
                  placeholder="Enter password again"
                  onChange={(event)=> setPasswordconfirmation(event.target.value)}

                />
                <button>Sign up</button>
            </form>
        </div>
        <p>
        Already have an account?{' '}
        <a href="#" onClick={() => props.showLogin()}>
            Log in
        </a>
        </p>
      </>
    )
  }
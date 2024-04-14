import { useState } from 'react'
import Button from './Button'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSignUp = async () => {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    const data = await response.json()
    if (response.ok) {
      console.log(data.message)
    }
  }

  return (
    <div className='w-full flex flex-col gap-10 items-center'>
      <form className='flex flex-col w-full text-gray-600 gap-3 items-start'>
        <div className='flex flex-col gap-1 w-full'>
          <label>Usuario</label>
          <input
            type='text'
            value={username}
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label>Correo electrónico</label>
          <input
            type='email'
            value={email}
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label>Contraseña</label>
          <input
            type='password'
            value={password}
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className='flex flex-col w-full justify-center items-center'>
        <Button onClick={handleSignUp} text='Registrarse' width='w-full' />
      </div>
    </div>
  )
}

export default LoginForm

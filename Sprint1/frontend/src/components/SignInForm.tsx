import { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data = await response.json()
    if (response.ok) {
      console.log(data.message)
      navigate('/home')
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
          <label>Contraseña</label>
          <input
            type='password'
            value={password}
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='flex w-full justify-end text-sm text-blue-400'>
          Olvidaste tu contraseña?
        </div>
      </form>
      <div className='flex flex-col w-full justify-center items-center'>
        <Button onClick={handleLogin} text='Iniciar Sesión' width='w-full' />
      </div>
    </div>
  )
}

export default SignInForm

import { useState } from 'react'
import Button from './Button'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {}

  return (
    <div className='h-full w-full flex flex-col justify-between items-center'>
      <h2 className='text-4xl font-bold'>
        Juego de <span className='text-blue-500'>Damas</span>
      </h2>
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
      <div className='flex flex-col w-full gap-5 justify-center items-center'>
        <Button onClick={handleLogin} text='Iniciar Sesion' width='w-full' />
        <span className='text-sm text-gray-500'>
          Eres nuevo? <a className='ml-1 text-blue-400'>Registrate</a>
        </span>
      </div>
    </div>
  )
}

export default LoginForm

import SignUp from '../model/useSignUp'
import Button from './Button'

const LoginForm = () => {
  const signUp = new SignUp()
  return (
    <div className='w-full flex flex-col gap-10 items-center'>
      <form className='flex flex-col w-full text-gray-600 gap-3 items-start'>
        <div className='flex flex-col gap-1 w-full'>
          <label>Usuario</label>
          <input
            type='text'
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => signUp.setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label>Correo electrónico</label>
          <input
            type='email'
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => signUp.setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label>Contraseña</label>
          <input
            type='password'
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => signUp.setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className='flex flex-col w-full justify-center items-center'>
        <Button
          onClick={() => signUp.handleRegister()}
          text='Registrarse'
          width='w-full'
        />
      </div>
    </div>
  )
}

export default LoginForm

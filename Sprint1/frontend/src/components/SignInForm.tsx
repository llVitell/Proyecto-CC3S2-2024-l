import Button from './Button'
import SignIn from '../model/useSignIn'

const SignInForm = () => {
  const signIn = new SignIn()

  return (
    <div className='w-full flex flex-col gap-10 items-center'>
      <form className='flex flex-col w-full text-gray-600 gap-3 items-start'>
        <div className='flex flex-col gap-1 w-full'>
          <label>Usuario</label>
          <input
            type='text'
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => signIn.setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label>Contraseña</label>
          <input
            type='password'
            className='border-2 border-slate-300 h-10 rounded-lg px-4'
            onChange={e => signIn.setPassword(e.target.value)}
          />
        </div>
        <div className='flex w-full justify-end text-sm text-blue-400'>
          Olvidaste tu contraseña?
        </div>
      </form>
      <div className='flex flex-col w-full justify-center items-center'>
        <Button
          onClick={() => signIn.handleLogin()}
          text='Iniciar Sesión'
          width='w-full'
        />
      </div>
    </div>
  )
}

export default SignInForm

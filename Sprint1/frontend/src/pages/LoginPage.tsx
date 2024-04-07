import { useState } from 'react'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const LoginPage = () => {
  const [view, setView] = useState(true)
  const handleView = () => {
    setView(!view)
  }
  return (
    <main className='flex h-full justify-center items-center'>
      <section className='h-[80%] min-w-[55%] flex rounded-xl shadow-xl overflow-hidden'>
        <div className='flex w-1/2'>
          <img
            src='https://images.pexels.com/photos/3997813/pexels-photo-3997813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='object-cover w-full'
          />
        </div>
        <div className='flex flex-col justify-evenly bg-stone-50 w-1/2 py-24 px-20'>
          <h2 className='flex gap-3 text-4xl justify-center items-center font-bold'>
            Juego de <span className='text-blue-500'> Damas</span>
          </h2>
          <div className='flex flex-col w-full justify-center items-center gap-5'>
            {view ? <SignInForm /> : <SignUpForm />}
            <div className='flex w-full justify-center text-sm text-gray-500'>
              {view ? 'Eres nuevo?' : 'Ya tienes cuenta?'}
              <button onClick={handleView} className='ml-1 text-blue-400'>
                {view ? 'Registrate' : 'Inicia Sesión'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage

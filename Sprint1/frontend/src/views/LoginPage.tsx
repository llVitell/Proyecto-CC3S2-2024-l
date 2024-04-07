import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <main className='flex h-full justify-center items-center'>
      <section className='h-[80%] w-[55%] flex rounded-xl shadow-xl overflow-hidden'>
        <div className='flex w-1/2'>
          <img
            src='https://images.pexels.com/photos/3997813/pexels-photo-3997813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='object-cover w-full'
          />
        </div>
        <div className='flex bg-stone-50 w-1/2 py-24 px-20'>
          <LoginForm />
        </div>
      </section>
    </main>
  )
}

export default LoginPage

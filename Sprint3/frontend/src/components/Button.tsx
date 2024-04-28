interface LoginFormProps {
  onClick: () => void
  text: string
  width?: string
}

const Button: React.FC<LoginFormProps> = ({ onClick, text, width }) => {
  const buttonClassName = `flex justify-center bg-blue-400 hover:bg-blue-600 rounded-lg px-4 py-2 text-white font-semibold ${width}`
  return (
    <button onClick={onClick} className={buttonClassName}>
      {text}
    </button>
  )
}

export default Button

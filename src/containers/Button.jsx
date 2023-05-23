import '../styles/containers/button.scss'

const Button = ({ title, handleSend = () => {} }) => {
  return (
    <button className="button" onClick={handleSend}>
      {title}
    </button>
  )
}

export default Button

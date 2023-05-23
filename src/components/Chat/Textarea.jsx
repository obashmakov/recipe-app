import '../../styles/chat.scss'

const Textarea = ({ textValue, setTextValue }) => {
  const handleChange = (e) => {
    const { value } = e.target
    setTextValue(value)
  }

  return (
    <textarea
      className='textarea'
      name=""
      id=""
      cols="30"
      rows="8"
      onChange={handleChange}
      value={textValue}
    />
  )
}

export default Textarea
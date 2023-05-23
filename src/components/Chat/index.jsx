import '../../styles/chat.scss'
import Textarea from './Textarea'
import Button from '../../containers/Button'
import { useContext, useState } from 'react'
import { ComponentContext } from '../../providers/ComponentsProvider'

const Chat = () => {
  const [textValue, setTextValue] = useState('')
  const { setComponent, setLoading } = useContext(ComponentContext)
  const handleSend = () => {
    setComponent({
      title: 'recipes',
      recipeData: null,
    })
    setLoading(true)
    setTextValue('')
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="chat">
      <h1 className="chat__title">
        Hello! Here you can create your own recipe based on the products available in the flyer. Enter how much you want to spend, etc.
      </h1>
      <div className="actions">
        <Textarea textValue={textValue} setTextValue={setTextValue} />
        <Button title="SEND" handleSend={handleSend} />
      </div>
    </div>
  )
}

export default Chat

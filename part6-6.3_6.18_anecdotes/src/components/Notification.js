import { useSelector } from 'react-redux'

const Notification = () => {
  
const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    color: 'green',
  }
  
  const value = notification.map(n => n.notice).slice(-1);
  
  return (
    <div style={style}>
     {value} 
    </div>
  )
}

export default Notification

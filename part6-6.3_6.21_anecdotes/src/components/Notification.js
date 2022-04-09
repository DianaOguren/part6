import { connect } from 'react-redux'

const Notification = (props) => {
  
const notification = props.notification

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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
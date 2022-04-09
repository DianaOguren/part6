import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux' 

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(anecdote)
    props.showNotification(`You created '${anecdote}'`, 5)
  }

  return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <input name="anecdote"/>
          <button type="submit">create</button>
        </form>
    </div>
  )
}

export default connect(
  null, 
  { createAnecdote, showNotification }
)(AnecdoteForm)
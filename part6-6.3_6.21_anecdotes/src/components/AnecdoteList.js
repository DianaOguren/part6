import { connect } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer';

 const AnecdoteList = (props) => {

    const anecdotes = props.anecdotes

    const filterObject = props.filter.map(n=>n.filter)

    const filter = filterObject[Object.keys(filterObject)[Object.keys(filterObject).length - 1]]
    
    const filteredAnecdotes = anecdotes.filter(a=> a.content.toLowerCase().includes(filter.toLowerCase()))
    
    const sortedAnecdotes = filteredAnecdotes.sort((a,b)=>b.votes - a.votes)

    const vote = async(anecdote) => {
      props.updateVote(anecdote.id, {...anecdote, votes: anecdote.votes + 1 })
      props.showNotification(`You voted for '${anecdote.content}'`, 5)
    }

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>  
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  updateVote,
  showNotification
}

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList)
export default ConnectedAnecdotes
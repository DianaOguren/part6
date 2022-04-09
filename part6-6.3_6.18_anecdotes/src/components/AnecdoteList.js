import { useSelector, useDispatch } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer';

 const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterObject = useSelector(state => state.filter.map(n=>n.filter))

    const dispatch = useDispatch()
   
    const vote = async(anecdote) => {
      dispatch(updateVote(anecdote.id, {...anecdote, votes: anecdote.votes + 1 }))
      dispatch(showNotification(`You voted for '${anecdote.content}'`, 5))
    }

    const filter = filterObject[Object.keys(filterObject)[Object.keys(filterObject).length - 1]]
    
    const filteredAnecdotes = anecdotes.filter(a=> a.content.toLowerCase().includes(filter.toLowerCase()))
    
    const sortedAnecdotes = filteredAnecdotes.sort((a,b)=>b.votes - a.votes)
   
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

export default AnecdoteList
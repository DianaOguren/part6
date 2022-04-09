import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    increaseValue(state, action) {
      const id = action.payload
      const anectodeToChange = state.find(n => n.id === id)
      const changedAnectode = { 
        ...anectodeToChange, 
        votes: anectodeToChange.votes + 1 
      }
      return state.map(anectode =>
        anectode.id !== id ? anectode : changedAnectode 
      )   
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { increaseValue, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const updateVote = (id, updatedAnecdote) => {
  return async dispatch => {
     await anecdoteService.updateVotes(id, updatedAnecdote)
    dispatch(increaseValue(id))
  }
}

export default anecdoteSlice.reducer
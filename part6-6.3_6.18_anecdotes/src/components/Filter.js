import { setFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
    
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(setFilter(event.target.value))
    }
 
    return (
      <div>
        <p>filter <input onChange={handleChange} /></p>
      </div>
    )
  }
  
  export default Filter

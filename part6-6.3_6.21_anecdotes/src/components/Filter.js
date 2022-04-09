import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

    const handleChange = (event) => {
        props.setFilter(event.target.value)
    }
 
    return (
      <div>
        <p>filter <input onChange={handleChange} /></p>
      </div>
    )
  }
  
  export default connect(
    null, 
    { setFilter }
  )(Filter)
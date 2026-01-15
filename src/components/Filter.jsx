import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    const {target} = event
    const match = target.value
    dispatch(filterChange(match))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input name="anecdote" onChange={handleChange} />
    </div>
  )
}

export default Filter
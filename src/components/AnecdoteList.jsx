import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  const sortedAnecdotes = filteredAnecdotes.toSorted(
    (a, b) => b.votes - a.votes
  )
  const vote = id => {
    dispatch(addVote(id))
  }

  return (
    sortedAnecdotes.map(anecdote => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    ))
  )
}

export default AnecdoteList
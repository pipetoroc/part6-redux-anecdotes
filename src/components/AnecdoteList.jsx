import { useSelector, useDispatch } from "react-redux"
import { sumVote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  const sortedAnecdotes = filteredAnecdotes.toSorted(
    (a, b) => b.votes - a.votes
  )
  const vote = async (anecdote) => {
    const { content } = anecdote
    dispatch(sumVote(anecdote))
    dispatch(setNotification(`You voted an anecdote "${content}"`, 5))
  }

  return (
    sortedAnecdotes.map(anecdote => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => {
            vote(anecdote) 
          }}>vote</button>
        </div>
      </div>
    ))
  )
}

export default AnecdoteList
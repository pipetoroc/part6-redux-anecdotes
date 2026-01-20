import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { showNotification, clearNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  const sortedAnecdotes = filteredAnecdotes.toSorted(
    (a, b) => b.votes - a.votes
  )
  const vote = (content, id )=> {
    dispatch(addVote(id))
    dispatch(showNotification(`You voted an anecdote "${content}"`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    sortedAnecdotes.map(anecdote => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => {
            const { content, id } = anecdote

            vote(content, id) 
          }}>vote</button>
        </div>
      </div>
    ))
  )
}

export default AnecdoteList
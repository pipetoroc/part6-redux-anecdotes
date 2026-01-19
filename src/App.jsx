import { AnecdotesForm } from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {

  return (
    <div>
      <Notification message={'Esta es una notificación'}/>
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdotesForm />
    </div>
  )
}

export default App

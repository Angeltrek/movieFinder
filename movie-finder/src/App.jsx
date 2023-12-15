import './App.css'
import { useMovies } from './hooks/useMovies';
import {Movies} from './components/movies'

function App() {

  const {movies} = useMovies();

  return (
    <div className='page'>

      <header>
        <h1>Movie Finder</h1>
        <form className='form'>
          <input placeholder='Avengers, Toy Story, Star Wars...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App

import './App.css'
import responseMovies from './mocks/with-results.json'
import {Movies} from './components/movies'
import withoutResults from './mocks/no-results.json'

function App() {

  const movies = responseMovies.Search;

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

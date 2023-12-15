import './App.css'
import { useMovies } from './hooks/useMovies';
import {Movies} from './components/movies'
// useRef is a hook used to create a mutable object 
// that persists across renders of a functional component
import { useRef } from 'react'

function App() {

  const {movies} = useMovies();
  const inputRef = useRef();

  const handleSumbit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input ref={inputRef} placeholder='Avengers, Toy Story, Star Wars...' />
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

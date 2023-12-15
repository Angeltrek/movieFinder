import './App.css'
import { useMovies } from './hooks/useMovies';
import {Movies} from './components/movies'
import {useEffect, useState, useRef, useCallback} from 'react'
import debounce from 'just-debounce-it'
// useRef is a hook used to create a mutable object 
// that persists across renders of a functional component

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if(search === '') {
      setError('Can not search an empty input')
      return
    }

    if(search.match(/^\d+$/)) {
      setError("Can not search only numbers")
      return
    }

    if(search.length < 4) {
      setError("The search needs more than 3 characters")
      return
    }

    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const [sort, setSort]  = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, getMovies, loading} = useMovies({search, sort})

  const debounceGetMovies = useCallback(debounce(search => {
    getMovies({search})
  }, 300), [getMovies])

  const handleSumbit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input style={{border: '1px solid transparent', 
          borderColor: error? 'red':'transparent'}} 
          onChange={handleChange} name='query' placeholder='Avengers, Toy Story, Star Wars...' />
          <button type='submit'>Search</button>
          <input type="checkbox" onChange={handleSort} checked={sort} />
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando... </p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App

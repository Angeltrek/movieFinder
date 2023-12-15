import './App.css'

function App() {
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
        Aqui irán los resultados
      </main>
    </div>
  )
}

export default App

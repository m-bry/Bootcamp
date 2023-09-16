import { useState } from 'react'
import './App.css'
import TMDB_key from './config/key.js'

function App() {
  const [movies, setMovies] = useState([
    {
      id: 0,
      poster_path: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Avengers: Infinity War",
      overview: "The Avengers fight Thanos; glove."
    },
    {
      id: 1,
      poster_path: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      title: "Avengers",
      overveiw: "The Avengers fight Loki; blue cube"
    }
  ]
  )

  const performSearch = (searchTerm) => {
    const baseUrl = `https://apu.themoviedb.org`
    const route = `/search/movie?api_key=${TMDB_key}&query=${searchTerm}`
    const endpoint = baseUrl + route
    fetch(endpoint)
    .then(response => {
      return response.json()
    })
    .then()
    .catch()
  }

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <div className="searchBar">
        <input id="inputField" 
        type="text"
        placeholder="Enter a movie title"
        onChange={searchChangeHandler}
         />
        <button>Search</button>
      </div>
      {
          movies.map(movie => (
            <div key ={movie.id} style={{ marginBottom: "5rem"}}>
              <img src={movie.poster_path} alt ="poster" />
              <h2>{movie.title}</h2>
            </div>
          ))
        }
    </div>
  )
}

export default App
import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'

const API_BASE_URL='https://api.themoviedb.org/3'
const API_KEY= import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
const url = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

export default function App() {
  const [search, setSearch] = useState('')
  // const [error, setError] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await fetch(url, API_OPTIONS)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));
      } catch(error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <main>
      <div className='pattern'/>

      <div className="wrapper">
        <header>
          <img src='./hero.png' alt='Hero Banner'/>
          <h1>
            Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle
          </h1>
          <Search search={search} setSearch={setSearch}/>
        </header>

        <section className='all-movies'>
          <h2>All Movies</h2>
        </section>



      </div>
    </main>
  )
}
import { Route, Routes } from 'react-router'
import './App.css'
import List from './List'
import MovieDetails from './MovieDetails'

function App() {

  return (
    // <List/>
    <>
    <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/movie/:animeId" element={<MovieDetails/>} />
    </Routes>
    </>
  )
}

export default App
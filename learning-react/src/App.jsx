import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import Home from './pages/home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'

export default function App() {

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </main>
    </div>
  );
}
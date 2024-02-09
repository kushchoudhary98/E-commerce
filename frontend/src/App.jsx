import './App.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import Jewelery from './pages/Jewelery'
import Men from './pages/Men'
import Women from './pages/Women'
import Electronics from './pages/Electronics'
import LoginPage from './pages/LoginPage'
import Hamburger from './components/Hamburger'
import UnderMaintenance from './pages/UnderMaintenance'

function App() {

  return (
    <BrowserRouter>
      <div id="main">
        <Navbar />
        <Hamburger />
        <Routes>
          <Route path='/' Component={Intro}></Route>
          <Route path='/login' Component={LoginPage}></Route>
          <Route path="/jewelery" Component={Jewelery}></Route>
          <Route path="/electronics" Component={Electronics}></Route>
          <Route path="/men's clothing" Component={Men}></Route>
          <Route path="/women's clothing" Component={Women}></Route>
          <Route path='/maintenance' Component={UnderMaintenance}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

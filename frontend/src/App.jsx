import './App.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import Jewelery from './pages/Jewelery'
import Men from './pages/Men'
import Women from './pages/Women'
import Electronics from './pages/Electronics'

function App() {

  return (
    <BrowserRouter>
      <div id="main">
        <Navbar />
        <Routes>
          <Route path='/' Component={Intro}></Route>
          <Route path="/jewelery" Component={Jewelery}></Route>
          <Route path="/electronics" Component={Electronics}></Route>
          <Route path="men's clothing" Component={Men}></Route>
          <Route path="women's clothing" Component={Women}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
       <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<  Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>

       </Routes>
    </Router>

  )
}

export default App
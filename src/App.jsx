import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
       <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/home' element={<Home/>}/>

       </Routes>
    </Router>

  )
}

export default App
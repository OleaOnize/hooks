import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Comments from './components/Comments/Comments'
import Home from './views/Home/Home'


function App() {


  return (
    <div className="App">
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="comments/:id" element={<Comments />} />
        </Routes>
    </div>
  )
}

export default App

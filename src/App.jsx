import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './views/Detail'
import Home from './views/Home/Home'
import ThemeContext from './contexts/ThemeContext'

function App() {

  const { theme } = useContext(ThemeContext)

  console.log(theme)
  return (
    <div className="App" data-bs-theme={theme}>
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts/:id" element={<Detail />} />
        </Routes>
    </div>
  )
}

export default App

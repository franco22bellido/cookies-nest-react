import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SetCookies from './SetCookies'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:route' element={<SetCookies/>}/>
        <Route path='/:route' element={<SetCookies/>}/>
        <Route path='/:route' element={<SetCookies/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

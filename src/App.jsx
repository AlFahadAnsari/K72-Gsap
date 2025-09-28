import Agency from './Pages/Agency'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
      </Routes>
    </div>
  )
}

export default App
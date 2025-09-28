import Agency from './Pages/Agency'
import Home from './Pages/Home'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      {/* <div className='flex gap-10'><Link to={'/'} >home</Link>
      <Link to={'/agency'} >Agency</Link></div> */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agency' element={<Agency />} />
        </Routes>
      </div>
    </>
  )
}

export default App
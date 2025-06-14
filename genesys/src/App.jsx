import './App.scss'
// Reaproveitamento de estrutura 
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='divApp'>Genesys
      <Navbar/>
      <main><Outlet/></main>
    </div>
    
  )
}

export default App
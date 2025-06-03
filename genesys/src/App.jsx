import './App.scss'
// Reaproveitamento de estrutura 
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>Genesys
      <Navbar/>
      <Outlet/>
    </div>
    
  )
}

export default App
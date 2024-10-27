import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'

function App() {
 
  return (
    <div className='bg-[#F4F3F0]'>
      <h1 className='text-center text-5xl font-bold'>Coffee Store</h1>
      <Navbar/>
      <Outlet />
    
      <div>

      </div>
    </div>
)
}

export default App

import { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './pages/CoffeeCard';

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
 
  return (
    <div>
      <h1 className='text-center text-5xl font-bold'>Coffee Store</h1>
      <div className="flex justify-center gap-7 py-5">
        <NavLink
          to="/addCoffee"
          className='link-primary link-hover'
        >Add Coffee</NavLink>
        <NavLink
          to="/signUp"
          className='link-primary link-hover'
        >SignUp</NavLink>
        <NavLink
          to="/user"
          className='link-primary link-hover'
        >User Info</NavLink>
      </div>

      <div className='p-20 grid md:grid-cols-2 grid-cols-1 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />)
    }
      </div>
    </div>
)
}

export default App

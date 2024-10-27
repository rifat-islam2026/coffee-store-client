import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex justify-center py-5 gap-5">
      <NavLink
        to="/"
        className='link-primary link-hover'
      >All Coffee</NavLink>
      <NavLink
        to="/addCoffee"
        className='link-primary link-hover'
      >Add Coffee</NavLink>
      <NavLink
        to="/updateCoffee"
        className='link-primary link-hover'
      >Update Coffee</NavLink>
    </div>
  )
}

export default Navbar

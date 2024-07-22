import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar w-full p-5 bg-[#000]  flex  md:flex-row flex-col justify-center items-center   gap-4 md:justify-between  ">
      <div className="Logo font-bold text-white text-[1.5em]"> CampusConnect </div>
      <div className="flex gap-x-9 text-white" >

        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>

      </div>
    </nav>
  )
}

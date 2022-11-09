import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className='container f_flex'>
          <div className='navlink container c_flex'>
            <ul className="link f_flex capitalize">
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/products'>products</Link>
              </li>
              <li>
                <Link to='#'>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
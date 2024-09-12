import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SignDialog from '../SignDialog/SignDialog'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div> <Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link> </div>
      <nav>
        <ul className="header-nav d-f">
          <li className="header-nav-item"><Link to="/catalog">Shop</Link></li>
          <li className="header-nav-item"><Link to="/men">Men</Link></li>
          <li className="header-nav-item"><Link to="/catalog">Women</Link></li>
          <li className="header-nav-item"><Link to="/combos">Combos</Link></li>
          <li className="header-nav-item"><Link to="/jogger">Jogger</Link></li>
        </ul>
      </nav>
      <form action="" className="header-search-fm d-f align-center">
        <button className='btn-clear d-b'><img src="/images/search.png" alt="search" /></button>
        <input type="text" name='searchQuery' placeholder='Search' />
      </form>
      <div className="header-actions d-f">
        <div className="header-actions-item"><img src="/images/heart.png" alt="heart" /></div>
        <SignDialog/>
        <Link to="/cart" className="header-actions-item d-b"><img src="/images/cart.png" alt="cart" /></Link>
      </div>
    </header>
  )
}

export default Header
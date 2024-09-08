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
          <li className="header-nav-item"><a href="">Shop</a></li>
          <li className="header-nav-item"><a href="">Men</a></li>
          <li className="header-nav-item"><Link to="/catalog">Women</Link></li>
          <li className="header-nav-item"><a href="">Combos</a></li>
          <li className="header-nav-item"><a href="">Jogger</a></li>
        </ul>
      </nav>
      <form action="" className="header-search-fm d-f align-center">
        <button className='btn-clear d-b'><img src="/images/search.png" alt="search" /></button>
        <input type="text" name='searchQuery' placeholder='Search' />
      </form>
      <div className="header-actions d-f">
        <div className="header-actions-item"><img src="/images/heart.png" alt="heart" /></div>
        <SignDialog/>
        <a href="" className="header-actions-item d-b"><img src="/images/cart.png" alt="cart" /></a>
      </div>
    </header>
  )
}

export default Header
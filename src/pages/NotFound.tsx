import React from 'react'
import './css/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="nf-top-line"></div>
        <main className="nf-main">
            <div><img src="/images/not-found.png" alt="not-found" /></div>
            <div className="nf-main-num"><img src="/images/404.png" alt="404" /></div>
        </main>
        <h1 className="nf-title">Oops! Page not found</h1>
        <h4 className='nf-subtitle'>The page you are looking for might have been removed or temporarily unavailable.</h4>
        <Link to="/" className='nf-home-link'>Back to HomePage</Link>
    </>
  )
}

export default NotFound
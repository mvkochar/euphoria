import React from 'react'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main d-f jc-sb align-center'>
        <div className='d-f align-center'>
          <button className='btn-clear d-b'><img src="/images/prev.png" alt="prev" /></button>
          <div className="home-main-info">
            <h4 className="home-main-above">T-shirt / Tops</h4>
            <h1 className="home-main-title">Summer Value Pack</h1>
            <h5 className="home-main-tags">cool / colorful / comfy</h5>
            <a href="" className="home-main-shop">Shop Now</a>
          </div>
        </div>
        <button className='btn-clear d-b'><img src="/images/next.png" alt="next" /></button>
      </main>
      <section className='home-deals d-f jc-sb'>
          <div className="home-deals-item">
            <h6 className="deals-item-above">Low Price</h6>
            <h2 className="deals-item-title">High Coziness</h2>
            <h3 className="deals-item-subtitle">Upto 50% Off</h3>
            <a href="" className="deals-item-link">Explore Items</a>
          </div>
          <div className="home-deals-item">
            <h6 className="deals-item-above">Beyoung Presents</h6>
            <h2 className="deals-item-title">Breezy Summer <br /> Style</h2>
            <h3 className="deals-item-subtitle">Upto 50% Off</h3>
            <a href="" className="deals-item-link">Explore Items</a>
          </div>
      </section>
    </>
  )
}

export default Home
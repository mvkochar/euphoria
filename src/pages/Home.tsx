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
      <section className='home-arrival'>
        <h2 className="home-bl-title">New Arrival</h2>
        <div className="home-arrival-box d-f align-center">
          <button className='btn-clear d-b'><img src="/images/arrow-left.png" alt="arrow-left" /></button>
          <div className="home-arrival-content d-f">
            <div>
              <div><img src="/images/arrival/1.png" alt="arrival1" /></div>
              <div className="arival-item-title">Knitted Joggers</div>
            </div>
            <div>
              <div><img src="/images/arrival/2.png" alt="arrival2" /></div>
              <div className="arival-item-title">Full Sleeve</div>
            </div>
            <div>
              <div><img src="/images/arrival/3.png" alt="arrival3" /></div>
              <div className="arival-item-title">Active T-Shirts</div>
            </div>
            <div>
              <div><img src="/images/arrival/4.png" alt="arrival4" /></div>
              <div className="arival-item-title">Urban Shirts</div>
            </div>
          </div>
          <button className='btn-clear d-b'><img src="/images/arrow-right.png" alt="arrow-right" /></button>
        </div>
      </section>
      <section className='home-saving'>
        <h2 className="home-bl-title">Big Saving Zone</h2>
        <div className="home-saving-box d-f jc-sb">
          <div className="saving-item-one">
            <h3 className="saving-item-title">Hawaiian <br /> Shirts</h3>
            <h4 className="savivig-item-subtitle">Dress up in summer vibe</h4>
            <h5 className="saving-item-note">Upto 50% Off</h5>
            <div className='saving-item-arrow'><img src="/images/arrow-down1.png" alt="arrow-down" /></div>
            <a href="" className="saving-item-shop">Shop now</a>
          </div>
          <div className="saving-item-two">
            <div className="saving-item-cat">Limited Stock</div>
            <h3 className="saving-item-title">Printed <br /> T-Shirt</h3>
            <h4 className="savivig-item-subtitle">New Designs Every Week</h4>
            <h5 className="saving-item-note">Upto 50% Off</h5>
            <div className='saving-item-arrow'><img src="/images/arrow-down1.png" alt="arrow-down" /></div>
            <a href="" className="saving-item-shop">Shop now</a>
          </div>
          <div className="saving-item-three">
            <h3 className="saving-item-title">Cargo <br /> Joggers</h3>
            <h4 className="savivig-item-subtitle">Move with style & comfort</h4>
            <h5 className="saving-item-note">Upto 50% Off</h5>
            <div className='saving-item-arrow'><img src="/images/arrow-down2.png" alt="arrow-down2" /></div>
            <a href="" className="saving-item-shop">Shop now</a>
          </div>
          <div className="saving-item-four">
            <h3 className="saving-item-title">Urban <br /> Shirts</h3>
            <h4 className="savivig-item-subtitle">Live In Confort</h4>
            <h5 className="saving-item-note">FLAT 60% OFF</h5>
            <div className='saving-item-arrow'><img src="/images/arrow-down2.png" alt="arrow-down2" /></div>
            <a href="" className="saving-item-shop">Shop now</a>
          </div>
          <div className="saving-item-five">
            <h3 className="saving-item-title">Oversized <br /> T-Shirts</h3>
            <h4 className="savivig-item-subtitle">Street Style Icon</h4>
            <h5 className="saving-item-note">FLAT 60% OFF</h5>
            <div className='saving-item-arrow'><img src="/images/arrow-down2.png" alt="arrow-down2" /></div>
            <a href="" className="saving-item-shop">Shop now</a>
          </div>
        </div>
      </section>
      <section className='home-better d-f'>
        <div className="home-better-info">
          <h2 className="home-beter-title">We made your everyday fashion better</h2>
          <h4 className="home-better-subtitle">
            In our journey to improve everyday fashion, euphoria presents <span>Everyday</span> wear range - 
            Comfortable & Affordable fashion 24/7
          </h4>
          <a href="" className="home-better-shop">Shop Now</a>
        </div>
        <div><img src="/images/home-better.png" alt="home-better" /></div>
      </section>
    </>
  )
}

export default Home
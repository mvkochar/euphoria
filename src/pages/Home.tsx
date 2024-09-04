import React from 'react'
import './css/Home.css'
import { MenCategoriesList, WomenCategoriesList } from '../compontents/CatategoriesList/CategoriesList'
import CategoriesItem from '../compontents/CategoriesItem/CategoriesItem'
import ProductsItem from '../compontents/ProductsItem/ProductsItem'
import ProductsList from '../compontents/ProductsList/ProducttsList'

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
      <section className="home-men">
        <h2 className="home-bl-title">Categories For Men</h2>
        <div className="home-men-box d-f jc-sb">
          {
            MenCategoriesList.map((category) => {
              return (
                <CategoriesItem
                  image={category.image}
                  title={category.title}
                  subtitle={category.subtitle}
                />
              )
            })
          }
        </div>
      </section>
      <section className="home-women">
        <h2 className="home-bl-title">Categories For Women</h2>
        <div className="home-women-box d-f jc-sb">
          {
            WomenCategoriesList.map((category) => {
              return (
                <CategoriesItem
                  image={category.image}
                  title={category.title}
                  subtitle={category.subtitle}
                />
              )
            })
          }
        </div>
      </section>
      <section className='home-brands'>
        <h2 className="home-brands-title">Top Brands Deal</h2>
        <h4 className="home-brands-subtitle">Up To <span>60%</span> off on brands</h4>
        <div className="home-brands-box d-f jc-sb">
          <div><img src="/images/brand1.png" alt="brand1" /></div>
          <div><img src="/images/brand2.png" alt="brand2" /></div>
          <div><img src="/images/brand3.png" alt="brand3" /></div>
          <div><img src="/images/brand4.png" alt="brand4" /></div>
        </div>
      </section>
      <section className='home-limelight'>
        <h2 className="home-bl-title">In The Limelight</h2>
        <div className="home-limelight-box d-f jc-sb">
          {
            ProductsList.filter((elem) => elem.id < 4).map((product) => {
              return (
                <ProductsItem
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  brand={product.brand}
                  price={product.price}
                />
              )
            })
          }
        </div>
      </section>
      <section className='home-feedback'>
        <h2 className="home-bl-title">Feedback</h2>
        <div className="home-feedback-box d-f jc-sb">
          <div className="home-feedback-item">
            <div className="d-f jc-sb">
              <div><img src="/images/author1.png" alt="author1" /></div>
              <div className="home-feedback-rating d-f">
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star_half.png" alt="star-half" /></div>
                <div><img src="/images/star_outline.png" alt="star-outline" /></div>
              </div>
            </div>
            <h3 className="feedback-item-title">Floyd Miles</h3>
            <p className="feedback-item-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. <br />
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="home-feedback-item">
            <div className="d-f jc-sb">
              <div><img src="/images/author2.png" alt="author2" /></div>
              <div className="home-feedback-rating d-f">
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star_outline.png" alt="star-outline" /></div>
              </div>
            </div>
            <h3 className="feedback-item-title">Ronald Richards</h3>
            <p className="feedback-item-desc">
              Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="home-feedback-item">
            <div className="d-f jc-sb">
              <div><img src="/images/author3.png" alt="author3" /></div>
              <div className="home-feedback-rating d-f">
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star.png" alt="star" /></div>
                <div><img src="/images/star_half.png" alt="star-half" /></div>
                <div><img src="/images/star_outline.png" alt="star-outline" /></div>
              </div>
            </div>
            <h3 className="feedback-item-title">Savannah Nguyen</h3>
            <p className="feedback-item-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. <br />
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt 
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
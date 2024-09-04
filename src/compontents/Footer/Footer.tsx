import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div className="footer-bar d-f jc-sb">
          <div>
            <h3 className="footer-bl-title">Need Help</h3>
            <ul className="footer-bl-list">
              <li><a href="">Contact Us</a></li>
              <li><a href="">Track Order</a></li>
              <li><a href="">Returns & Refunds</a></li>
              <li><a href="">FAQ's</a></li>
              <li><a href="">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-bl-title">Company</h3>
            <ul className="footer-bl-list">
              <li><a href="">About Us</a></li>
              <li><a href="">euphoria Blog</a></li>
              <li><a href="">euphoriastan</a></li>
              <li><a href="">Collaboration</a></li>
              <li><a href="">Media</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-bl-title">More Info</h3>
            <ul className="footer-bl-list">
              <li><a href="">Term and Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Shipping Policy</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-bl-title">Location</h3>
            <ul className="footer-bl-list">
              <li>support@euphoria.in</li>
              <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
              <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
            </ul>
          </div>
        </div>
        <div className="footer-about d-f jc-sb">
          <div className="footer-social d-f">
            <div><img src="/images/footer-social1.png" alt="footer-social1" /></div>
            <div><img src="/images/footer-social2.png" alt="footer-social2" /></div>
            <div><img src="/images/footer-social3.png" alt="footer-social3" /></div>
            <div><img src="/images/footer-social4.png" alt="footer-social4" /></div>
          </div>
          <div>
            <h3 className="footer-download-title">Download The App </h3>
            <div className="footer-download-box d-f">
              <a href="" className='d-b'><img src="/images/google-play.png" alt="google-play" /></a>
              <a href="" className='d-b'><img src="/images/app-store.png" alt="app-store" /></a>
            </div>
          </div>
        </div>
        <div className="footer-popular">
          <select name="popularCategories">
            <option value="0">Popular Categories</option>
          </select>
        </div>
        <div className="footer-copyright">Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
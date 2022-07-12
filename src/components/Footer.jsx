import React from 'react'
import "./style.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <h3>Clemmeridian Group</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corporis.</p>
            <ul className='footer-socials'>
              <li>
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy;2022 Clemmeridian Group. Designed by <span>Underscore_</span></p>
        </div>
    </div>
  )
}

export default Footer
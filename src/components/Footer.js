import React from 'react'

function Footer() {
  return (
  <div id="contact" className="footer">
      <div className="row-container">
        <div className="footer-container">
          <h3>Contacts</h3>
          <ul>
            <li><a href="">robbyevans001@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-container">
          <h3>useful links</h3>
          <ul>
            <li>Blog Post</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="footer-container">
          <h3>Follow us</h3>
          <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
          </ul>
        </div>
      </div>
      <p className="copyright" >copright@2022-Robbynet</p>

  </div>
  )
}

export default Footer
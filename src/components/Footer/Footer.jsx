import React from 'react'
import { BsFacebook, BsInstagram, BsTwitterX, BsTiktok, BsYoutube } from 'react-icons/bs'

const socials = [
    BsFacebook, BsInstagram, BsTwitterX, BsTiktok, BsYoutube
].map((Icon) => ({ icon: <Icon size={25} /> }));

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
          {socials.map((social, index) => (
              <div className="icon" key={index}>
                  {social.icon}
              </div>
          ))}
      </div>
        <ul>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Ad Choices</li>
        </ul>
        <p className="copyright">© 2025 FakeFlix, Inc.</p>
    </div>
  )
}

export default Footer
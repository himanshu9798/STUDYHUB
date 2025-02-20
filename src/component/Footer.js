import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube,} from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className='Footer'>
        <div className='Footer_Container'>
       <h1 style={{textShadow:"2px 2px purple"}}>STUDY<sup style={{color:"yellow"}}>HUB</sup> 
       <p className='react'>React.JS</p></h1>
       <p className='text'>"React.js powers modern web applications with its component-based architecture<br/>
        and efficient rendering. With a strong community and extensive ecosystem,<br/>
         React makes building interactive user interfaces simpler and faster. <br/>
       Stay connected with us for more updates and <br/>resources on React development!" </p>
       <h1 style={{color:"black"}}>FOLLOW US</h1>
       <div className='icon'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{marginRight:"15px",color:"white"}} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{marginRight:"10px",color:"white"}} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{marginRight:"10px",color:"white"}}  />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} style={{color:"white"}}/>
        </a>
      </div>
       </div>
    </div>
    <div style={{display:"flex",backgroundColor:"black",color:"white"}}>
        <h3 style={{marginLeft:"20%"}}>Copy Right @2025 </h3>
        <h3 style={{textShadow:"2px 2px purple",position:"relative",top:"-5%"}}>STUDY<sup style={{color:"yellow"}}>HUB</sup> </h3>
    </div>
    </>
  )
}


export default Footer;

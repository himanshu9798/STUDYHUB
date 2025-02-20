import React from 'react'
import logo from '../image/logo.png'
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between',color:"white", alignItems: 'center', backgroundColor: '#4A90E2' }}>
      <div className="logo" style={{display:"flex",gap:"1rem"}}>
        <h1 style={{textShadow:"2px 2px purple"}}>STUDY<sup style={{color:"yellow"}}>HUB</sup> </h1>
        <img className='App-logo' style={{width:"90px"}}src={logo} alt='logo'/>
      </div>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem' }}>
         <Link to='/'><li>Home</li></Link>
         <Link to='/redux'><li>Redux</li></Link>
         <Link to='/resource'><li>Resources</li></Link>
         <Link to='/query'><li>Query</li></Link>

        </ul>
      </nav>
      <div className="actions" style={{ display: 'flex', gap: '1rem' }}>
        <input type="text" placeholder="Search..." style={{ padding: '0.5rem',border:"none",outline:"none" ,boxShadow:"2px 2px gray",borderRadius:"5px"}} />
        <button style={{border:"2px solid #4A90E2",outline:"2px solid white",borderRadius:"10px",transform:"scale(1.1)",cursor:"pointer"}}>Sign In</button>
      </div>
    </header>
  );
}

export default Header;

import React from 'react'
import "./Navbar.css"
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/andy.jpg'


const Navbar = () => {
  return (
    <nav classname = 'flex-div'>
      <div classname = 'nav-left flex-div'>
        <img className='menu_icon' src = {menu_icon} alt = "" />
        <img className='logo' src= {logo} alt=''/>
      </div>

      <div className='nav-middle flex-div'>
        <input type='text' placeholder='Search'/>
        <img src={search_icon} alt=''/>
      </div>

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt=''/>
        <img src={more_icon} alt=''/>
        <img src={notification_icon} alt=''/>
        <img src={profile_icon} className='user_icon'  width={150} height={150} alt=''/>
      </div> 
      
    </nav>
  )
}

export default Navbar
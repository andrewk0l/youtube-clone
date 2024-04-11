import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.gif'
import game_icon from '../../assets/gaming.png'
import automobiles from '../../assets/automobile.gif'
import sports from '../../assets/football.gif'
import entertaiment from '../../assets/television.png'
import tech from '../../assets/technology.gif'
import music from '../../assets/music.gif'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import andy from '../../assets/andy.png'
import ife from '../../assets/Ife.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className="side-links">
          <img src={home} alt=''/> <p>Home</p>
        </div>
        <div className="side-links">
          <img src={game_icon} alt=''/> <p>Gaming</p>
        </div>
        <div className="side-links">
          <img src={automobiles} alt=''/> <p>Automobile</p>
        </div>
        <div className="side-links">
          <img src={sports} alt=''/> <p>Sports</p>
        </div>
        <div className="side-links">
          <img src={entertaiment} alt=''/> <p>Entertaiment</p>
        </div>
        <div className="side-links">
          <img src={tech} alt=''/> <p>Technology</p>
        </div>
        <div className="side-links">
          <img src={music} alt=''/> <p>Music</p>
        </div>
        <div className="side-links">
          <img src={blogs} alt=''/> <p>Blogs</p>
        </div>
        <div className="side-links">
          <img src={news} alt=''/> <p>News</p>
        </div>

        <hr />

        <div className='subscribed-list'>
          <h3>Subscribed</h3>
          <div className="side-links">
            <img src={andy} alt='' /> <p>oluwanifemi</p>
          </div>
          <div className="side-links">
            <img src={ife} alt='' /> <p>ifeoluwa</p>
          </div>
          <div className="side-links">
            <img src={simon} alt='' /> <p>simon</p>
          </div>
          <div className="side-links">
            <img src={tom} alt='' /> <p>tom</p>
          </div>
          <div className="side-links">
            <img src={megan} alt='' /> <p>megan</p>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Sidebar
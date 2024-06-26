import './Navbar.css'
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
const Menu = () => {
  return(<>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#fetures">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>)
}
const Navbar = () => {
  const [changeColor,setChangeColor] =useState(false)
  function change(){
    if(window.scrollY>=150){
      setChangeColor(true)
    }
    else{
      setChangeColor(false)
    }
  }
  window.addEventListener('scroll',change)
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className={ changeColor ? 'gpt3__navbar  navbar-bg':'gpt3__navbar'}>
      <div className="gpt3__navbar-links-logo">
        <img src={logo} alt='logo' />
      </div>
      <div className="gpt3__navbar-links_container">
        <Menu />
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_containe-links">
              <Menu />
              <div className='gpt3__navbar-menu_containe-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
            </div>
          </div>
        )}
      </div>
      </div>
  )
}

export default Navbar
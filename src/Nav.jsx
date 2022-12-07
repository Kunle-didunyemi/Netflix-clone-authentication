import React, { useEffect, useState } from 'react';
import "./Nav.css";
import Avatar from './avatarimage/avatar.png';
import Netflix from './avatarimage/netflix.png';
import { useNavigate } from 'react-router-dom';


const Nav = () => {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100 ){
            handleShow(true)
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{

        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

  return (
    <div className={`nav ${ show && "nav_black"}`}>
        <div className="nav_contents">
        <img
        onClick={()=>navigate("/")}
        className=' nav_logo'
        src= {Netflix} alt="" />
        <img
        onClick={()=> navigate("/profile")}
        className='nav_avatar'
        src= {Avatar} alt="" />
        </div>
    </div>
  )
}

export default Nav
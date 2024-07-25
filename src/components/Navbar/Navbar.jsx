import React from 'react';
import Logo from "../../assets/TestLogo.svg";
import img1 from "../../assets/hello.svg";
import img2 from "../../assets/hello2.svg";
import img3 from "../../assets/hello3.svg";
import img4 from "../../assets/hello4.svg";
import img5 from "../../assets/hello5.svg";
import doctor from "../../assets/docdoc.jpg";
import setting from "../../assets/sett.png";
import dot from "../../assets/threedot.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo-container'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='menu'>
        <div className='menu-item'>
          <img src={img1} alt="Overview" />
          <span>Overview</span>
        </div>
        <div className='menu-item'>
          <img src={img2} alt="Patients" />
          <span>Patients</span>
        </div>
        <div className='menu-item'>
          <img src={img3} alt="Schedule" />
          <span>Schedule</span>
        </div>
        <div className='menu-item'>
          <img src={img4} alt="Message" />
          <span>Message</span>
        </div>
        <div className='menu-item'>
          <img src={img5} alt="Transactions" />
          <span>Transactions</span>
        </div>
      </div>
      <div className='dprofile'>
        <img src={doctor} alt="Dr. Jose Simmons" className='dprofile-picture' />
        <div className='dprofile-info'>
          <p>Dr. Jose Simmons</p>
          <p>General Practitioner</p>
        </div>
        <div className='menu-item'>
            <img src={setting} alt="" />
            <img src={dot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

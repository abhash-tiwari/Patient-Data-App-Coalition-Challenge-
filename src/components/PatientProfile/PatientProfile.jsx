import React from 'react';
import './PatientProfile.css';
import i from "../../assets/BirthIcon.png";
import i1 from "../../assets/FemaleIcon.png";
import i2 from "../../assets/PhoneIcon.png";
import i3 from "../../assets/InsuranceIcon.png";

const PatientProfile = ({ data }) => {
  return (
    <div className="jprofile">
      <img src={data.profile_picture} alt="Profile" className="jprofile-picture" />
      <h1>{data.name}</h1>
      <div className="jinfo">
        <div className="jinfo-item">
          <img src={i} alt="Date of Birth" className="jicon" /> 
          <div className="jinfo-data">
            <span>Date of Birth</span>
            <span>{data.date_of_birth}</span>
          </div>
        </div>
        <div className="jinfo-item">
          <img src={i1} alt="Gender" className="jicon" /> 
          <div className="jinfo-data">
            <span>Gender</span>
            <span>{data.gender}</span>
          </div>
        </div>
        <div className="jinfo-item">
          <img src={i2} alt="Phone" className="jicon" /> 
          <div className="jinfo-data">
            <span>Contact Info</span>
            <span>{data.phone_number}</span>
          </div>
        </div>
        <div className="jinfo-item">
          <img src={i2} alt="Emergency Contact" className="jicon" /> 
          <div className="jinfo-data">
            <span>Emergency Contact</span>
            <span>{data.emergency_contact}</span>
          </div>
        </div>
        <div className="jinfo-item">
          <img src={i3} alt="Insurance" className="jicon" /> 
          <div className="jinfo-data">
            <span>Insurance Type</span>
            <span>{data.insurance_type}</span>
          </div>
        </div>
      </div>
      <div className='btn'>
        <p>Show All Information</p>
      </div>
    </div>
  );
};

export default PatientProfile;


import React from 'react';
import './PatientList.css';
import search from "../../assets/se.svg"
import emily from "../../assets/emily.png"
import ryan from "../../assets/ryan.png";   // Example image import
import jessica from "../../assets/jessica.png"; // New patient image
import samantha from "../../assets/samantha.png";
import ashley from "../../assets/ashley.png";
import olivia from "../../assets/olivia.png";
import tyler from "../../assets/tyler.png";
import kevin from "../../assets/kevin.png";
import dylan from "../../assets/dylan.png";
import nathan from "../../assets/nathan.png";
import mike from "../../assets/mike.png";

const patients = [
    { name: 'Emily Williams', age: 18, gender: 'Female', image: emily },
    { name: 'Ryan Johnson', age: 45, gender: 'Male', image: ryan },
    { name: 'Jessica Taylor', age: 28, gender: 'Female', image: jessica },
    { name: 'Samantha Johnson', age: 56, gender: 'Female', image: samantha },
    { name: 'Ashley Martinez', age: 54, gender: 'Female', image: ashley },
    { name: 'Olivia Brown', age: 32, gender: 'Female', image: olivia },
    { name: 'Tyler Davis', age: 29, gender: 'Male', image: tyler },
    { name: 'Kevin Anderson', age: 30, gender: 'Male', image: kevin },
    { name: 'Dylan Thompson', age: 36, gender: 'Male', image: dylan },
    { name: 'Nathan Evans', age: 58, gender: 'Male', image: nathan },
    { name: 'Mike Nolan', age: 31, gender: 'Male', image: mike },
  ];

  const PatientList = () => {
    return (
      <div className="patient-list">
        <div className="search-bar">
          <h1>Patients</h1>
          <img src={search} alt="Search Icon" />
        </div>
        {patients.map((patient, index) => (
          <div key={index} className={`patient-item ${patient.name === 'Jessica Taylor' ? 'special' : ''}`}>
            <img src={patient.image} alt={patient.name} className="profile-pic" />
            <div className="patient-info">
              <p>{patient.name}</p>
              <p>{`${patient.gender}, ${patient.age}`}</p>
            </div>
            <button className="options-button">...</button> {/* Three-dot menu */}
          </div>
        ))}
      </div>
    );
  };
  
  export default PatientList;
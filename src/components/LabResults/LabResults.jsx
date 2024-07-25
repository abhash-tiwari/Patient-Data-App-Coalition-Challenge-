import React from 'react';
import './LabResults.css';
import load from '../../assets/dload.png'
const LabResults = ({ data }) => {
    return (
        <div className="lab-results">
            <h2>Lab Results</h2>
            <ul>
                {data.map((result, index) => (
                    <main>
                     <li className='list'  key={index}>{result} <img src={load} alt="" /> </li>

                    </main>
                    
                ))}
            </ul>
        </div>
    );
};

export default LabResults;

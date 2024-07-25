import React from 'react';
import './LabResults.css';

const LabResults = ({ data }) => {
    return (
        <div className="lab-results">
            <h2>Lab Results</h2>
            <ul>
                {data.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default LabResults;

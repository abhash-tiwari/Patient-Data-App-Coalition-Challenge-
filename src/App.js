import React, { useEffect, useState } from 'react';
import PatientProfile from '../src/components/PatientProfile/PatientProfile';
import BloodPressureChart from '../src/components/BloodPressureChart/BloodPressureChart';
import DiagnosticTable from '../src/components/DiagnosticTable/DiagnosticTable';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PatientList from './components/PatientList/PatientList';
import LabResults from './components/LabResults/LabResults';

const App = () => {
    const [patientData, setPatientData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
            const username = 'coalition';
            const password = 'skills-test';
            const encodedCredentials = btoa(`${username}:${password}`);

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`
                    }
                });

                const data = await response.json();
                const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
                setPatientData(jessicaData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="acontainer">
            {patientData ? (
                <>
                    <Navbar />
                    <div className="acontent">
                        <PatientList className="apatient-list" />
                        <div className="main-content">
                            <BloodPressureChart className="ablood-pressure-chart" data={patientData.diagnosis_history} />
                            <DiagnosticTable className="adiagnostic-table" data={patientData.diagnostic_list} />
                        </div>
                        <div className="apatient-profile-and-lab-results">
                           <PatientProfile className="apatient-profile" data={patientData} />
                           <div className="lab-results-gap"> </div>
                          <LabResults data={patientData.lab_results} />
                         </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default App;

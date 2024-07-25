import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './BloodPressureChart.css';
import sys from '../../assets/ArrowUp.png';
import dias from '../../assets/ArrowDown.png';
import resp from '../../assets/respiratory rate.png';
import temp from '../../assets/temperature.png';
import hea from '../../assets/HeartBPM.png';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ data }) => {
    const [timeframe, setTimeframe] = useState(6);
    const filteredData = data.slice(0, timeframe);

    const months = filteredData.map(entry => {
        const monthAbbreviation = entry.month.slice(0, 3);
        return `${monthAbbreviation}, ${entry.year}`;
    });

    const systolicValues = filteredData.map(entry => entry.blood_pressure.systolic.value);
    const diastolicValues = filteredData.map(entry => entry.blood_pressure.diastolic.value);

    const chartData = {
        labels: months,
        datasets: [
            {
                label: 'Systolic',
                data: systolicValues,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.4,
            },
            {
                label: 'Diastolic',
                data: diastolicValues,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.4,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                max: 180,
                min: 60,
                ticks: {
                    stepSize: 20,
                },
            },
            x: {
                reverse: true,
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    autoSkip: timeframe === 12, // Only skip labels for last 12 months
                    font: {
                        size: 14,
                    },
                    padding: 2,
                },
                grid: {
                    display: false,
                },
                offset: true,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="blood-pressure-chart" style={{ width: '766px', height: '673px' }}>
            <div className="chart-header">
                <h2>Blood Pressure</h2>
                <div className="timeframe-buttons">
                    <label htmlFor="timeframe-select"></label>
                    <select
                        id="timeframe-select"
                        value={timeframe}
                        onChange={(e) => setTimeframe(Number(e.target.value))}
                    >
                        <option value={6}>Last 6 Months</option>
                        <option value={12}>Last 12 Months</option>
                    </select>
                </div>
            </div>
            <div className='bp-container'>
                <div className="chart-container" style={{ height: '400px', width: '100%' }}>
                    <Line data={chartData} options={options} />
                </div>
                <div className="chart-info">
                    <div className="chart-info-item">
                        <span className="color-systolic"></span>Systolic
                        <h1>160</h1>
                        <img src={sys} alt="" /> Higher than Average
                    </div>
                    <hr className="divider" />
                    <div className="chart-info-item">
                        <span className="color-diastolic"></span>Diastolic
                        <h1>78</h1>
                        <img src={dias} alt="" /> Lower than Average
                    </div>
                </div>
            </div>
            <div className='bpIcon-info'>
                <div id='icn1'>
                    <img src={resp} alt="" />
                    <p>Respiratory Rate</p>
                    <h1>20 bpm</h1>
                    <p>Normal</p>
                </div>
                <div id='icn2'>
                    <img src={temp} alt="" />
                    <p>Temperature</p>
                    <h1>98.6°F</h1>
                    <p>Normal</p>
                </div>
                <div id='icn3'>
                    <img src={hea} alt="" />
                    <p>Heart Rate</p>
                    <h1>78 bpm</h1>
                    <img src={dias} alt="" /> Lower than Average
                </div>
            </div>
        </div>
    );
};

export default BloodPressureChart;

import React from 'react';
import PropTypes from 'prop-types';
import './DiagnosticTable.css';

const DiagnosticTable = ({ data }) => {
    return (
        <div className="diagnostic-table">
            <h2>Diagnostic List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Problem</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((diagnostic, index) => (
                        <tr key={index}>
                            <td>{diagnostic.name}</td>
                            <td>{diagnostic.description}</td>
                            <td>{diagnostic.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

DiagnosticTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })).isRequired
};

export default DiagnosticTable;

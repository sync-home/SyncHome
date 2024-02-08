'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EnergyConsumptionChart = ({energyConsumptionData}) => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={energyConsumptionData}>
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => `${value} kWh`} />
                                <Legend />
                                <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
        </div>
    );
};

export default EnergyConsumptionChart;
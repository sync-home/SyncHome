"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ApartEnergyGraph = ({ data }) => {

   

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="electricity" fill="#8338ec" name="Electricity" />
                    <Bar dataKey="water" fill="#00bfa0" name="Water" />
                    <Bar dataKey="gas" fill="#ffa300" name="Gas" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ApartEnergyGraph;
"use client";

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Lighting',
    power: 1.5
  },
  {
    name: 'HVAC',
    power: 4
  },
  {
    name: 'Refrigerators',
    power: 4
  },
  {
    name: 'Freezers',
    power: 2.2
  },
  {
    name: 'Electronic',
    power: 0.5
  },
  {
    name: 'Automatic Doors',
    power: 2.5
  }
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const EnergyGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"/>
      <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
      <Legend/>
      <Bar dataKey="power" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
  );
}
export default EnergyGraph;
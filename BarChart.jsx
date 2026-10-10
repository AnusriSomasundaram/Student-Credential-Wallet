// src/components/BarChart.jsx
import React from "react";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

/**
 * Bar chart that visualises top skill levels.
 * Props:
 *   - data: [{ skill: "React", level: 80 }, ...]
 */
const BarChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No skill data</p>;
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ReBarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis dataKey="skill" type="category" width={100} />
        <Tooltip />
        <Bar dataKey="level" fill="#34d399" radius={[0, 4, 4, 0]} />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;

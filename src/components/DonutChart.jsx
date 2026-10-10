// src/components/DonutChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#34d399", "#fbbf24", "#f87171", "#60a5fa", "#a78bfa"]; // teal, amber, red, blue, purple

/**
 * Simple donut chart for status counts.
 * Props:
 *   - data: [{ name: "verified", value: 5 }, ...]
 */
const DonutChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No data</p>;
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
        labelLine={false}
        label={({ percent, name }) => `${name}\n${(percent * 100).toFixed(0)}%`}
      >
        {data.map((_, i) => (
          <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default DonutChart;

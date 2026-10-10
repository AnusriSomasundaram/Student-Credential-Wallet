// src/components/VerifierChart.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

/**
 * Simple line chart visualising verifier checks over the last 7 days.
 * Props:
 *   - data: [{ date: "Jan 1", checks: 5 }, ...]
 */
const VerifierChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No activity data</p>;
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Line type="monotone" dataKey="checks" stroke="#60a5fa" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VerifierChart;

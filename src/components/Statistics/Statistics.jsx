import React from "react";
import "./Statistics.css";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment 01",
      Out_Of: 60,
      Mark: 57,
    },
    {
      name: "Assignment 02",
      Out_Of: 60,
      Mark: 60,
    },
    {
      name: "Assignment 03",
      Out_Of: 60,
      Mark: 60,
    },
    {
      name: "Assignment 04",
      Out_Of: 60,
      Mark: 60,
    },
    {
      name: "Assignment 05",
      Out_Of: 60,
      Mark: 45,
    },
    {
      name: "Assignment 06",
      Out_Of: 60,
      Mark: 56,
    },
    {
      name: "Assignment 07",
      Out_Of: 60,
      Mark: 60,
    },
    {
      name: "Assignment 08",
      Out_Of: 60,
      Mark: 60,
    },
  ];

  return (
    <div>
      <div className="nav-banner job-detail text-center">
        <h2> My Assignment Chart</h2>
      </div>
      <div className="my-container chart mt-5">
        <ComposedChart width={1300} height={400} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Mark" barSize={10} fill="#413ea0" />
          <Line type="monotone" dataKey="Mark" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;

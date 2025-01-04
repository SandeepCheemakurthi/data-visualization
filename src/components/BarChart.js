import React from 'react';
import './styles/bar-chart.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({labels, values}) {
  console.log('bar chart', labels, values);
  if(!labels.length || !values.length) return null;

  const chartData ={
    labels: labels,
    datasets: [
      {
        label: "Values",
        data: values,
        backgroundColor: "#007bff"
      }
    ]
  };

  return (
    <div className='barchart-container'>
      <Bar data={chartData} />
      BarChart
    </div>
  )
}

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { BarChart } from './BarChart';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [45, 79, 10, 41, 16, 85, 20],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function OverlabBarChart() {
  return <Bar data={data} />;
}

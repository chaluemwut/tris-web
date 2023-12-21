import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { BarChart } from './BarChart';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May'];

export const options = {
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  // plugins: {
  //   legend: {
  //     position: 'right' as const,
  //   },
  //   title: {
  //     display: true,
  //     text: 'Chart.js Horizontal Bar Chart',
  //   },
  // },
  scales: {
    x: {
      display: false,
      grid: {
        display: false
      }
    },
    y: {
      stacked: true,
      display: false,
      grid: {
        display: false
      }
    }
  }
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [160, 140, 100, 60, 60],
      backgroundColor: '#FFD34B',
    },
    {
      label: 'Dataset 2',
      data: [200, 160, 150, 100, 60],
      backgroundColor: '#F4694C',
    },
  ],
};

export function OverlabBarChart() {
  return <Bar options={options} data={data} />;
}

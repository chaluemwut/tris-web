import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['ปี 2571', 'ปี 2570', 'ปี 2569', 'ปี 2568', 'ปี 2567'];

export const options = {
  indexAxis: 'y',
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
      display: true,
      grid: {
        display: false
      }
    },
    y: {
      stacked: true,
      display: true,
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
      // label: 'Dataset 1',
      data: [160, 140, 100, 60, 60],
      backgroundColor: '#FFD34B',
    },
    {
      // label: 'Dataset 2',
      data: [200, 160, 150, 100, 60],
      backgroundColor: '#F4694C',
    },
  ],
};

export function OverlabBarChart() {
  return <Bar options={options} data={data} />;
}

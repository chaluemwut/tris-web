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

export const options = {
  bezierCurve: true,
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  elements: {
    point: {
      radius: 0,
    }
  },
  scales: {
    x: {
      // display: false,
      grid: {
        display: false
      }
    },
    y: {
      // display: false,
      grid: {
        display: false
      }
    }
  }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep'];

export const data = {
  labels,
  datasets: [
    {
      // label: 'งบประมาณ',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [10, 20, 30, 20, 20, 10, 20, 60, 20],
      backgroundColor: '#5A6ACE',
      stack: 'Stack 0',
    },
    {
      // label: 'เบิกจ่าย',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [-10, -20, -40, -10, -80, -10, -40, -10, -60],
      backgroundColor: '#F4694C',
      stack: 'Stack 0',
    },
    // {
    //   label: 'Dataset 3',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   backgroundColor: 'rgb(53, 162, 235)',
    //   stack: 'Stack 1',
    // },
  ],
};

export function StackWaterfallChart() {
  return <Bar options={options} data={data} />
}

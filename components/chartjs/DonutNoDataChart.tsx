import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
   labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 80],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // '#b8c9d6',
        'rgb(90, 106, 206, 0.15)',
        '#5A6ACE'
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
    //   borderColor: [
    //     'rgba(255, 99, 132, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)',
    //   ],
      borderWidth: 1,
    },
  ],
};

export function DonutNoDataChartJS() {
  return <Doughnut data={data} />;
}

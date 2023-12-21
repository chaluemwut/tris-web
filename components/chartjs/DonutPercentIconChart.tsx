import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       // label: 'Response Rate',
//       data: [50, 50],
//       borderRadius: 2,
//       backgroundColor: ['rgb(90, 106, 206)', 'rgb(90, 106, 206, 0.15)'],
//       // borderWidth: 0,
//     },
//   ],
// };

type DonutData = {
  dataPercent: number,
  color: string
}

export function DonutPercentIconChart(donutData: DonutData) {
  console.log(donutData.dataPercent)
  const data = {
    datasets: [
      {
        data: [50, 50],
        borderRadius: 2,
        backgroundColor: [donutData.color, 'rgb(90, 106, 206, 0.15)'],
      }
    ]
  }
  return <Doughnut data={data} />;
}

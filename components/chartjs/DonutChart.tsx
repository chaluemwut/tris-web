import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//     labels: [],
//     datasets: [
//         {
//             // label: '# of Votes',
//             data: [20, 80],
//             backgroundColor: [
//                 // 'rgba(255, 99, 132, 0.2)',
//                 // '#b8c9d6',
//                 'rgb(90, 106, 206, 0.15)',
//                 '#5A6ACE'
//             ],
//             borderWidth: 1,
//         },
//     ],
// };
type DonutData = {
    data: number[],
    colors: string[]
}

export function DonutChartJS(donutData: DonutData) {
    const data = {
        labels: [],
        datasets: [
            {
                // label: '# of Votes',
                data: donutData.data,
                backgroundColor: donutData.colors,
                borderWidth: 1,
            },
        ],
    };
    return <Doughnut data={data} />;
}

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
            display: false,
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        }
    }
};


type graphColor = {
    color: string;
}

export function LineChart(graphData: graphColor) {
    const labels = ['', '', '', '', ''];
    const data = {
        labels,
        datasets: [
            {
                data: [20, 10, 60, 120, 70],
                borderColor: graphData.color,
                backgroundColor: graphData.color,
                lineTension: 0.6
            },
        ],
    };    
    return <Line options={options} data={data} />;
}

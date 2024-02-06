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

const labels = ['', '', '', '', '', ''];

export const data = {
    labels,
    datasets: [
        {
            borderWidth: 8,
            data: [10, 10, 10],
            borderColor: 'rgb(244, 105, 76)',
            // backgroundColor: 'rgba(255, 99, 132, 1)',
            lineTension: 1
        },
        {
            borderWidth: 5,
            data: [10, 10, 10, 10, 10, 10],
            borderColor: 'rgb(244, 105, 76, 0.2)',
            // backgroundColor: 'rgba(255, 99, 132, 0.5)',
            lineTension: 1
        },
    ],
    scales: {
        xAxes: [{
            gridLines: {
                display: true
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            }
        }]
    }
};

export function ProjectProgress() {
    return <Line options={options} data={data} />;
}

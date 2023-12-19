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

const options = {
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
            display: true,
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

type BarChartData = {
    labels: any,
    datasets: any
}

export function BarChart(barChartData: BarChartData) {
    return <Bar options={options} data={barChartData} />;
}

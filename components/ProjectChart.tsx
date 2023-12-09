import dynamic from 'next/dynamic';

const DonutChart = dynamic(() => import('./chart/DonutChart'), { ssr: false });
const LineChart = dynamic(() => import('./chart/LineChart'), { ssr: false });
const StackChart = dynamic(() => import('./chart/StackChart'), { ssr: false });
const InprogressChart = dynamic(() => import('./chart/LineSeriesChart'), { ssr: false });


import { Chart } from "react-google-charts";

export function NewProjectDonutChart() {
    return <DonutChart />
}

export function FinishProjectChart() {
    return <LineChart />
}

export function SummaryProjectChart() {
    return <StackChart />
}

export function InprogressProjectChart() {
    return <InprogressChart />
}

export function TestDonut() {
    const options = {
        is3D: true,
        title: "Population of Largest U.S. Cities",
        chartArea: { width: "50%" },
        hAxis: {
          title: "Total Population",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
      }
    return <Chart
        chartType="PieChart"
        data={[["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],]}
        options={options}
    />
}
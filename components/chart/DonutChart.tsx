import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function DonutChart() {
    useLayoutEffect(() => {
        let root = am5.Root.new("chartdiv");
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            // layout: root.verticalLayout,
            innerRadius: am5.percent(50)
        }));
        let series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        }));
        series.data.setAll([
            { value: 10, category: "One" },
            { value: 2, category: "Two" },
        ]);
        return () => {
            root.dispose();
        };

    }, []);

    return (
        <div id="chartdiv" style={{ width: "100%", height: "150px" }}></div>
    );
}
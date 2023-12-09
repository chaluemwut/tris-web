import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect } from "react";

export default function LineChart() {
    useLayoutEffect(() => {
        let root = am5.Root.new("line-chartdiv");
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.horizontalLayout,
            paddingLeft: 0
        }));


        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        }))

        let colors = chart.get("colors");

        // Data
        let data = [{
            name: "John",
            startTime: 8,
            endTime: 11,
            columnSettings: {
                stroke: colors?.getIndex(1),
                fill: colors?.getIndex(1)
            }
        // }, 
        // {
        //     name: "Joe",
        //     startTime: 10,
        //     endTime: 13,
        //     columnSettings: {
        //         stroke: colors?.getIndex(3),
        //         fill: colors?.getIndex(3)
        //     }
        // }, {
        //     name: "Susan",
        //     startTime: 11,
        //     endTime: 18,
        //     columnSettings: {
        //         stroke: colors?.getIndex(5),
        //         fill: colors?.getIndex(5)
        //     }
        // }, {
        //     name: "Eaton",
        //     startTime: 15,
        //     endTime: 19,
        //     columnSettings: {
        //         stroke: colors?.getIndex(7),
        //         fill: colors?.getIndex(7)
        //     }
        }];


        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let yRenderer = am5xy.AxisRendererY.new(root, {
            minorGridEnabled: true
        });
        let yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "name",
                renderer: yRenderer,
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        yRenderer.grid.template.setAll({
            location: 1
        })

        yAxis.data.setAll(data);

        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {
                    strokeOpacity: 0.1,
                    minGridDistance: 60
                })
            })
        );


        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Income",
            xAxis: xAxis,
            yAxis: yAxis,
            openValueXField: "startTime",
            valueXField: "endTime",
            categoryYField: "name",
            sequencedInterpolation: true
        }));

        series.columns.template.setAll({
            height: am5.percent(100),
            templateField: "columnSettings",
            tooltipText: "[bold]{name}[/]\n{categoryY}: {valueX}"
        });

        series.data.setAll(data);


        return () => {
            root.dispose();
        };
    })
    return (
        <div id="line-chartdiv" style={{ width: "100%", height: "150px" }}></div>
    );
}
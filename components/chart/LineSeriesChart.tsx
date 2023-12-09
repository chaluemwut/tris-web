import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import { useLayoutEffect } from "react";

export default function LineSeriesChart() {

    useLayoutEffect(() => {
        /* Chart code */

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        let root = am5.Root.new("line-series-chartdiv");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            // panX: true,
            // panY: true,
            // wheelX: "panX",
            // wheelY: "zoomX",
            // pinchZoomX: true,
            // paddingLeft: 0
        }));


        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none"
        }));
        cursor.lineY.set("visible", false);


        // Generate random data
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        let value = 100;

        function generateData() {
            value = Math.round((Math.random() * 10 - 5) + value);
            am5.time.add(date, "day", 1);
            return {
                date: date.getTime(),
                value: value
            };
        }

        function generateDatas(count: number) {
            let data = [];
            for (var i = 0; i < count; ++i) {
                data.push(generateData());
            }
            return data;
        }

        let xAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
        }))
        // let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        //     maxDeviation: 0.2,
        //     baseInterval: {
        //         timeUnit: "day",
        //         count: 1
        //     },
        //     renderer: am5xy.AxisRendererX.new(root, {
        //         minorGridEnabled: false
        //     }),
        //     tooltip: am5.Tooltip.new(root, {})
        // }));

        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root,
            {
                renderer: am5xy.AxisRendererY.new(root, {
                    // pan: "zoom"
                })
            }
        ));


        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));


        // Set data
        let data = generateDatas(10);
        series.data.setAll(data);

        return () => {
            root.dispose()
        }

    }, [])

    return (
        <div id="line-series-chartdiv" style={{ width: "100%", height: "150px" }}></div>
    )
}
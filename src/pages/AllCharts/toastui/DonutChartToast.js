import React, { Component } from "react";

import "tui-chart/dist/tui-chart.css";
import { PieChart } from "@toast-ui/react-chart";
import TuiChart from 'tui-chart';
import "./toastui.scss";

var theme = {
    chart: {
        background: {
            color: 'rgba(243, 243, 249, 0.05)',
            opacity: 0
        }
    }
};
TuiChart.registerTheme('skoteTheme', theme);

class DonutChartToast extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = {
            categories: ['Browser'],
            series: [
                {
                    name: 'Chrome',
                    data: 46.02
                },
                {
                    name: 'IE',
                    data: 20.47
                },
                {
                    name: 'Firefox',
                    data: 17.71
                },
                {
                    name: 'Safari',
                    data: 5.45
                },
                {
                    name: 'Opera',
                    data: 3.10
                },
                {
                    name: 'Etc',
                    data: 7.25
                }
            ]
        };

        const options = {
            chart: {
                width: this.props.chartWidth,
                height: 450,
                format: function (value, chartType, areaType, valuetype, legendName) {
                    if (areaType === 'makingSeriesLabel') { // formatting at series area
                        value = value + '%';
                    }

                    return value;
                }
            },
            theme: 'skoteTheme',
            series: {
                radiusRange: ['40%', '100%'],
                showLabel: true
            },
            tooltip: {
                suffix: '%'
            },
            legend: {
                align: 'bottom'
            }
        };
        var theme = {
            series: {
                series: {
                    colors: [
                        '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
                        '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
                    ]
                },
                label: {
                    color: '#fff',
                    fontFamily: 'sans-serif'
                }
            }
        };

        return (
            <React.Fragment>
                <PieChart data={data} options={options} theme={theme} />
            </React.Fragment>
        );
    }
}

export default DonutChartToast;

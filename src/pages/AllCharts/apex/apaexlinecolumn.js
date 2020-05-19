import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Apaexlinecolumn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Website Blog',
                type: 'column',
                data: [150, 230, 250, 200, 300, 320, 360, 385]
            }, {
                name: 'Social Media',
                type: 'line',
                data: [12, 18, 13, 16, 19, 23, 21, 28]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    width: [0, 2]
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001'],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Website Blog',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Social Media'
                    }
                }]
            }
        };
    }
    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </React.Fragment>
        );
    }
}

export default Apaexlinecolumn;
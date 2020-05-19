import React, { Component } from "react";
// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex";
import BarApexChart from "../AllCharts/apex/barchart";
import AreaChart from "../AllCharts/apex/areachart";
import DonutChart from "../AllCharts/apex/dountchart";
import StackedBarChart from "../AllCharts/apex/stackedbarchart";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Charts" breadcrumbItem="Apex charts" />

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Line Chart</CardTitle>
                                        <LineApexChart />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Bar Chart</CardTitle>
                                        <BarApexChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4"> bar Chart </CardTitle>
                                        <StackedBarChart />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4"> Area Chart </CardTitle>
                                        <AreaChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4"> Donut Chart </CardTitle>
                                        <DonutChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;

import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

// import all charts
import BarChartToast from "../AllCharts/toastui/BarChartToast";
import LineChartToast from "../AllCharts/toastui/LineChartToast";
import AreaChartToast from "../AllCharts/toastui/AreaChartToast";
import ColumnChartToast from "../AllCharts/toastui/ColumnChartToast";
import PieChartToast from "../AllCharts/toastui/PieChartToast";
import DonutChartToast from "../AllCharts/toastui/DonutChartToast";
import HeatmapChartToast from "../AllCharts/toastui/HeatmapChartToast";

class ToastUIChart extends Component {

	render() {
		const chartWidth = (window.innerWidth > 991) ? parseInt((window.innerWidth - 420) / 2) : parseInt(window.innerWidth - 100);
		return (
			<React.Fragment>
				<div className="page-content">
					<div className="container-fluid">

						<Breadcrumbs title="Charts" breadcrumbItem="Toast Ui charts" />
						<Row>
							<Col lg="6">
								<Card>
									<CardBody>
										<CardTitle>Bar Chart</CardTitle>
										<BarChartToast chartWidth={chartWidth} />
									</CardBody>
								</Card>
							</Col>
							<Col sm={6} md={6}>
								<Card>
									<CardBody>
										<CardTitle>Line Chart</CardTitle>
										<div className="text-center"><LineChartToast chartWidth={chartWidth} /></div>
									</CardBody>
								</Card>
							</Col>
							<Col sm={6} md={6}>
								<Card>
									<CardBody>
										<CardTitle>Area Chart</CardTitle>
										<div className="text-center"><AreaChartToast chartWidth={chartWidth} /></div>
									</CardBody>
								</Card>
							</Col>
							<Col sm={6} md={6}>
								<Card>
									<CardBody>
										<CardTitle>Column Chart</CardTitle>
										<div className="text-center"><ColumnChartToast chartWidth={chartWidth} /></div>
									</CardBody>
								</Card>
							</Col>
							<Col sm={6} md={6}>
								<Card>
									<CardBody>
										<CardTitle>Pie Chart</CardTitle>
										<div className="text-center"><PieChartToast chartWidth={chartWidth} /></div>
									</CardBody>
								</Card>
							</Col>
							<Col sm={6} md={6}>
								<Card>
									<CardBody>
										<CardTitle>Donut Chart</CardTitle>
										<div className="text-center"><DonutChartToast chartWidth={chartWidth} /></div>
									</CardBody>
								</Card>
							</Col>
							<Col sm={6} md={6}>
								<Card>
									<CardBody>
										<CardTitle>Heatmap Chart</CardTitle>
										<div className="text-center"><HeatmapChartToast chartWidth={chartWidth} /></div>
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

export default ToastUIChart;

import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap";
import LatestTranactionsRestaurant from "./LatestTranactionsRestaurant";
import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, CardTitle, CardSubtitle, CardHeader } from "reactstrap";
import classnames from "classnames";
import LatestTranactionsTakeaway from "./LatestTranactionsTakeaway";
import {baseUrl} from "../../helpers/baseUrl";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
			orders : '',
			revenue : '',
			last30: '',
			last7 : '',
            modal: false,
            activeTab1: "5"
        };
        this.togglemodal.bind(this);
        this.toggle1 = this.toggle1.bind(this);
    }

	componentDidMount() {
		let path = this.props.location.pathname;
		let restaurant_id = 0;
		if(!isNaN(path.substring(path.length - 5))){
			restaurant_id = path.substring(path.length - 5)
		}else if(!isNaN(path.substring(path.length - 4))){
			restaurant_id = path.substring(path.length - 4)
		}else if(!isNaN(path.substring(path.length - 3))){
			restaurant_id = path.substring(path.length - 3)
		}else if(!isNaN(path.substring(path.length - 2))){
			restaurant_id = path.substring(path.length - 2)
		}else {
			restaurant_id = path.substring(path.length - 1)
		}

		if(localStorage.getItem('isStuff')==="true"){
			localStorage.removeItem('restaurantId')
			localStorage.setItem('restaurantId',restaurant_id)
		}
		this.fetchSummary();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) { window.location.reload();
		}
	}

	fetchSummary() {
		let resId = localStorage.getItem('restaurantId')
		let isStuff = localStorage.getItem('isStuff')
		console.log("fetching products");
		const bearer = 'Bearer ' + localStorage.getItem('access');
		let headers = {}
		if (isStuff == "true") {
			headers = {
				'X-Requested-With': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': bearer,
				'RESID': resId
			}
		} else {
			headers = {
				'X-Requested-With': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': bearer
			}
		}
		return fetch(baseUrl + 'api/restaurants/'+resId+'/dashboard/', {
			method: 'GET',
			headers: headers
		})
			.then(response => {
					console.log("response: ", response)
					if (response.ok) {
						return response;
					} else {
						var error = new Error('Error ' + response.status + ': ' + response.statusText);
						error.response = response;
						console.log(error)
					}
				},
				error => {
					console.log(error)
				})
			.then(response => response.json())
			.then(response => {
				// If response was successful, set the token in local storage
				console.log("admin summary response: ", response)
				this.setState({
					orders : response.order_total,
					revenue : response.revenue_total,
					last30: response.revenue_thirty_days,
					last7 : response.revenue_seven_days
				})
			})
			.catch(error => console.log(error))
	}

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggle1(tab) {
		if (this.state.activeTab1 !== tab) {
			this.setState({
				activeTab1: tab
			});
		}
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col xl="12">
								<Row>
									<Col md="3" >
										<Card className="mini-stats-wid">
											<CardBody>
												<Media>
													<Media body>
														<p className="text-muted font-weight-medium">Orders</p>
														<h4 className="mb-0">{this.state.orders}</h4>
													</Media>
													<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                        <span className="avatar-title">
                                                            <i className="bx bx-copy-alt font-size-24"></i>
                                                        </span>
													</div>
												</Media>
											</CardBody>
										</Card>
									</Col>
									<Col md="3" >
										<Card className="mini-stats-wid">
											<CardBody>
												<Media>
													<Media body>
														<p className="text-muted font-weight-medium">Revenue</p>
														<h4 className="mb-0">{this.state.revenue}</h4>
													</Media>
													<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className="bx bx-copy-alt font-size-24"></i>
                                                                </span>
													</div>
												</Media>
											</CardBody>
										</Card>
									</Col>
									<Col md="3" >
										<Card className="mini-stats-wid">
											<CardBody>
												<Media>
													<Media body>
														<p className="text-muted font-weight-medium">Last 30 Days Revenue</p>
														<h4 className="mb-0">{this.state.last30}</h4>
													</Media>
													<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className="bx bx-archive-in font-size-24"></i>
                                                                </span>
													</div>
												</Media>
											</CardBody>
										</Card>
									</Col>
									<Col md="3" >
										<Card className="mini-stats-wid">
											<CardBody>
												<Media>
													<Media body>
														<p className="text-muted font-weight-medium">Last 7 Days Revenue</p>
														<h4 className="mb-0">{this.state.last7}</h4>
													</Media>
													<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className="bx bx-archive-in font-size-24"></i>
                                                                </span>
													</div>
												</Media>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>

                        <Row>
                            <Col lg="12">
                            <Card>
									<CardBody>
										<Nav pills className="navtab-bg nav-justified">
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: this.state.activeTab1 === "5"
													})}
													onClick={() => {
														this.toggle1("5");
													}}
												>
													Restaurant
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: this.state.activeTab1 === "6"
													})}
													onClick={() => {
														this.toggle1("6");
													}}
												>
													Takeaway
												</NavLink>
											</NavItem>
										</Nav>

										<TabContent activeTab={this.state.activeTab1}>
											<TabPane tabId="5" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
                                                            <LatestTranactionsRestaurant />
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="6" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
                                                        <LatestTranactionsTakeaway />
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
										</TabContent>
									</CardBody>
								</Card>
                                
                            </Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default Dashboard;

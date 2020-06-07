import React, { Component } from "react";
import {Container, Row, Col, Card, CardBody, Media, Button} from "reactstrap";
import LatestTranactionsRestaurant from "./LatestTranactionsRestaurant";
import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, CardTitle, CardSubtitle, CardHeader } from "reactstrap";
import classnames from "classnames";
import LatestTranactionsTakeaway from "./LatestTranactionsTakeaway";
import {baseUrl} from "../../helpers/baseUrl";
import queryString from 'query-string';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
			orders : '',
			revenue : '',
			last30: '',
			last7 : '',
            modal: false,
            activeTab1: "5",
			mollie_setup :false,
			mollie_status : '',
			onboardingUrl: ''
        };
        this.togglemodal.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.redirectUrl = this.redirectUrl.bind(this)
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
		let params = queryString.parse(this.props.location.search)
		if(params.code){
			this.authorizeMollie(params.code);
		}else{
			this.fetchSummary();
		}

	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) { window.location.reload();
		}
	}

	authorizeMollie(code) {
		console.log("updating mollie status");
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
		return fetch(baseUrl + 'api/mollie/access-token/?code='+code+'', {
			method: 'GET',
			headers: headers
		})
			.then(response => {
					console.log("mollie response: ", response)
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
				console.log("mollie 2nd  response: ", response)
			})
			.catch(error => console.log(error))
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
				if(localStorage.getItem('isStuff') && localStorage.getItem('isStuff') === "true") {
					this.setState({
						orders: response.order_total,
						revenue: response.revenue_total,
						last30: response.revenue_thirty_days,
						last7: response.revenue_seven_days,
						mollie_setup : true
					})
					localStorage.setItem("mollieSetup","true");
				}else if(response.mollie_setup == false){
					this.setState({
						mollie_setup : response.mollie_setup,
						mollie_status : response.mollie_status,
						onboardingUrl: response.onboarding_url
					})
					localStorage.setItem("mollieSetup","false");
				}else if(response.mollie_setup == true){
					this.setState({
						orders: response.order_total,
						revenue: response.revenue_total,
						last30: response.revenue_thirty_days,
						last7: response.revenue_seven_days,
						mollie_setup : true
					})
					localStorage.setItem("mollieSetup","true");
				}
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

	redirectUrl(url) {
		window.open(url)
	}

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
					{ this.state.mollie_setup == true?
						<Container fluid>
							<Row>
								<Col xl="12">
									<Row>
										<Col md="3">
											<Card className="mini-stats-wid">
												<CardBody>
													<Media>
														<Media body>
															<p className="text-muted font-weight-medium">Orders</p>
															<h4 className="mb-0">{this.state.orders}</h4>
														</Media>
														<div
															className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                        <span className="avatar-title">
                                                            <i className="bx bx-copy-alt font-size-24"></i>
                                                        </span>
														</div>
													</Media>
												</CardBody>
											</Card>
										</Col>
										<Col md="3">
											<Card className="mini-stats-wid">
												<CardBody>
													<Media>
														<Media body>
															<p className="text-muted font-weight-medium">Revenue</p>
															<h4 className="mb-0">{this.state.revenue}</h4>
														</Media>
														<div
															className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className="bx bx-copy-alt font-size-24"></i>
                                                                </span>
														</div>
													</Media>
												</CardBody>
											</Card>
										</Col>
										<Col md="3">
											<Card className="mini-stats-wid">
												<CardBody>
													<Media>
														<Media body>
															<p className="text-muted font-weight-medium">Last 30 Days
																Revenue</p>
															<h4 className="mb-0">{this.state.last30}</h4>
														</Media>
														<div
															className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className="bx bx-archive-in font-size-24"></i>
                                                                </span>
														</div>
													</Media>
												</CardBody>
											</Card>
										</Col>
										<Col md="3">
											<Card className="mini-stats-wid">
												<CardBody>
													<Media>
														<Media body>
															<p className="text-muted font-weight-medium">Last 7 Days
																Revenue</p>
															<h4 className="mb-0">{this.state.last7}</h4>
														</Media>
														<div
															className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
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
														style={{cursor: "pointer"}}
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
														style={{cursor: "pointer"}}
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
																<LatestTranactionsRestaurant/>
															</CardText>
														</Col>
													</Row>
												</TabPane>
												<TabPane tabId="6" className="p-3">
													<Row>
														<Col sm="12">
															<CardText>
																<LatestTranactionsTakeaway/>
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
						:
						<Container>
							{this.state.mollie_status == "onboarding" ?
								<Row style={{textAlign:"left"}}>
									<Col lg ="5">
										<h5>COMPLETE REGISTRATION</h5>
										<p>
											We are using Mollie to handle our payments, please take a minute to create
											an account or login into Mollie
										</p>
											<Button type="button"
													style={{backgroundColor: 'Blue', width : '200px', marginLeft : '10px'}}
													size="sm"
													className="btn-rounded waves-effect waves-light"
													key={"Connect"}
													onClick={() => this.redirectUrl(this.state.onboardingUrl)}
											>
												Connect Mollie
											</Button>
									</Col>
								</Row>
								: this.state.mollie_status == "in-review" ?
									<Row style={{textAlign:"left"}}>
										<Col lg ="5">
											<h5>THANKS FOR SIGNING UP</h5>
											<p>
												We are verifying your profile. This can take upto 15 minutes.
											</p>
											<Row>
												<Col>
													<h6>Mollie status: <span style={{color:"blue", marginLeft:"150px"}}>In progress</span></h6>
													<br/><br/><br/><br/><br/>
												</Col>
											</Row>
											<Row>
												<Col>
													Want to add additional data? Press the below button
												</Col>
											</Row>
												<Button type="button"
														style={{backgroundColor: 'Blue', width : '200px', marginLeft : '10px'}}
														size="sm"
														className="btn-rounded waves-effect waves-light"
														key={"Connect"}
														onClick={() => this.redirectUrl(this.state.onboardingUrl)}
												>
													Add additional data
												</Button>
										</Col>
									</Row>
								: this.state.mollie_status == "needs-data" ?
										<Row style={{textAlign:"left"}}>
											<Col lg ="5">
												<h5>THANKS FOR SIGNING UP</h5>
												<p>
													We are verifying your profile. This can take upto 15 minutes.
												</p>
												<Row>
													<Col>
														<h6>Mollie status: <span style={{color:"red", marginLeft:"150px"}}>Needs more data</span></h6>
														<br/><br/><br/><br/><br/>
													</Col>
												</Row>
												<Row>
													<Col>
														Want to add additional data? Press the below button
													</Col>
												</Row>
													<Button type="button"
															style={{backgroundColor: 'Blue', width : '200px', marginLeft : '10px'}}
															size="sm"
															className="btn-rounded waves-effect waves-light"
															key={"Connect"}
															onClick={() => this.redirectUrl(this.state.onboardingUrl)}
													>
														Add additional data
													</Button>
											</Col>
										</Row> : ""
							}

						</Container>
					}
                </div>

            </React.Fragment>
        );
    }
}

export default Dashboard;

import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap";
import LatestTranactionsRestaurant from "./LatestTranactionsRestaurant";
import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, CardTitle, CardSubtitle, CardHeader } from "reactstrap";
import classnames from "classnames";
import LatestTranactionsTakeaway from "./LatestTranactionsTakeaway";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [
                { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
                { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
                { title: "Revenue", iconClass: "bx-purchase-tag-alt", description: "$16.2" },
                { title: "Revenue", iconClass: "bx-purchase-tag-alt", description: "$16.2" }
            ],
            modal: false,
            activeTab1: "5"
        };
        this.togglemodal.bind(this);
        this.toggle1 = this.toggle1.bind(this);
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
                                    {/* Reports Render */}
                                    {
                                        this.state.reports.map((report, key) =>
                                            <Col md="3" key={"_col_" + key}>
                                                <Card className="mini-stats-wid">
                                                    <CardBody>
                                                        <Media>
                                                            <Media body>
                                                                <p className="text-muted font-weight-medium">{report.title}</p>
                                                                <h4 className="mb-0">{report.description}</h4>
                                                            </Media>
                                                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className={"bx " + report.iconClass + " font-size-24"}></i>
                                                                </span>
                                                            </div>
                                                        </Media>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        )
                                    }
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

import React, { Component } from "react";
import { Container, Row, Col, Button, Card, CardBody, Media } from "reactstrap";
import RestaurantsOverview from "./RestaurantsOverview";
import {baseUrl} from "../../helpers/baseUrl";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders : '',
            revenue : '',
            last30: '',
            last7 : ''
        };
        this.togglemodal.bind(this);
    }

    componentDidMount() {
        this.fetchSummary();
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
        return fetch(baseUrl + 'api/admin/dashboard/', {
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
                                <RestaurantsOverview />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;

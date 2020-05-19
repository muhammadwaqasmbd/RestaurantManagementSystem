import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap";
import LatestTranaction from "./LatestTranaction";

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
            modal: false
        };
        this.togglemodal.bind(this);
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
                                <LatestTranaction />
                            </Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default Dashboard;

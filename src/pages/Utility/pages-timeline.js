import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Horizontal list
import LiHorizontalTimeline from "./li-horozontal-timeline";

//Import Vertical list
import LiVerticalTimeline from "./li-vertical-timeline";

class PagesTimeline extends Component {
    state = {
        events: [
            { id: 1, date: "12 September", title: "First event", description: "It will be as simple as occidental in fact it will be Cambridge" },
            { id: 2, date: "06 October", title: "Second event", description: "To an English person, it will seem like simplified English existence." },
            { id: 3, date: "25 October", title: "Third event", description: "For science, music, sport, etc, Europe uses the same vocabulary." },
            { id: 4, date: "04 November", title: "Fourth event", description: "New common language will be more simple than existing." },
        ],
        statuses: [
            { id: 1, stausTitle: "Ordered", iconClass: "bx-copy-alt", description: "New common language will be more simple than existing." },
            { id: 2, stausTitle: "Packed", iconClass: "bx-package", description: "To an English person, it will seem like simplified English existence." },
            { id: 3, stausTitle: "Shipped", iconClass: "bx-car", description: "It will be as simple as occidental in fact it will be Cambridge" },
            { id: 4, stausTitle: "Delivered", iconClass: "bx-badge-check", description: "To an English person, it will seem like simplified English existence." },
        ]

    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Timeline" breadcrumbItem="Utility" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Horizontal Timeline</CardTitle>
                                        <div className="hori-timeline">
                                            <ul className="list-inline events">

                                                {/* Render Horizontal Timeline Events */}
                                                {
                                                    this.state.events.map((event, key) =>
                                                        <LiHorizontalTimeline event={event} key={"_key_" + key} />
                                                    )
                                                }

                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-5">Vertical Timeline</CardTitle>
                                        <div className="">
                                            <ul className="verti-timeline list-unstyled">
                                                {/* Render Horizontal Timeline Events */}
                                                {
                                                    this.state.statuses.map((status, key) =>
                                                        <LiVerticalTimeline status={status} key={"_status_" + key} />
                                                    )
                                                }
                                            </ul>
                                        </div>
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

export default PagesTimeline;
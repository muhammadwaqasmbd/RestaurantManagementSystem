import React, { Component } from "react";

import { Col, Row } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class UiColors extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="UI Elements" breadcrumbItem="Colors" />

                        <Row>
                            <Col xl={3} md={6}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="color-box bg-primary p-4 rounded">
                                            <h5 className="my-2 text-white">#556ee6</h5>
                                        </div>
                                        <h5 className="mb-0 mt-3 text-primary">Primary</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} md={6}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="color-box bg-success p-4 rounded">
                                            <h5 className="my-2 text-white">#34c38f</h5>
                                        </div>
                                        <h5 className="mb-0 mt-3 text-success">Success</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} md={6}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="color-box bg-info p-4 rounded">
                                            <h5 className="my-2 text-white">#50a5f1</h5>
                                        </div>
                                        <h5 className="mb-0 mt-3 text-info">Info</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} md={6}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="color-box bg-warning p-4 rounded">
                                            <h5 className="my-2 text-white">#f1b44c</h5>
                                        </div>
                                        <h5 className="mb-0 mt-3 text-warning">Warning</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={3} md={6}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="color-box bg-danger p-4 rounded">
                                            <h5 className="my-2 text-white">#f46a6a</h5>
                                        </div>
                                        <h5 className="mb-0 mt-3 text-danger">Danger</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} md={6}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="color-box bg-dark p-4 rounded">
                                            <h5 className="my-2 text-light">#343a40</h5>
                                        </div>
                                        <h5 className="mb-0 mt-3 text-dark">Dark</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} md={6}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="color-box bg-secondary p-4 rounded">
                                            <h5 className="my-2 text-light">#74788d</h5>
                                        </div>
                                        <h5 className="mb-0 mt-3 text-muted">Secondary</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UiColors;

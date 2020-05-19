import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, CardBody, CardTitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn";
//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

class TasksList extends Component {
    state = { chk1: true, chk2: true, chk3: true, }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Tasks" breadcrumbItem="Task List" />
                        {/* Render Breadcrumbs */}
                        <Row>
                            <Col lg={8}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Example </CardTitle>
                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "60px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Skote Dashboard UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member">
                                                                    <img src={avatar2} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member">
                                                                    <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-secondary font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="customCheck2" onClick={() => { this.setState({ chk1: !this.state.chk1 }) }}></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a New Landing UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar5} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            3 +
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-primary font-size-11">Approved</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                                <label className="custom-control-label" htmlFor="customCheck3"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Skote Logo</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            F
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-secondary font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">In Progress </CardTitle>
                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "60px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck4" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="customCheck4" onClick={() => { this.setState({ chk2: !this.state.chk2 }) }}></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Brand logo design</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src="assets/images/users/avatar-7.jpg" className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                                <label className="custom-control-label" htmlFor="customCheck5"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Blog Template UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            S
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar8} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-warning font-size-11">Pending</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Completed </CardTitle>
                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "60px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                                <label className="custom-control-label" htmlFor="customCheck6"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Redesign - Landing page</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar6} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            F
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck7" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="customCheck7" onClick={() => { this.setState({ chk3: !this.state.chk3 }) }}></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Multipurpose Landing</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                <label className="custom-control-label" htmlFor="customCheck8"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Blog Template UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            S
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar2} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={4}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Tasks </CardTitle>
                                        <Apaexlinecolumn />
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Recent Tasks </CardTitle>

                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Brand logo design</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Blog Template UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            S
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar8} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Redesign - Landing page</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

export default TasksList;
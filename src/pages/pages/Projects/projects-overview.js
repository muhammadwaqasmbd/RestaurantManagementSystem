import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Image
import img1 from "../../assets/images/companies/img-1.png";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";

class ProjectsOverview extends Component {
    constructor() {
        super();
        this.state = {
            members: [
                {
                    id: 1, img: avatar2, name: "Daniel Canales",
                    skills: [
                        { id: 1, name: "Frontend" },
                        { id: 2, name: "UI" },
                    ]
                },
                {
                    id: 2, img: avatar1, name: "Jennifer Walker",
                    skills: [
                        { id: 1, name: "UI/UX" }
                    ]
                },
                {
                    id: 3, img: "Null", name: "Carl Mackay",
                    skills: [
                        { id: 1, name: "Backend" }
                    ]
                },
                {
                    id: 4, img: avatar4, name: "Janice Cole",
                    skills: [
                        { id: 1, name: "Frontend" },
                        { id: 2, name: "UI" },
                    ]
                },
                {
                    id: 5, img: "Null", name: "Tony Brafford",
                    skills: [
                        { id: 1, name: "Backend" }
                    ]
                },
            ],
            files: [
                { name: "Skote Landing.Zip", size: "3.25 MB", link: "" },
                { name: "Skote Admin.Zip", size: "3.15 MB", link: "" },
                { name: "Skote Logo.Zip", size: "2.02 MB", link: "" },
                { name: "Veltrix admin.Zip", size: "2.25 MB", link: "" },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Projects" breadcrumbItem="Projects Overview" />

                        <Row>
                            <Col lg="8">
                                <Card>
                                    <CardBody>
                                        <Media>
                                            <img src={img1} alt="" className="avatar-sm mr-4" />

                                            <Media className="overflow-hidden" body>
                                                <h5 className="text-truncate font-size-15">Skote Dashboard UI</h5>
                                                <p className="text-muted">Separate existence is a myth. For science, music, sport, etc.</p>
                                            </Media>
                                        </Media>

                                        <h5 className="font-size-15 mt-4">Project Details :</h5>

                                        <p className="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,</p>

                                        <div className="text-muted mt-4">
                                            <p><i className="mdi mdi-chevron-right text-primary mr-1"></i> To achieve this, it would be necessary</p>
                                            <p><i className="mdi mdi-chevron-right text-primary mr-1"></i> Separate existence is a myth.</p>
                                            <p><i className="mdi mdi-chevron-right text-primary mr-1"></i> If several languages coalesce</p>
                                        </div>

                                        <Row className="task-dates">
                                            <Col sm="6" xs="6">
                                                <div className="mt-4">
                                                    <h5 className="font-size-14"><i className="bx bx-calendar mr-1 text-primary"></i> Start Date</h5>
                                                    <p className="text-muted mb-0">08 Sept, 2019</p>
                                                </div>
                                            </Col>

                                            <Col sm="6" xs="6">
                                                <div className="mt-4">
                                                    <h5 className="font-size-14"><i className="bx bx-calendar-check mr-1 text-primary"></i> Due Date</h5>
                                                    <p className="text-muted mb-0">12 Oct, 2019</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Team Members</CardTitle>

                                        <div className="table-responsive">
                                            <Table className="table table-centered table-nowrap">
                                                <tbody>
                                                    {
                                                        this.state.members.map((member) =>
                                                            <tr>
                                                                <td style={{ width: "50px" }}>
                                                                    {
                                                                        member.img !== "Null"
                                                                            ? <img src={member.img} className="rounded-circle avatar-xs" alt="" />
                                                                            : <div className="avatar-xs">
                                                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                                                    {member.name.charAt(0)}
                                                                                </span>
                                                                            </div>
                                                                    }
                                                                </td>
                                                                <td><h5 className="font-size-14 m-0"><Link to="" className="text-dark">{member.name}</Link></h5></td>
                                                                <td>
                                                                    <div>
                                                                        {
                                                                            member.skills.map((skill) =>
                                                                                <Link to="#" className="badge badge-primary font-size-11">{skill.name}</Link>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Overview</CardTitle>

                                        <div id="overview-chart" className="apex-charts" dir="ltr">

                                            {/* Apex Charts */}

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Attached Files</CardTitle>
                                        <div className="table-responsive">
                                            <Table className="table table-nowrap table-centered table-hover mb-0">
                                                <tbody>
                                                    {
                                                        this.state.files.map((file) =>
                                                            <tr>
                                                                <td style={{ width: "45px" }}>
                                                                    <div className="avatar-sm">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-24">
                                                                            <i className="bx bxs-file-doc"></i>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{file.name}</Link></h5>
                                                                    <small>Size : {file.size}</small>
                                                                </td>
                                                                <td>
                                                                    <div className="text-center">
                                                                        <Link to={file.link} className="text-dark"><i className="bx bx-download h3 m-0"></i></Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Comments</CardTitle>

                                        <Media className="mb-4">
                                            <div className="mr-3">
                                                <img className="media-object rounded-circle avatar-xs" alt="" src={avatar2} />
                                            </div>
                                            <Media body>
                                                <h5 className="font-size-13 mb-1">David Lambert</h5>
                                                <p className="text-muted mb-1">
                                                    Separate existence is a myth.
                                                </p>
                                            </Media>
                                            <div className="ml-3">
                                                <Link to="#" className="text-primary">Reply</Link>
                                            </div>
                                        </Media>

                                        <Media className="mb-4">
                                            <div className="mr-3">
                                                <img className="media-object rounded-circle avatar-xs" alt="" src={avatar3} />
                                            </div>
                                            <Media body>
                                                <h5 className="font-size-13 mb-1">Steve Foster</h5>
                                                <p className="text-muted mb-1">
                                                    <Link to="" className="text-success">@Henry</Link>
                                                    To an English person it will like simplified
                                                </p>
                                                <Media className="mt-3">
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                            J
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-13 mb-1">Jeffrey Walker</h5>
                                                        <p className="text-muted mb-1">
                                                            as a skeptical Cambridge friend
                                                        </p>
                                                    </Media>
                                                    <div className="ml-3">
                                                        <Link to="" className="text-primary">Reply</Link>
                                                    </div>
                                                </Media>
                                            </Media>
                                            <div className="ml-3">
                                                <Link to="" className="text-primary">Reply</Link>
                                            </div>
                                        </Media>

                                        <Media className="mb-4">
                                            <div className="avatar-xs mr-3">
                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                    S
                                                </span>
                                            </div>
                                            <Media body>
                                                <h5 className="font-size-13 mb-1">Steven Carlson</h5>
                                                <p className="text-muted mb-1">
                                                    Separate existence is a myth.
                                                </p>
                                            </Media>
                                            <div className="ml-3">
                                                <Link to="" className="text-primary">Reply</Link>
                                            </div>
                                        </Media>

                                        <div className="text-center mt-4 pt-2">
                                            <Link to="#" className="btn btn-primary btn-sm">View more</Link>
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

export default ProjectsOverview;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


//Import Image
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";
import img4 from "../../assets/images/companies/img-4.png";
import img5 from "../../assets/images/companies/img-5.png";
import img6 from "../../assets/images/companies/img-6.png";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

class ProjectsList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Projects" breadcrumbItem="Projects List" />

                        <Row>
                            <Col lg="12">
                                <div className="">
                                    <div className="table-responsive">
                                        <Table className="project-list-table table-nowrap table-centered table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: "100px" }}>#</th>
                                                    <th scope="col">Projects</th>
                                                    <th scope="col">Due Date</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Team</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img src={img1} alt="" className="avatar-sm" /></td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14"><Link to="#" className="text-dark">New admin Design</Link></h5>
                                                        <p className="text-muted mb-0">It will be as simple as Occidental</p>
                                                    </td>
                                                    <td>15 Oct, 19</td>
                                                    <td><span className="badge badge-primary">Completed</span></td>
                                                    <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member1">
                                                                <img src={avatar2} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member1">
                                                                    Daniel Canales
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                            <Link to="#" className="team-member d-inline-block" id="member2">
                                                                <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member2">
                                                                    Jennifer Walker
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle href="#" className="card-drop" tag="i">
                                                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={img2} alt="" className="avatar-sm" /></td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14"><Link to="#" className="text-dark">Brand logo design</Link></h5>
                                                        <p className="text-muted mb-0">To achieve it would be necessary</p>
                                                    </td>
                                                    <td>22 Oct, 19</td>
                                                    <td><span className="badge badge-warning">Pending</span></td>
                                                    <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member3">
                                                                <img src={avatar3} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member3">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle href="#" className="card-drop" tag="i">
                                                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={img3} alt="" className="avatar-sm" /></td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14"><Link to="#" className="text-dark">New Landing Design</Link></h5>
                                                        <p className="text-muted mb-0">For science, music, sport, etc</p>
                                                    </td>
                                                    <td>13 Oct, 19</td>
                                                    <td><span className="badge badge-danger">Delay</span></td>
                                                    <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member4">
                                                                <img src={avatar5} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member4">
                                                                    Natalie Salerno
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                            <Link to="#" className="team-member d-inline-block" id="member5">
                                                                <div className="avatar-xs m-1">
                                                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                                        A
                                                                    </span>
                                                                </div>
                                                                <UncontrolledTooltip placement="top" target="member5">
                                                                    Natalie Salerno
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                            <Link to="#" className="team-member d-inline-block" id="member6">
                                                                <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member6">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle href="#" className="card-drop" tag="i">
                                                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><img src={img4} alt="" className="avatar-sm" /></td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14"><Link to="#" className="text-dark">Redesign - Landing page</Link></h5>
                                                        <p className="text-muted mb-0">If several languages coalesce</p>
                                                    </td>
                                                    <td>14 Oct, 19</td>
                                                    <td><span className="badge badge-primary">Completed</span></td>
                                                    <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member7">
                                                                <img src={avatar6} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member7">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                            <Link to="#" className="team-member d-inline-block" id="member8">
                                                                <div className="avatar-xs m-1">
                                                                    <span className="avatar-title rounded-circle bg-soft-success text-success font-size-16">
                                                                        D
                                                                    </span>
                                                                    <UncontrolledTooltip placement="top" target="member8">
                                                                        David Conyers
                                                                    </UncontrolledTooltip>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle href="#" className="card-drop" tag="i">
                                                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={img5} alt="" className="avatar-sm" /></td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14"><Link to="#" className="text-dark">Skote Dashboard UI</Link></h5>
                                                        <p className="text-muted mb-0">Separate existence is a myth</p>
                                                    </td>
                                                    <td>22 Oct, 19</td>
                                                    <td><span className="badge badge-primary">Completed</span></td>
                                                    <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member9">
                                                                <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member9">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                            <Link to="#" className="team-member d-inline-block" id="member10">
                                                                <img src={avatar8} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member10">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle href="#" className="card-drop" tag="i">
                                                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={img6} alt="" className="avatar-sm" /></td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14"><Link to="#" className="text-dark">Blog Template UI</Link></h5>
                                                        <p className="text-muted mb-0">For science, music, sport, etc</p>
                                                    </td>
                                                    <td>24 Oct, 19</td>
                                                    <td><span className="badge badge-warning">pending</span></td>
                                                    <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member11" >
                                                                <div className="avatar-xs m-1">
                                                                    <span className="avatar-title rounded-circle bg-soft-danger text-danger font-size-16">
                                                                        K
                                                                    </span>
                                                                    <UncontrolledTooltip placement="top" target="member11">
                                                                        Kenneth Johnson
                                                                    </UncontrolledTooltip>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle href="#" className="card-drop" tag="i">
                                                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><img src={img3} alt="" className="avatar-sm" /></td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14"><Link to="#" className="text-dark">Multipurpose Landing</Link></h5>
                                                        <p className="text-muted mb-0">It will be as simple as Occidental</p>
                                                    </td>
                                                    <td>15 Oct, 19</td>
                                                    <td><span className="badge badge-danger">Delay</span></td>
                                                    <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member12">
                                                                <img src={avatar3} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member12">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle href="#" className="card-drop" tag="i">
                                                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12">
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success"><i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i> Load more </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectsList;
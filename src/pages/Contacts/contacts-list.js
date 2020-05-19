import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

class ContactsList extends Component {
    state = {
        users: [
            {
                id: 1, img: "Null", name: "David McHenry", designation: "UI/UX Designer", email: "david@skote.com", projects: "125",
                skills: [
                    { name: "Photoshop" },
                    { name: "illustrator" }
                ]
            },
            {
                id: 2, img: avatar2, name: "Frank Kirk", designation: "Frontend Developer", email: "frank@skote.com", projects: "132",
                skills: [
                    { name: "Html" },
                    { name: "Css" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 3, img: avatar3, name: "Rafael Morales", designation: "Backend Developer", email: "Rafael@skote.com", projects: "1112",
                skills: [
                    { name: "Php" },
                    { name: "Java" },
                    { name: "Python" },
                ]
            },
            {
                id: 4, img: "Null", name: "Mark Ellison", designation: "Full Stack Developer", email: "mark@skote.com", projects: "121",
                skills: [
                    { name: "Ruby" },
                    { name: "Php" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 5, img: avatar4, name: "Minnie Walter", designation: "Frontend Developer", email: "minnie@skote.com", projects: "145",
                skills: [
                    { name: "Html" },
                    { name: "Css" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 6, img: avatar5, name: "Shirley Smith", designation: "UI/UX Designer", email: "shirley@skote.com", projects: "136",
                skills: [
                    { name: "Photoshop" },
                    { name: "UI/UX Designer" }
                ]
            },
            {
                id: 7, img: "Null", name: "John Santiago", designation: "Full Stack Developer", email: "john@skote.com", projects: "125",
                skills: [
                    { name: "Ruby" },
                    { name: "Php" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 8, img: avatar7, name: "Colin Melton", designation: "Backend Developer", email: "colin@skote.com", projects: "136",
                skills: [
                    { name: "Php" },
                    { name: "Java" },
                    { name: "Python" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Contacts" breadcrumbItem="Users List" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <div className="table-responsive">
                                            <Table className="table-centered table-nowrap table-hover">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "70px" }}>#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Tags</th>
                                                        <th scope="col">Projects</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.users.map((user, i) =>
                                                            <tr key={"_user_" + i} >
                                                                <td>
                                                                    {
                                                                        user.img === "Null"
                                                                            ? <div className="avatar-xs">
                                                                                <span className="avatar-title rounded-circle">
                                                                                    {user.name.charAt(0)}
                                                                                </span>
                                                                            </div>
                                                                            : <div>
                                                                                <img className="rounded-circle avatar-xs" src={user.img} alt="" />
                                                                            </div>
                                                                    }

                                                                </td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{user.name}</Link></h5>
                                                                    <p className="text-muted mb-0">{user.designation}</p>
                                                                </td>
                                                                <td>{user.email}</td>
                                                                <td>
                                                                    <div>
                                                                        {
                                                                            user.skills.map((skill, key) =>
                                                                                <Link to="#" className="badge badge-soft-primary font-size-11 m-1" key={"_skill_" + key}>{skill.name}</Link>
                                                                            )
                                                                        }

                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {user.projects}
                                                                </td>
                                                                <td>
                                                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                                                        <li className="list-inline-item px-2">
                                                                            <Link to="#" id={"message" + user.id}>
                                                                                <i className="bx bx-message-square-dots"></i>
                                                                                <UncontrolledTooltip placement="top" target={"message" + user.id}>
                                                                                    Message
                                                                                </UncontrolledTooltip>
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item px-2">
                                                                            <Link to="#" id={"profile" + user.id}>
                                                                                <i className="bx bx-user-circle"></i>
                                                                                <UncontrolledTooltip placement="top" target={"profile" + user.id}>
                                                                                    Profile
                                                                                </UncontrolledTooltip>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                </tbody>
                                            </Table>
                                        </div>
                                        <Row>
                                            <Col lg="12">
                                                <Pagination className="pagination pagination-rounded justify-content-center mt-4">
                                                    <PaginationItem disabled>
                                                        <PaginationLink previous href="#" />
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            1
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem active>
                                                        <PaginationLink href="#">
                                                            2
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            3
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            4
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            5
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink next href="#" />
                                                    </PaginationItem>
                                                </Pagination>
                                            </Col>
                                        </Row>
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

export default ContactsList;
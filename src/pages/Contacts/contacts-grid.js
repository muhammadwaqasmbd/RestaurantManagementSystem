import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Card
import CardContact from "./card-contact";

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

class ContactsGrid extends Component {
    state = {
        users: [
            {
                id: 1, img: "Null", name: "David McHenry", designation: "UI/UX Designer", color: "primary",
                skills: [
                    { name: "Photoshop" },
                    { name: "illustrator" }
                ]
            },
            {
                id: 2, img: avatar2, name: "Frank Kirk", designation: "Frontend Developer",
                skills: [
                    { name: "Html" },
                    { name: "Css" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 3, img: avatar3, name: "Rafael Morales", designation: "Backend Developer",
                skills: [
                    { name: "Php" },
                    { name: "Java" },
                    { name: "Python" },
                ]
            },
            {
                id: 4, img: "Null", name: "Mark Ellison", designation: "Full Stack Developer", color: "success",
                skills: [
                    { name: "Ruby" },
                    { name: "Php" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 5, img: avatar4, name: "Minnie Walter", designation: "Frontend Developer",
                skills: [
                    { name: "Html" },
                    { name: "Css" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 6, img: avatar5, name: "Shirley Smith", designation: "UI/UX Designer",
                skills: [
                    { name: "Photoshop" },
                    { name: "UI/UX Designer" }
                ]
            },
            {
                id: 7, img: "Null", name: "John Santiago", designation: "Full Stack Developer", color: "info",
                skills: [
                    { name: "Ruby" },
                    { name: "Php" },
                    { name: "2 + more" },
                ]
            },
            {
                id: 8, img: avatar7, name: "Colin Melton", designation: "Backend Developer", color: "",
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
                        <Breadcrumbs title="Contacts" breadcrumbItem="Users Grid" />

                        <Row>
                            {
                                this.state.users.map((user, key) =>
                                    <CardContact user={user} key={"_user_" + key} />
                                )
                            }

                        </Row>

                        <Row>
                            <Col xs="12">
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success"><i className="bx bx-hourglass bx-spin mr-2"></i> Load more </Link>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactsGrid;
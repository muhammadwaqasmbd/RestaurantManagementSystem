import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, Table, Input, Form, FormGroup, Label, Button, Badge } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Task Cards
import CardTasks from "./card-tasks";

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

class TasksList extends Component {
    state = {
        tasksUpcoming: [
            {
                id: 1, title: "Create a Skote Dashboard UI", tastStatus: "Waiting", color: "secondary",
                teamMembers: [
                    { id: 1, image: avatar2 },
                    { id: 2, image: avatar1 },
                ]
            },
            {
                id: 2, title: "Create a New Landing UI", tastStatus: "Approved", color: "primary", isChecked: true,
                teamMembers: [
                    { id: 1, image: avatar2 },
                    { id: 2, image: avatar1 },
                    { id: 2, image: "Null", imgText: "3 +" },
                ]
            },
            {
                id: 3, title: "Create a Skote Logo", tastStatus: "Waiting", color: "secondary",
                teamMembers: [
                    { id: 1, image: "Null", imgText: "F", },
                ]
            },
        ],

        tasksInProgress: [
            {
                id: 1, title: "Brand logo design", tastStatus: "Complete", color: "success", isChecked: true,
                teamMembers: [
                    { id: 1, image: avatar2 },
                ]
            },
            {
                id: 2, title: "Create a Blog Template UI", tastStatus: "Pending", color: "warning",
                teamMembers: [
                    { id: 1, image: "Null", imgText: "S" },
                    { id: 2, image: avatar2 },
                    { id: 3, image: avatar1 },
                ]
            },
        ],

        tasksCompleted: [
            {
                id: 1, title: "Redesign - Landing page", tastStatus: "Complete", color: "success",
                teamMembers: [
                    { id: 1, image: avatar2 },
                    { id: 2, image: "Null", imgText: "F", },
                ]
            },
            {
                id: 2, title: "Multipurpose Landing", tastStatus: "Complete", color: "success", isChecked: true,
                teamMembers: [
                    { id: 1, image: avatar2 },
                ]
            },
            {
                id: 3, title: "Create a Blog Template UI", tastStatus: "Complete", color: "success",
                teamMembers: [
                    { id: 1, image: avatar1 },
                    { id: 2, image: "Null", imgText: "S", },
                    { id: 3, image: avatar2 },
                ]
            },
        ],

        tasksRecent: [
            {
                id: 1, title: "Brand logo design",
                teamMembers: [
                    { id: 1, image: avatar7 },
                ]
            },
            {
                id: 2, title: "Create a Blog Template UI",
                teamMembers: [
                    { id: 1, image: "Null", imgText: "S", },
                    { id: 2, image: avatar8 },
                    { id: 3, image: avatar1 },
                ]
            },
            {
                id: 3, title: "Redesign - Landing page",
                teamMembers: [
                    { id: 1, image: avatar7 },
                    { id: 2, image: avatar4 },
                ]
            },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Tasks" breadcrumbItem="Task List" />

                        <Row>
                            <Col lg="8">
                                {/* Render Upcoming Card */}
                                <CardTasks taskTitle="Upcoming" data={this.state.tasksUpcoming} />

                                {/* Render In Progress Card */}
                                <CardTasks taskTitle="In Progress" data={this.state.tasksInProgress} />

                                {/* Render Completed Card */}
                                <CardTasks taskTitle="Completed" data={this.state.tasksCompleted} />
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-3">Tasks</CardTitle>
                                        <div id="task-chart" className="apex-charts">

                                            {/* Apex Chats Here */}

                                        </div>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Recent Tasks</CardTitle>

                                        <div className="table-responsive">
                                            <Table className="table-nowrap table-centered mb-0">
                                                <tbody>
                                                    {
                                                        this.state.tasksRecent.map((task) =>
                                                            <tr>
                                                                <td>
                                                                    <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">{task.title}</Link></h5>
                                                                </td>
                                                                <td>
                                                                    <div className="team">
                                                                        {
                                                                            task.teamMembers.map((member) =>

                                                                                member.image !== "Null"
                                                                                    ? <Link to="javascript: void(0);" className="team-member d-inline-block">
                                                                                        <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                                    </Link>
                                                                                    : <Link to="javascript: void(0);" className="team-member d-inline-block">
                                                                                        <div className="avatar-xs">
                                                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                                S
                                                                                        </span>
                                                                                        </div>
                                                                                    </Link>
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

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default TasksList;
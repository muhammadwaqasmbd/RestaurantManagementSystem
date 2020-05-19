import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Card, CardBody, CardFooter, UncontrolledTooltip } from "reactstrap";

class CardContact extends Component {

    render() {
        const user = this.props.user;
        return (
            <React.Fragment>
                <Col xl="3" sm="6">
                    <Card className="text-center">
                        <CardBody>
                            {
                                user.img === "Null" ?
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className={"avatar-title rounded-circle bg-soft-" + user.color + " text-" + user.color + " font-size-16"}>
                                            {user.name.charAt(0)}
                                        </span>
                                    </div>
                                    :
                                    <div className="mb-4">
                                        <img className="rounded-circle avatar-sm" src={user.img} alt="" />
                                    </div>
                            }

                            <h5 className="font-size-15"><Link to="#" className="text-dark">{user.name}</Link></h5>
                            <p className="text-muted">{user.designation}</p>

                            <div>
                                {
                                    this.props.user.skills.map((skill, key) =>
                                        <Link to="#" className="badge badge-primary font-size-11 m-1" key={"_skill_" + key}>
                                            {skill.name}
                                        </Link>
                                    )
                                }
                            </div>
                        </CardBody>
                        <CardFooter className="bg-transparent border-top">
                            <div className="contact-links d-flex font-size-20">
                                <div className="flex-fill">
                                    <Link to="" id={"message" + user.id}>
                                        <i className="bx bx-message-square-dots"></i>
                                        <UncontrolledTooltip placement="top" target={"message" + user.id}>
                                            Message
                                                </UncontrolledTooltip>
                                    </Link>
                                </div>
                                <div className="flex-fill">
                                    <Link to="" id={"project" + user.id}>
                                        <i className="bx bx-pie-chart-alt"></i>
                                        <UncontrolledTooltip placement="top" target={"project" + user.id}>
                                            Projects
                                                </UncontrolledTooltip>
                                    </Link>
                                </div>
                                <div className="flex-fill">
                                    <Link to="" id={"profile" + user.id}>
                                        <i className="bx bx-user-circle"></i>
                                        <UncontrolledTooltip placement="top" target={"profile" + user.id}>
                                            Profile
                                                </UncontrolledTooltip>
                                    </Link>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default CardContact;
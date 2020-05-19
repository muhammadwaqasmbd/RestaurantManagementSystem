import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, Badge } from "reactstrap";
import { moveCard } from "@lourenci/react-kanban";

//Import Images
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

class CardTaskBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Card className="task-box" dragging={this.props.dragging}>
                    <CardBody>
                        <div className="float-right ml-2">
                            <Badge color="secondary" className="badge-soft-secondary font-size-12" pill>Waiting</Badge>
                        </div>
                        <div>
                            <h5 className="font-size-15"><Link to="javascript: void(0);" className="text-dark">Topnav layout design</Link></h5>
                            <p className="text-muted mb-4">14 Oct, 2019</p>
                        </div>

                        <div className="team float-left">
                            <Link to="javascript: void(0);" className="team-member d-inline-block">
                                <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                            </Link>

                            <Link to="javascript: void(0);" className="team-member d-inline-block">
                                <img src={avatar5} className="rounded-circle avatar-xs m-1" alt="" />
                            </Link>

                            <Link to="javascript: void(0);" className="team-member d-inline-block">
                                <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        3 +
                                                                </span>
                                </div>
                            </Link>
                        </div>

                        <div className="text-right">
                            <h5 className="font-size-15 mb-1">$ 145</h5>
                            <p className="mb-0 text-muted">Budget</p>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default CardTaskBox;
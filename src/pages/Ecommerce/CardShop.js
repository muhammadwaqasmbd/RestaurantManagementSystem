import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";

class CardShop extends Component {


    render() {
        const name = this.props.shop.name;
        const nameIcon = name.charAt(0);
        return (
            <React.Fragment>
                <Col xl="4" sm="6">
                    <Card>
                        <Row>
                            <Col lx="5">
                                <div className="text-center p-4 border-right">
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className={"avatar-title rounded-circle bg-soft-" + this.props.shop.color + " primary text-" + this.props.shop.color + " font-size-16"}>
                                            {nameIcon}
                                        </span>
                                    </div>
                                    <h5 className="text-truncate">{this.props.shop.name}</h5>
                                </div>
                            </Col>

                            <Col xl="7">
                                <div className="p-4 text-center text-xl-left">
                                    <Row>
                                        <Col md="6">
                                            <div>
                                                <p className="text-muted mb-2 text-truncate">Products</p>
                                                <h5>{this.props.shop.product}</h5>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div>
                                                <p className="text-muted mb-2 text-truncate">Wallet Balance</p>
                                                <h5>${this.props.shop.balance}</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-4">
                                        <Link to="#">See profile</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default CardShop;
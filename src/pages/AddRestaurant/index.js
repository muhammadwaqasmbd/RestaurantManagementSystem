import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import Restaurant from "./Restaurant";
import Printer from "./Printer";
import Untill from "./Untill";
import { Route, Redirect } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Row>
                            <Col lg="4">
                                <Restaurant id = {this.props.match.params.id} />
                            </Col>
                            <Col lg="4">
                                <Printer id = {this.props.match.params.id} />
                            </Col>
                            <Col lg="4">
                                <Untill id = {this.props.match.params.id} />
                            </Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default Dashboard;

import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import Menus from "./Categories";

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
                            <Col lg="12">
                                <Menus />
                            </Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default Dashboard;

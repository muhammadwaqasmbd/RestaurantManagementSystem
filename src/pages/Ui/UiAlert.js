import React, { Component } from "react";

import { Alert, Col, Row, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class UiAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="UI Elements" breadcrumbItem="Alerts" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Examples </CardTitle>
                    <CardSubtitle className="mb-3">
                      Alerts are available for any length of text, as well as an
                      optional dismiss button. For proper styling, for Example,{" "}
                      <strong>color = </strong>{" "}
                      <code className="highlighter-rouge">"success"</code>
                    </CardSubtitle>

                    <div className="">
                      <Alert color="success">
                        <strong>Well done!</strong> You successfully read this
                        important alert message.
                      </Alert>

                      <Alert color="info">
                        <strong>Heads up!</strong> This alert needs your
                        attention, but it's not super important.
                      </Alert>

                      <Alert color="warning">
                        <strong>Warning!</strong> Better check yourself, you're
                        not looking too good.
                      </Alert>

                      <Alert color="danger" className="mb-0">
                        <strong>Oh snap!</strong> Change a few things up and try
                        submitting again.
                      </Alert>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Link color </CardTitle>
                    <CardSubtitle className="mb-3">
                      Use the{" "}
                      <code className="highlighter-rouge">.alert-link</code>{" "}
                      utility className to quickly provide matching colored
                      links within any alert.
                    </CardSubtitle>

                    <div className="">
                      <Alert color="success">
                        <strong>Well done!</strong> You successfully read{" "}
                        <Link to="#" className="alert-link">
                          this important alert message
                        </Link>
                        .
                      </Alert>
                      <Alert color="info">
                        <strong>Heads up!</strong> This{" "}
                        <Link to="#" className="alert-link">
                          alert needs your attention
                        </Link>
                        , but it's not super important.
                      </Alert>
                      <Alert color="warning">
                        <strong>Warning!</strong> Better check yourself, you're{" "}
                        <Link to="#" className="alert-link">
                          not looking too good
                        </Link>
                        .
                      </Alert>
                      <Alert color="danger" className="mb-0">
                        <strong>Oh snap!</strong>{" "}
                        <Link to="#" className="alert-link">
                          Change a few things up
                        </Link>{" "}
                        and try submitting again.
                      </Alert>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Dismissing </CardTitle>
                    <CardSubtitle className="mb-3">
                      You can see this in action with a live demo:
                    </CardSubtitle>

                    <div className="">
                      <Alert
                        color="success"
                        isOpen={this.state.alert1}
                        toggle={() =>
                          this.setState({ alert1: !this.state.alert1 })
                        }
                      >
                        <strong>Well done!</strong> You successfully read this
                        important alert message.
                      </Alert>

                      <Alert
                        color="info"
                        isOpen={this.state.alert2}
                        toggle={() =>
                          this.setState({ alert2: !this.state.alert2 })
                        }
                      >
                        <strong>Heads up!</strong> This alert needs your
                        attention, but it's not super important.
                      </Alert>

                      <Alert
                        color="warning"
                        isOpen={this.state.alert3}
                        toggle={() =>
                          this.setState({ alert3: !this.state.alert3 })
                        }
                      >
                        <strong>Warning!</strong> Better check yourself, you're
                        not looking too good.
                      </Alert>

                      <Alert
                        color="danger"
                        className="mb-0"
                        isOpen={this.state.alert4}
                        toggle={() =>
                          this.setState({ alert4: !this.state.alert4 })
                        }
                      >
                        <strong>Oh snap!</strong> Change a few things up and try
                        submitting again.
                      </Alert>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">With Icon </CardTitle>
                    <div>
                      <Alert
                        color="success"
                        isOpen={this.state.alert11}
                        toggle={() =>
                          this.setState({ alert11: !this.state.alert11 })
                        }
                      >
                        <strong>Well done!</strong> You successfully read this
                        important alert message.
                      </Alert>

                      <Alert
                        color="info"
                        isOpen={this.state.alert22}
                        toggle={() =>
                          this.setState({ alert22: !this.state.alert22 })
                        }
                      >
                        <strong>Heads up!</strong> This alert needs your
                        attention, but it's not super important.
                      </Alert>

                      <Alert
                        color="warning"
                        isOpen={this.state.alert33}
                        toggle={() =>
                          this.setState({ alert33: !this.state.alert33 })
                        }
                      >
                        <strong>Warning!</strong> Better check yourself, you're
                        not looking too good.
                      </Alert>

                      <Alert
                        color="danger"
                        className="mb-0"
                        isOpen={this.state.alert44}
                        toggle={() =>
                          this.setState({ alert44: !this.state.alert44 })
                        }
                      >
                        <strong>Oh snap!</strong> Change a few things up and try
                        submitting again.
                      </Alert>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UiAlert;

import React, { Component } from "react";
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, CardTitle } from "reactstrap";

import Breadcrumbs from '../../components/Common/Breadcrumb';


class FormRepeater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      rows1: []
    };
  }
  handleAddRow = () => {
    const item = {
      name: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };

  handleAddRowNested = () => {
    const item1 = {
      name1: ""
    };
    this.setState({
      rows1: [...this.state.rows1, item1]
    });
  };
  handleRemoveRow = (e, idx) => {
    document.getElementById("addr" + idx).style.display = "none";
  };
  handleRemoveRowNested = (e, idx) => {
    document.getElementById("nested" + idx).style.display = "none";
  };
  render() {

    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">


            <Breadcrumbs title="Form" breadcrumbItem="Form Repeater" />


            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <CardTitle>Example</CardTitle>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr id="addr0" key="">
                          <td>
                            <Form
                              className="repeater"
                              encType="multipart/form-data"
                            >
                              <div data-repeater-list="group-a">
                                <Row data-repeater-item>
                                  <Col lg="2" className="form-group">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                      type="text"
                                      id="name"
                                      name="untyped-input"
                                    />
                                  </Col>

                                  <Col lg="2" className="form-group">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" />
                                  </Col>

                                  <Col lg="2" className="form-group">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input type="text" id="subject" />
                                  </Col>

                                  <Col lg="2" className="form-group">
                                    <Label htmlFor="resume">Resume</Label>
                                    <Input type="file" id="resume" />
                                  </Col>

                                  <Col lg="2" className="form-group">
                                    <Label htmlFor="message">Message</Label>
                                    <Input type="textarea" id="message" />
                                  </Col>
                                  <Col
                                    lg="2"
                                    className="form-group align-self-center"
                                  >
                                    <Button
                                      onClick={this.handleRemoveRow}
                                      color="primary"
                                      className="mt-3"
                                      style={{ width: "100%" }}
                                    >
                                      {" "}
                                    Delete{" "}
                                    </Button>
                                  </Col>
                                </Row>
                              </div>
                            </Form>
                          </td>
                        </tr>

                        {this.state.rows.map((item, idx) => (
                          <tr id={"addr" + idx} key={idx}>
                            <td>
                              <Form
                                className="repeater"
                                encType="multipart/form-data"
                              >
                                <div data-repeater-list="group-a">
                                  <Row data-repeater-item>
                                    <Col lg="2" className="form-group">
                                      <Label htmlFor="name">Name {idx + 1}</Label>
                                      <Input
                                        type="text"
                                        id="name"
                                        name="untyped-input"
                                      />
                                    </Col>

                                    <Col lg="2" className="form-group">
                                      <Label htmlFor="email">Email</Label>
                                      <Input type="email" id="email" />
                                    </Col>

                                    <Col lg="2" className="form-group">
                                      <Label htmlFor="subject">Subject</Label>
                                      <Input type="text" id="subject" />
                                    </Col>

                                    <Col lg="2" className="form-group">
                                      <Label htmlFor="resume">Resume</Label>
                                      <Input type="file" id="resume" />
                                    </Col>

                                    <Col lg="2" className="form-group">
                                      <Label htmlFor="message">Message</Label>
                                      <Input type="textarea" id="message" />
                                    </Col>
                                    <Col
                                      lg="2"
                                      className="form-group align-self-center"
                                    >
                                      <Button
                                        onClick={e =>
                                          this.handleRemoveRow(e, idx)
                                        }
                                        color="primary"
                                        className="mt-3"
                                        style={{ width: "100%" }}
                                      >
                                        {" "}
                                      Delete{" "}
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              </Form>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <Button onClick={this.handleAddRow} color="success">
                      Add{" "}
                    </Button>{" "}
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle>Nested</CardTitle>
                    <Form className="outer-repeater">
                      <div data-repeater-list="outer-group" className="outer">
                        <div data-repeater-item className="outer">
                          <div className="form-group">
                            <Label htmlFor="formname">Name : </Label>
                            <Input
                              type="text"
                              id="formname"
                              placeholder="Enter your Name..."
                            />
                          </div>

                          <div className="form-group">
                            <Label htmlFor="formemail">Email :</Label>
                            <Input
                              type="email"
                              id="formemail"
                              placeholder="Enter your Email..."
                            />
                          </div>

                          <div className="inner-repeater mb-4">
                            <Label>Phone no :</Label>
                            <table style={{ width: "100%" }}>
                              <tbody>
                                <tr id="addrMain" key="">
                                  <td>
                                    <Row className="mb-2">
                                      <Col md="10">
                                        <Input
                                          type="text"
                                          className="inner form-control"
                                          placeholder="Enter your phone no... 1"
                                        />
                                      </Col>
                                      <Col md="2">
                                        <Button
                                          onClick={this.handleRemoveRow1}
                                          color="primary"
                                          className="btn-block inner"
                                          style={{ width: "100%" }}
                                        >
                                          {" "}
                                        Delete{" "}
                                        </Button>
                                      </Col>
                                    </Row>
                                  </td>
                                </tr>

                                {this.state.rows1.map((item1, idx) => (
                                  <tr id={"nested" + idx} key={idx}>
                                    <td>
                                      <Row className="mb-2">
                                        <Col md="10">
                                          <Input
                                            type="text"
                                            className="inner form-control"
                                            placeholder={
                                              "Enter your phone no... " +
                                              (idx + 2)
                                            }
                                          />
                                        </Col>
                                        <Col md="2">
                                          <Button
                                            onClick={e =>
                                              this.handleRemoveRowNested(e, idx)
                                            }
                                            color="primary"
                                            className="btn-block inner"
                                            style={{ width: "100%" }}
                                          >
                                            {" "}
                                          Delete{" "}
                                          </Button>
                                        </Col>
                                      </Row>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <Button
                              onClick={this.handleAddRowNested}
                              color="success"
                              className="mt-1"
                            >
                              Add Number
                          </Button>
                          </div>

                          <FormGroup>
                            <Label className="d-block mb-3">Gender :</Label>
                            <div className="custom-control custom-radio custom-control-inline">
                              <Input
                                type="radio"
                                id="customRadioInline1"
                                name="customRadioInline1"
                                className="custom-control-input"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customRadioInline1"
                              >
                                Male
                            </Label>
                            </div>
                          &nbsp;
                          <div className="custom-control custom-radio custom-control-inline">
                              <Input
                                type="radio"
                                id="customRadioInline2"
                                name="customRadioInline1"
                                className="custom-control-input"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customRadioInline2"
                              >
                                Female
                            </Label>
                            </div>
                          </FormGroup>

                          <FormGroup>
                            <Label htmlFor="formmessage">Message :</Label>
                            <Input
                              type="textarea"
                              id="formmessage"
                              className="form-control"
                              rows="3"
                            />
                          </FormGroup>
                          <Button type="submit" color="primary">
                            Submit
                        </Button>
                        </div>
                      </div>
                    </Form>
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

export default FormRepeater;

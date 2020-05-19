import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FormElements extends Component {
    constructor(props) {
        super(props);
        this.state = { customchk: true, toggleSwitch: true };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />

                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Textual inputs</CardTitle>
                                        <CardSubtitle className="mb-3">Here are examples of <code>.form-control</code> applied to each
                                            textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</CardSubtitle>

                                        <div className="form-group row">
                                            <label htmlFor="example-text-input" className="col-md-2 col-form-label">Text</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="text" defaultValue="Artisanal kale" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-search-input" className="col-md-2 col-form-label">Search</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="search" defaultValue="How do I shoot web" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-email-input" className="col-md-2 col-form-label">Email</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="email" defaultValue="bootstrap@example.com" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-url-input" className="col-md-2 col-form-label">URL</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="url" defaultValue="https://getbootstrap.com" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-tel-input" className="col-md-2 col-form-label">Telephone</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="tel" defaultValue="1-(555)-555-5555" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-password-input" className="col-md-2 col-form-label">Password</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="password" defaultValue="hunter2" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-number-input" className="col-md-2 col-form-label">Number</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="number" defaultValue="42" id="example-number-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-datetime-local-input" className="col-md-2 col-form-label">Date and time</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="datetime-local" defaultValue="2019-08-19T13:45:00" id="example-datetime-local-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-date-input" className="col-md-2 col-form-label">Date</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="date" defaultValue="2019-08-19" id="example-date-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-month-input" className="col-md-2 col-form-label">Month</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="month" defaultValue="2019-08" id="example-month-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-week-input" className="col-md-2 col-form-label">Week</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="week" defaultValue="2019-W33" id="example-week-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-time-input" className="col-md-2 col-form-label">Time</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="time" defaultValue="13:45:00" id="example-time-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-color-input" className="col-md-2 col-form-label">Color</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="color" defaultValue="#556ee6" id="example-color-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-2 col-form-label">Select</label>
                                            <div className="col-md-10">
                                                <select className="form-control">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-0">
                                            <label className="col-md-2 col-form-label">Custom Select</label>
                                            <div className="col-md-10">
                                                <select className="custom-select">
                                                    <option defaultValue>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Sizing</CardTitle>
                                        <CardSubtitle className="mb-3">Set heights using classNamees like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</CardSubtitle>
                                        <div>
                                            <div className="mb-4">
                                                <input className="form-control" type="text" placeholder="Default input" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
                                            </div>
                                            <div>
                                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Range Inputs</CardTitle>
                                        <CardSubtitle className="mb-3">Set horizontally scrollable range inputs using <code>.form-control-range</code>.</CardSubtitle>

                                        <div>
                                            <h5 className="font-size-14">Example</h5>
                                            <input type="range" className="form-control-range" id="formControlRange" />
                                        </div>
                                        <div className="mt-4">
                                            <h5 className="font-size-14">Custom Range</h5>
                                            <input type="range" className="custom-range" id="customRange1" />
                                            <input type="range" className="custom-range mt-4" min="0" max="5" id="customRange2" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Checkboxes</CardTitle>

                                        <Row>
                                            <Col md={5}>
                                                <div>
                                                    <h5 className="font-size-14 mb-4">Default Checkboxes</h5>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                                            Default checkbox
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-right">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" defaultChecked />
                                                        <label className="form-check-label" htmlFor="defaultCheck2">
                                                            Default checkbox Right
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} className="ml-auto">
                                                <div className="mt-4 mt-lg-0">
                                                    <h5 className="font-size-14 mb-4">Custom Checkboxes</h5>
                                                    <div className="custom-control custom-checkbox mb-3">
                                                        <input type="checkbox" className="custom-control-input" id="CustomCheck1" onChange={() => false} checked={this.state.customchk} />
                                                        <label className="custom-control-label" onClick={() => { this.setState({ customchk: !this.state.customchk }) }} >Custom checkbox</label>
                                                    </div>

                                                    <div className="custom-control custom-checkbox custom-control-right">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                        <label className="custom-control-label" htmlFor="customCheck2">Custom checkbox Right</label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Radios</CardTitle>

                                        <Row>
                                            <Col md={5}>
                                                <div>
                                                    <h5 className="font-size-14 mb-4">Default Radios</h5>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                                            Default radio
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-right">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                                            Default radio Right
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} className="ml-auto">
                                                <div className="mt-4 mt-lg-0">
                                                    <h5 className="font-size-14 mb-4">Custom Radios</h5>
                                                    <div className="custom-control custom-radio mb-3">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-right">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="customRadio2">Or toggle this Right custom radio</label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Switches</CardTitle>
                                        <CardSubtitle className="mb-3">A switch has the markup of a custom checkbox but uses the <code>.custom-switch</code> className to render a toggle switch. Switches also support the <code>disabled</code> attribute.</CardSubtitle>

                                        <div className="custom-control custom-switch mb-2" dir="ltr">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
                                            <label className="custom-control-label" htmlFor="customSwitch1" onClick={(e) => { this.setState({ toggleSwitch: !this.state.toggleSwitch }) }}>Toggle this switch element</label>
                                        </div>
                                        <div className="custom-control custom-switch" dir="ltr">
                                            <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
                                            <label className="custom-control-label" htmlFor="customSwitch2">Disabled switch element</label>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>File browser</CardTitle>
                                        <CardSubtitle className="mb-3">The file input is the most gnarly of the bunch and requires additional JavaScript if you’d like to hook them up with functional <em>Choose file…</em> and selected file name text.</CardSubtitle>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
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

export default FormElements;

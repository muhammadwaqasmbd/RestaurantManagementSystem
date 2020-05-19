import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, Input, Form, FormGroup, Label, Button, Badge } from "reactstrap";

// Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class TasksCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            inputFields: [
                { name: "", file: "" }
            ]
        }
        this.startDateChange.bind(this);
        this.endDateChange.bind(this);
        this.handleAddFields.bind(this);
        this.handleRemoveFields.bind(this);
    }
    startDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    endDateChange = date => {
        this.setState({
            endDate: date
        });
    };

    // Function for Create Input Fields
    handleAddFields = () => {
        var values = this.state.inputFields;
        values.push({ name: "", file: "" });
        this.setState({ inputFields: values });
    }

    // Function for Remove Input Fields
    handleRemoveFields = (index) => {
        var values = this.state.inputFields;
        values.splice(index, 1);
        this.setState({ inputFields: values });
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Tasks" breadcrumbItem="Create Task" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Create New Task</CardTitle>
                                        <form className="outer-repeater">
                                            <div data-repeater-list="outer-group" className="outer">
                                                <div data-repeater-item className="outer">
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="taskname" className="col-form-label col-lg-2">Task Name</Label>
                                                        <Col lg="10">
                                                            <Input id="taskname" name="taskname" type="text" className="form-control" placeholder="Enter Task Name..." />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label className="col-form-label col-lg-2">Task Description</Label>
                                                        <Col lg="10">
                                                            <Editor
                                                                toolbarClassName="toolbarClassName"
                                                                wrapperClassName="wrapperClassName"
                                                                editorClassName="editorClassName"
                                                                placeholder="Place Your Content Here..."
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup className="mb-4" row>
                                                        <Label className="col-form-label col-lg-2">Task Date</Label>
                                                        <Col lg="10">
                                                            <div className="input-daterange input-group" data-provide="datepicker">
                                                                <DatePicker className="form-control"
                                                                    selected={this.state.startDate}
                                                                    onChange={this.startDateChange}
                                                                />
                                                                <DatePicker className="form-control"
                                                                    selected={this.state.endDate}
                                                                    onChange={this.endDateChange}
                                                                />
                                                            </div>
                                                        </Col>
                                                    </FormGroup>

                                                    <div className="inner-repeater mb-4">
                                                        <div className="inner form-group mb-0 row">
                                                            <Label className="col-form-label col-lg-2">Add Team Member</Label>
                                                            <div className="inner col-lg-10 ml-md-auto" id="repeater">
                                                                {
                                                                    this.state.inputFields.map((field, key) =>
                                                                        <Fragment key={field.map}>
                                                                            <div className="mb-3 row align-items-center">
                                                                                <Col md="6">
                                                                                    <input type="text" className="inner form-control" value={field.name} placeholder="Enter Name..." />
                                                                                </Col>
                                                                                <Col md="4">
                                                                                    <div className="mt-4 mt-md-0">
                                                                                        <Input type="file" className="form-control-file" value={field.file} />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col md="2">
                                                                                    <div className="mt-2 mt-md-0">
                                                                                        <Button color="primary" className="inner" onClick={() => { this.handleRemoveFields(key) }} block>Delete</Button>
                                                                                    </div>
                                                                                </Col>
                                                                            </div>
                                                                        </Fragment>
                                                                    )
                                                                }


                                                            </div>
                                                        </div>
                                                        <Row className="justify-content-end">
                                                            <Col lg="10">
                                                                <Button color="success" className="inner" onClick={this.handleAddFields} >Add Number</Button>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <FormGroup className="mb-4" row>
                                                        <label htmlFor="taskbudget" className="col-form-label col-lg-2">Budget</label>
                                                        <div className="col-lg-10">
                                                            <Input id="taskbudget" name="taskbudget" type="text" placeholder="Enter Task Budget..." className="form-control" />
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </form>
                                        <Row className="justify-content-end">
                                            <Col lg="10">
                                                <Button type="submit" color="primary">Create Task</Button>
                                            </Col>
                                        </Row>

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

export default TasksCreate;
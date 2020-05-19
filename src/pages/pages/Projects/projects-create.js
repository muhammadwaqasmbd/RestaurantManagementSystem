import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table, Form, FormGroup, Input, Label, Button } from "reactstrap";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class ProjectsCreate extends Component {
    constructor() {
        super();
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            selectedFiles: []
        }
        this.startDateChange.bind(this);
        this.endDateChange.bind(this);
        this.handleAcceptedFiles.bind(this);
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

    handleAcceptedFiles = (files) => {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
        }));

        this.setState({ selectedFiles: files });
        console.log(this.state.selectedFiles)
    }

    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Projects" breadcrumbItem="Projects Create" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Create New Project</CardTitle>
                                        <Form>
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Project Name</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="projectname" type="text" className="form-control" placeholder="Enter Project Name..." />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectdesc" className="col-form-label col-lg-2">Project Description</Label>
                                                <Col lg="10">
                                                    <textarea className="form-control" id="projectdesc" rows="3" placeholder="Enter Project Description..."></textarea>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">Project Date</Label>
                                                <Col lg="10">
                                                    <div className="input-daterange input-group">
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

                                            <FormGroup className="mb-4" row>
                                                <label htmlFor="projectbudget" className="col-form-label col-lg-2">Budget</label>
                                                <Col lg="10">
                                                    <Input id="projectbudget" name="projectbudget" type="text" placeholder="Enter Project Budget..." className="form-control" />
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <FormGroup className="mb-4" row>
                                            <Label className="col-form-label col-lg-2">Attached Files</Label>
                                            <Col lg="10">
                                                <Form>
                                                    <Dropzone
                                                        onDrop={acceptedFiles =>
                                                            this.handleAcceptedFiles(acceptedFiles)
                                                        }
                                                    >
                                                        {({ getRootProps, getInputProps }) => (
                                                            <div className="dropzone">
                                                                <div
                                                                    className="dz-message needsclick"
                                                                    {...getRootProps()}
                                                                >
                                                                    <input {...getInputProps()} />
                                                                    <div className="dz-message needsclick">
                                                                        <div className="mb-3">
                                                                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                                                        </div>
                                                                        <h4>Drop files here or click to upload.</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Dropzone>
                                                    <div
                                                        className="dropzone-previews mt-3"
                                                        id="file-previews"
                                                    >
                                                        {this.state.selectedFiles.map((f, i) => {
                                                            return (
                                                                <Card
                                                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                    key={i + "-file"}
                                                                >
                                                                    <div className="p-2">
                                                                        <Row className="align-items-center">
                                                                            <Col className="col-auto">
                                                                                <img
                                                                                    data-dz-thumbnail=""
                                                                                    height="80"
                                                                                    className="avatar-sm rounded bg-light"
                                                                                    alt={f.name}
                                                                                    src={f.preview}
                                                                                />
                                                                            </Col>
                                                                            <Col>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="text-muted font-weight-bold"
                                                                                >
                                                                                    {f.name}
                                                                                </Link>
                                                                                <p className="mb-0">
                                                                                    <strong>{f.formattedSize}</strong>
                                                                                </p>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Card>
                                                            );
                                                        })}
                                                    </div>
                                                </Form>
                                            </Col>
                                        </FormGroup>
                                        <Row className="justify-content-end">
                                            <Col lg="10">
                                                <Button type="submit" color="primary">Create Project</Button>
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

export default ProjectsCreate;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import {baseUrl} from "../../helpers/baseUrl";
import SweetAlert from "react-bootstrap-sweetalert";

const dropzoneStyle = {
    width  : "100%",
    height : "10px",
};

class Restaurant extends Component {
    constructor() {
        super();
        this.state = {
            color : '#556ee6',
            private : false,
            name : '',
            selectedImages: [],
            logoUrl : '',
            success_dlg: false,
            error_dlg: false,
        }
        this.handleAcceptedImages = this.handleAcceptedImages.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        let response = this.props.res;
        console.log("res: ",response)
        console.log(response.company_name)
        if (prevProps !== this.props) {
            this.setState({
                name : response.company_name,
                logoUrl : response.logo_url,
                color: response.color,
                private: response.private

            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.color);
        console.log(this.state.name);
        console.log(this.state.private);
        console.log(this.state.selectedImages[0]);

        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('color', this.state.color);
        formData.append('private', this.state.private ? "y" : "n");
        formData.append('logo', this.state.selectedImages[0]);

        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Authorization': bearer
            }
        }
        console.log(headers)
        for (var pair of formData.entries())
        {
            console.log(pair[0]+ ', '+ pair[1]);
            console.log(typeof(pair[1]));
        }
        var api = 'api/restaurants/'+this.props.id+'/';
        return fetch(baseUrl+api, {
            method: 'PUT',
            headers: headers,
            body: formData
        })
            .then(response => {
                    console.log(" response: ",response)
                    if (response.ok) {
                        this.setState({
                            success_dlg: true,
                            dynamic_title: "Saved",
                            dynamic_description: "Record has been saved."
                        })
                        return response;
                    } else {
                        this.setState({
                            error_dlg: true,
                            dynamic_title: "Error",
                            dynamic_description: "Error in saving the record."
                        })
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }

                },
                error => {
                    this.setState({
                        error_dlg: true,
                        dynamic_title: "Error",
                        dynamic_description: "Error in saving the record."
                    })
                    console.log(error)
                })
            .catch(error => console.log(error))
    }

    handleFormChange(event) {
    const value = event.target.value;
    this.setState({
        [event.target.name]: value
    });
    console.log(event.target.name+": "+value);
    }

    handleAcceptedImages = (files) => {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
        }));

        this.setState({ selectedImages: files });
        console.log(this.state.selectedImages)
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
                {this.state.success_dlg ? (
                    <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ success_dlg: false })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}

                {this.state.error_dlg ? (
                    <SweetAlert
                        error
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ error_dlg: false })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null
                }
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">RESTAURANTS - ADD/EDIT PRODUCT</CardTitle>
                                        <Form
                                        onSubmit={this.handleSubmit}
                                        id="restaurantForm"
                                        >
                                        <FormGroup className="mb-4" row>
                                            <Col md="4">
                                                <label htmlFor="color" className="col-form-label">Select Color</label>
                                            </Col>
                                            <Col md="8">
                                                <input className="form-control" type="color" name="color" onChange={this.handleFormChange} value={this.state.color} id="color" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="mb-4" row>
                                            <Col lg="12">
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="CustomCheck1" onChange={() => false} checked={this.state.private} />
                                                <label className="custom-control-label" onClick={() => { this.setState({ private: !this.state.private }) }} >Private? (Only restaurant owner can see url)</label>
                                            </div>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="mb-4" row>
                                            <Col lg="12">
                                                <Input id="name" name="name" type="text" onChange={this.handleFormChange} value={this.state.name ? this.state.name : ""} className="form-control" placeholder="Restaurant Name" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="mb-4" row>
                                            <Col lg="12">
                                            <Dropzone
                                            onDrop={acceptedFiles =>
                                            this.handleAcceptedImages(acceptedFiles)
                                            }
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                            <div className="dropzone">
                                                <div
                                                className="dz-message needsclick"
                                                {...getRootProps()}
                                                >
                                                <input {...getInputProps()} />
                                                <div className="mb-3">
                                                    <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                                </div>
                                                <h3 style={{paddingBottom:'0px'}}>Select or Drop <br></br>Logo</h3>
                                                </div>
                                                <div
                                                    className="dropzone-previews mt-3"
                                                    id="file-previews"
                                                >
                                                    {this.state.selectedImages.length > 0 ?
                                                        this.state.selectedImages.map((f, i) => {
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
                                                    })
                                                     :<div className="p-2">
                                                            <Row className="align-items-center">
                                                        <Col className="col-auto">
                                                            <img
                                                                data-dz-thumbnail=""
                                                                height="80"
                                                                className="avatar-sm rounded bg-light"
                                                                alt={this.state.logoUrl}
                                                                src={this.state.logoUrl}
                                                            />
                                                        </Col>
                                                            </Row>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            )}
                                                </Dropzone>
                                                </Col>
                                            </FormGroup>
                                            
                                        </Form>
                                        <Row className="justify-content-end">
                                            <Col lg="12">
                                                <Button type="submit" color="primary" form="restaurantForm" style={{width:"100%"}}>Save</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default Restaurant;

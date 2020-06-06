import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import Select from "react-select";
import {baseUrl} from "../../helpers/baseUrl";
import SweetAlert from "react-bootstrap-sweetalert";

const dropzoneStyle = {
    width  : "100%",
    height : "10px",
};

class Untill extends Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : '',
            IP: '',
            port : '',
            success_dlg: false,
            error_dlg: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        let response = this.props.res;
        console.log("res: ",response)
        console.log(response.company_name)
        if (prevProps !== this.props) {
            this.setState({
                username : response.username,
                password : response.password,
                IP : response.ip,
                port : response.port,

            })
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.IP);
        console.log(this.state.port);

        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('ip', this.state.IP);
        formData.append('port', this.state.port);

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
                                        <CardTitle className="mb-4">UNTILL</CardTitle>
                                        <Form
                                        onSubmit={this.handleSubmit}
                                        id="untillForm"
                                        >
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="username" name="username" type="text" onChange={this.handleFormChange} value={this.state.username} className="form-control" placeholder="Enter Username" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="password" name="password" type="text" onChange={this.handleFormChange} value={this.state.password} className="form-control" placeholder="Enter Password" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="IP" name="IP" type="text" onChange={this.handleFormChange} value={this.state.IP} className="form-control" placeholder="Enter IP" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="port" name="port" type="text" onChange={this.handleFormChange} value={this.state.port} className="form-control" placeholder="Enter Port" />
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Row className="justify-content-end">
                                            <Col lg="12">
                                                <Button type="submit" color="primary" form="untillForm" style={{width:"100%"}}>Save</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default Untill;

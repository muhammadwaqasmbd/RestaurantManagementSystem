import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import $ from 'jquery';
import {baseUrl} from "../../helpers/baseUrl";
import SweetAlert from "react-bootstrap-sweetalert";

const dropzoneStyle = {
    width  : "100%",
    height : "10px",
};

class Printer extends Component {
    constructor() {
        super();
        this.state = {
            attributes : [],
            count: 1,
            printers  : [],
            success_dlg: false,
            error_dlg: false,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addAttributeForm = this.addAttributeForm.bind(this);
        this.handleAttrChange = this.handleAttrChange.bind(this);
        this.removePrinter = this.removePrinter.bind(this);
    }

    componentDidMount() {
        let response = this.props.res;
        console.log("res: ",response)
        if(response.printers && response.printers.length > 0) {
            this.setState({
                printers : response.printers
            })
            let printers = this.state.printers;
            var array = this.state.attributes;
            if (printers.length > 0) {
                printers.forEach(item => {
                    array.push(
                        <FormGroup className="mb-4" id={"attrrow" + item.id} row key={"attrrow" + item.id}>
                            <Col lg="7">
                                <Input id={"printer_mac_address"}
                                       name={"printer_mac_address"}
                                       defaultValue={item.printer_mac_address}
                                       type="text"
                                       className="form-control"
                                       placeholder="Printer MAC address"
                                       onChange={this.handleAttrChange(item.id)}
                                />
                            </Col>
                            <Col lg="4">
                                <Input id={"printer_number"}
                                       name={"printer_number"}
                                       defaultValue={item.printer_number}
                                       type="text"
                                       className="form-control"
                                       placeholder="Printer No"
                                       onChange={this.handleAttrChange(item.id)}
                                />
                            </Col>
                            <Col lg="1">
                                <button type="button" onClick={() => {
                                    this.removePrinter(item.id, "attrrow" + item.id)
                                }} className="close" style={{color: "red", fontSize: '40px'}} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </Col>
                        </FormGroup>
                    )
                });
                var count = parseInt(printers[printers.length - 1].id) + 1
                this.setState({
                    count: count
                });
            } else {
                array.push(
                    <FormGroup className="mb-4" id={"attrrow" + this.state.count} row
                               key={"attrrow" + this.state.count}>
                        <Col lg="7">
                            <Input id="printer_mac_address"
                                   name={"printer_mac_address"}
                                   type="text"
                                   className="form-control"
                                   placeholder="Printer MAC address"
                                   onChange={this.handleAttrChange(this.state.count + "temp")}
                            />
                        </Col>
                        <Col lg="4">
                            <Input id="printer_number"
                                   name={"printer_number"}
                                   type="text"
                                   className="form-control"
                                   placeholder="Printer No"
                                   onChange={this.handleAttrChange(this.state.count + "temp")}
                            />
                        </Col>
                    </FormGroup>
                )
            }
            this.setState({
                attributes: array
            });
        }
    }


    removePrinter(id, rowNo){
        this.setState({printers: this.state.printers.filter(function(printer) {
                return printer.id !== id
            })});
        $("#"+rowNo).remove();
    }

    addAttributeForm() {
        var array = this.state.attributes;
        let count = this.state.count+1;
        array.push(
            <FormGroup className="mb-4" id={"attrrow"+count} row key={"attrrow"+count}>
                <Col lg="7">
                    <Input id="printer_mac_address"
                           name={"printer_mac_address"}
                           type="text"
                           className="form-control"
                           placeholder="Printer MAC address"
                           onChange={this.handleAttrChange(count+"temp")}
                    />
                </Col>
                <Col lg="4">
                    <Input id="printer_number"
                           name={"printer_number"}
                           type="text"
                           className="form-control"
                           placeholder="Printer No"
                           onChange={this.handleAttrChange(count+"temp")}
                    />
                </Col>
                <Col lg="1">
                    <button type="button" onClick={() => { this.removePrinter(count+"temp","attrrow"+count)}} className="close" style={{color:"red", fontSize: '40px'}} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Col>
            </FormGroup>
        );
        this.setState({
            attributes: array,
            printers: [...this.state.printers, {"id":count+"temp","printer_number": "","printer_mac_address":""}],
            count: count+1
        });

        console.log(this.state.printers)
    }

    handleSubmit(event) {
        event.preventDefault();
        function oldPrinters(item) {
            return !item.id.includes("temp");
        }
        function newPrinters(item) {
            return item.id.includes("temp");
        }
        let printersList  = this.state.printers;
        let newRecordsList = printersList.filter(newPrinters);
        let oldRecords = printersList.filter(oldPrinters);
        let newRecords = []
        newRecordsList.forEach(function(item) {
            var tempItem = Object.assign({}, item);
            if(tempItem.id.includes("temp")) {
                delete tempItem.id;
                newRecords.push(tempItem);
            }
        });
        let printers = []
        printers = printers.concat(oldRecords);
        printers = printers.concat(newRecords);
        console.log(printers)
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let formData = new FormData();
        formData.append('printers', JSON.stringify(printers));
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

    handleAttrChange = id => (event) => {
        let value = event.target.value
        let name = event.target.name
        this.setState(prevState => ({
            printers: prevState.printers.map(
                obj => (obj.id === id ? Object.assign(obj, {[name]: value}) : obj)
            )
        }));
        console.log(this.state.printers);
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
                        <CardTitle className="mb-4">PRINTER</CardTitle>
                        <Form
                            onSubmit={this.handleSubmit}
                            id="printerForm"
                        >{                            this.state.attributes.length == 0 ?
                            <FormGroup className="mb-4" id={"attrrow" + this.state.count} row
                                       key={"attrrow" + this.state.count}>
                                <Col lg="7">
                                    <Input id="printer_mac_address"
                                           name={"printer_mac_address"}
                                           type="text"
                                           className="form-control"
                                           placeholder="Printer MAC address"
                                           onChange={this.handleAttrChange(this.state.count + "temp")}
                                    />
                                </Col>
                                <Col lg="4">
                                    <Input id="printer_number"
                                           name={"printer_number"}
                                           type="text"
                                           className="form-control"
                                           placeholder="Printer No"
                                           onChange={this.handleAttrChange(this.state.count + "temp")}
                                    />
                                </Col>
                            </FormGroup>
                            :null}
                            {
                                this.state.attributes.map(input => {
                                    return input
                                })
                            }
                            <FormGroup className="mb-4" row>
                                <Col lg="12">
                                    <Button type="button" onClick={this.addAttributeForm} color="primary">Add another printer</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        <Row className="justify-content-end">
                            <Col lg="12">
                                <Button type="submit" color="primary" form="printerForm" style={{width:"100%"}}>Save</Button>
                            </Col>
                        </Row>

                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default Printer;

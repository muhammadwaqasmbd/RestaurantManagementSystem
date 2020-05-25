import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import QRCode from 'qrcode.react';

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
            qrCode : ''
        }
        this.handleAcceptedImages = this.handleAcceptedImages.bind(this);
        this.downloadQRCode = this.downloadQRCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidMount(){
        if(this.props.id > 0){
            const response = {color: '#679099',private:true,name:'test',qrCode:'8768980'};
            this.state.color = response.color;
            this.state.private = response.private;
            this.state.name = response.name;
            this.state.qrCode = response.qrCode;

        }
    }

    downloadQRCode(){
        const canvas = document.getElementById("qrCode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        const imageName = this.state.name == "" ? "qrCode.png" : this.state.name+".png";
        downloadLink.href = pngUrl;
        downloadLink.download = imageName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.color);
        console.log(this.state.private);
        console.log(this.state.name);
        console.log(this.state.selectedImages);
        console.log(this.state.qrCode);
        if(this.props.id > 0){
            console.log("Update")
        }else{
            console.log("create")
        }
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
                                                <label className="custom-control-label" onClick={() => { this.setState({ private: !this.state.private }) }} >Private? (Only reataurant owner can see url)</label>
                                            </div>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="mb-4" row>
                                            <Col lg="12">
                                                <Input id="name" name="name" type="text" onChange={this.handleFormChange} value={this.state.name} className="form-control" placeholder="Restaurant Name" />
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
                                                    {this.state.selectedImages.map((f, i) => {
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
                                            </div>
                                            )}
                                                </Dropzone>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="5">
                                                    <Input name="qrCode" type="text" onChange={this.handleFormChange} value={this.state.qrCode} className="form-control" placeholder="Enter QR Code" />
                                                </Col>
                                                <Col lg="7">
                                                    <Button type="button" onClick={this.downloadQRCode} color="primary">Download QR Code</Button>
                                                </Col>
                                                <Col lg="12">
                                                <QRCode id="qrCode" level={"H"} size={290} includeMargin={true} value={this.state.qrCode} />
                                                </Col>
                                            </FormGroup>
                                            
                                        </Form>
                                        <Row className="justify-content-end">
                                            <Col lg="8">
                                                <Button type="submit" color="primary" form="restaurantForm" style={{width:"100%"}}>Save</Button>
                                            </Col>
                                            <Col lg="4">
                                                <Button type="cancel" color="white">Cancel</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default Restaurant;
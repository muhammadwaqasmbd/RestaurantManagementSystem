import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Card, CardBody, CardTitle, CardSubtitle, Button, Label } from "reactstrap";
import Select from 'react-select';
import Dropzone from 'react-dropzone';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class EcommerceAddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: []
        }
        this.handleAcceptedFiles.bind(this);
    }

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
        const options = [
            { value: 'AK', label: 'Alaska' },
            { value: 'HI', label: 'Hawaii' },
            { value: 'CA', label: 'California' },
            { value: 'NV', label: 'Nevada' },
            { value: 'OR', label: 'Oregon' },
            { value: 'WA', label: 'Washington' },
        ]
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Product" />

                        <Row>
                            <Col xs="12">
                                <Card>
                                    <CardBody>

                                        <CardTitle>Basic Information</CardTitle>
                                        <CardSubtitle className="mb-3">Fill all information below</CardSubtitle>

                                        <Form>
                                            <Row>
                                                <Col sm="6">
                                                    <FormGroup>
                                                        <Label htmlFor="productname">Product Name</Label>
                                                        <Input id="productname" name="productname" type="text" className="form-control" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label htmlFor="manufacturername">Manufacturer Name</Label>
                                                        <Input id="manufacturername" name="manufacturername" type="text" className="form-control" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label htmlFor="manufacturerbrand">Manufacturer Brand</Label>
                                                        <Input id="manufacturerbrand" name="manufacturerbrand" type="text" className="form-control" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label htmlFor="price">Price</Label>
                                                        <Input id="price" name="price" type="text" className="form-control" />
                                                    </FormGroup>
                                                </Col>

                                                <Col sm="6">
                                                    <FormGroup>
                                                        <Label className="control-label">Category</Label>
                                                        <select className="form-control select2">
                                                            <option>Select</option>
                                                            <option value="AK">Alaska</option>
                                                            <option value="HI">Hawaii</option>
                                                        </select>
                                                    </FormGroup>
                                                    <FormGroup className="select2-container">
                                                        <Label className="control-label">Features</Label>
                                                        <Select classNamePrefix="select2-selection" placeholder="Chose..." title="Country" options={options} isMulti />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label htmlFor="productdesc">Product Description</Label>
                                                        <textarea className="form-control" id="productdesc" rows="5"></textarea>
                                                    </FormGroup>

                                                </Col>
                                            </Row>

                                            <Button type="submit" color="primary" className="mr-1 waves-effect waves-light">Save Changes</Button>
                                            <Button type="submit" color="secondary" className="waves-effect">Cancel</Button>
                                        </Form>

                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-3">Product Images</CardTitle>
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
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>

                                        <CardTitle>Meta Data</CardTitle>
                                        <CardSubtitle className="mb-3">Fill all information below</CardSubtitle>

                                        <Form>
                                            <Row>
                                                <Col sm={6}>
                                                    <FormGroup>
                                                        <Label htmlFor="metatitle">Meta title</Label>
                                                        <Input id="metatitle" name="productname" type="text" className="form-control" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label htmlFor="metakeywords">Meta Keywords</Label>
                                                        <Input id="metakeywords" name="manufacturername" type="text" className="form-control" />
                                                    </FormGroup>
                                                </Col>

                                                <Col sm={6}>
                                                    <FormGroup>
                                                        <Label htmlFor="metadescription">Meta Description</Label>
                                                        <textarea className="form-control" id="metadescription" rows="5"></textarea>
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <Button type="submit" color="primary" className="mr-1 waves-effect waves-light">Save Changes</Button>
                                            <Button type="submit" color="secondary" className="waves-effect">Cancel</Button>
                                        </Form>
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

export default EcommerceAddProduct;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import Select from "react-select";

const dropzoneStyle = {
    width  : "100%",
    height : "10px",
};

class Product extends Component {
    constructor() {
        super();
        this.state = {
            selectedImages: [],
            selectedThumnails : [],
            name : '',
            description : '',
            price: 0,
            category : '',
            vat : '',
            defaultAttr : '',
            defaultAttrPrice: '',
            attributes : [],
            attrCount: 1,
            attr: [],
            attrValues : [],
            tempCount : 0
        }
        this.handleAcceptedImages = this.handleAcceptedImages.bind(this);
        this.handleAcceptedThumnails = this.handleAcceptedThumnails.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.addAttributeForm = this.addAttributeForm.bind(this);
        this.handleAttrChange = this.handleAttrChange.bind(this);
    }

    componentDidMount(){
        if(this.props.id > 0){
            const response = {name: 'test 1',description:'test',price:1000,category:'Soft Drinks',
            vat: 10, defaultAttr : 'abc', defaultAttrPrice : 200, attrArr:'attr1:jiljk;,attr3:jnklm;'};
            
            this.state.name = response.name;
            this.state.description = response.description;
            this.state.price = response.price;
            this.state.category = response.category;
            this.state.vat = response.vat;
            this.state.defaultAttr = response.defaultAttr;
            this.state.defaultAttrPrice = response.defaultAttrPrice;

            const attrValArr = response.attrArr.split(',');
            console.log(attrValArr);
            var array = this.state.attributes;
            attrValArr.forEach(arr => {
                const tempArr = arr.split(":");
                const count = parseInt(tempArr[0].substr(tempArr[0].length - 1));
                array.push(<FormGroup className="mb-4" row key={"attrrow"+count}>
                    <Col lg="12">
                        <Input name={tempArr[0]} type="text" value={tempArr[1]} onChange={this.handleAttrChange} className="form-control" placeholder="Enter Attribute" />
                    </Col>
                </FormGroup>)
                this.setState({
                    attributeForm: array,
                    attr : [...this.state.attr,tempArr[0]],
                    tempCount : count
                });
            });
        }
    }

    addAttributeForm() {
        var array = this.state.attributes;
        let count = parseInt(this.state.tempCount + this.state.attrCount);
        array.push(
            <FormGroup className="mb-4" row key={"attrrow"+count}>
                <Col lg="12">
                    <Input name={"attr"+count} type="text" onChange={this.handleAttrChange} className="form-control" placeholder="Enter Attribute" />
                </Col>
            </FormGroup>
        );

        this.setState({
            attributeForm: array,
            attrCount : count+1,
            tempCount : 0,
            attr : [...this.state.attr,"attr"+count]
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.description);
        console.log(this.state.price);
        console.log(this.state.category);
        console.log(this.state.vat);
        console.log(this.state.defaultAttr);
        console.log(this.state.defaultAttrPrice);
        console.log(this.state.selectedImages);
        console.log(this.state.selectedThumnails);
        console.log("attr: ",this.state.attr);
        let attrArr = [];
        this.state.attrValues.forEach(item => {
            if(item.includes(":")){
                attrArr.push(item);
            }
        });
        let mainArr = [];
        this.state.attr.forEach(attrval => {
            let tempArr = [];
            attrArr.forEach(item => {
                if(item.includes(attrval)){
                    tempArr.push(item);
                }
            });
            mainArr.push(tempArr);
        });
        console.log("mainarr: ",mainArr);
        let attributes = '';
        mainArr.forEach(arr => {
            if(arr.length > 0){
                attributes = attributes + arr.pop() + ",";
            }
        });
        console.log("attributes: ",attributes);
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

    handleAttrChange(event) {
        const value = event.target.value;
        const attrName = this.state.attr.find(elem => elem == event.target.name);
        this.setState({
            attrValues: [...this.state.attrValues,attrName+":"+value]
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

    handleAcceptedThumnails = (files) => {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
        }));

        this.setState({ selectedThumnails: files });
        console.log(this.state.selectedThumnails)
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
                    <Container fluid>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">PRODUCTS - ADD/EDIT PRODUCT</CardTitle>
                                        <Form
                                        onSubmit={this.handleSubmit}
                                        id="productForm"
                                        >
                                        <FormGroup className="mb-4" row>
                                            <Col lg="6">
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
                                                <h3 style={{paddingBottom:'0px'}}>Select or Drop <br></br>Image</h3>
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
                                                <Col lg="6">
                                                <Dropzone
                                            onDrop={acceptedFiles =>
                                            this.handleAcceptedThumnails(acceptedFiles)
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
                                                <h3 style={{paddingBottom:'0px'}}>Select or Drop <br></br>Thumbnail</h3>
                                                </div>
                                                <div
                                                    className="dropzone-previews mt-3"
                                                    id="file-previews"
                                                >
                                                    {this.state.selectedThumnails.map((f, i) => {
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
                                                <Col lg="12">
                                                    <Input id="name" name="name" type="text" onChange={this.handleFormChange} value={this.state.name} className="form-control" placeholder="Enter Product Name" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <textarea className="form-control" id="description" name="description" onChange={this.handleFormChange} value={this.state.description} rows="3" placeholder="Enter Short Description"></textarea>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="4">
                                                    <Input id="price" name="price" type="number" onChange={this.handleFormChange} value={this.state.price} className="form-control" placeholder="Enter Price" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <select className="form-control" name="category" onChange={this.handleFormChange} value={this.state.category}>
                                                        <option>Select Category</option>
                                                        <option>Soft Drinks</option>
                                                        <option>Burgers</option>
                                                    </select>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <select className="form-control" name="vat" onChange={this.handleFormChange} value={this.state.vat}>
                                                        <option>VAT %</option>
                                                        <option>5</option>
                                                        <option>10</option>
                                                    </select>
                                                </Col>
                                            </FormGroup>
                                            <h5>Optional Attributes</h5>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="defaultAttr" 
                                                    name="defaultAttr" 
                                                    type="text" 
                                                    className="form-control"
                                                     placeholder="Attribute Name" 
                                                     onChange={this.handleFormChange} value={this.state.defaultAttr}
                                                     />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                            <Col lg="5">
                                                <InputGroup>
                                                <Input
                                                    type="number"
                                                    className="form-control"
                                                    name = "defaultAttrPrice"
                                                    onChange={this.handleFormChange} value={this.state.defaultAttrPrice}
                                                />
                                                <div
                                                    className="input-group-append"
                                                    onClick={() =>
                                                    this.setState({
                                                        defaultAttrPrice: this.state.defaultAttrPrice + 1
                                                    })
                                                    }
                                                >
                                                    <Button type="button" color="primary">
                                                    <i className="mdi mdi-plus"></i>
                                                    </Button>
                                                </div>
                                                <div
                                                    className="input-group-append"
                                                    onClick={() =>
                                                    this.setState({
                                                        defaultAttrPrice: this.state.defaultAttrPrice - 1
                                                    })
                                                    }
                                                >
                                                    <Button type="button" color="white" style={{borderColor:"#ced4da"}}>
                                                    <i className="mdi mdi-minus"></i>
                                                    </Button>
                                                </div>
                                                </InputGroup>
                                                </Col>
                                            </FormGroup>
                                            { 
                                                this.state.attributes.map(input => {
                                                    return input
                                                })
                                            }
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Button type="button" onClick={this.addAttributeForm} color="primary">Add another attribute</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Row className="justify-content-end">
                                            <Col lg="8">
                                                <Button type="submit" color="primary" form="productForm" style={{width:"100%"}}>Save</Button>
                                            </Col>
                                            <Col lg="4">
                                                <Button type="cancel" color="white">Cancel</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
            </React.Fragment>
        );
    }
}

export default Product;
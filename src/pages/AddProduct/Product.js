import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import $ from 'jquery';
import {baseUrl} from "../../helpers/baseUrl";

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
            defaultAttrName : '',
            defaultAttrPrice: '',
            attributes : [],
            attrCount: 1,
            attrName: [],
            attrPrice: [],
            attrValuesName : [],
            attrValuesPrice : [],
            tempCount : 0
        }
        this.handleAcceptedImages = this.handleAcceptedImages.bind(this);
        this.handleAcceptedThumnails = this.handleAcceptedThumnails.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.addAttributeForm = this.addAttributeForm.bind(this);
        this.handleAttrChange = this.handleAttrChange.bind(this);
        this.removePrinter = this.removePrinter.bind(this);
        this.removeAddPrinter = this.removeAddPrinter.bind(this);
    }

    componentDidMount(){
        if(this.props.id > 0){
            let response = [
                {
                    "id": "1",
                    "name": "Test 1",
                    "price": "576"
                },
                {
                    "id": "2",
                    "name": "Test 2",
                    "price": "576"
                },
                {
                    "id": "3",
                    "name": "Test 3",
                    "price": "576"
                }
            ]
            let defaultAttrName = response.length > 0 ? response[0].name : "";
            let defaultAttrPrice = response.length > 0 ? response[0].price : "";
            let attrArrMAC = '';
            let attrArrNo = '';
            response = response.slice(1);
            console.log("sliced: ",response)
            response.forEach(item => {
                attrArrMAC = attrArrMAC + "attrName"+item.id+"^*&"+item.name+",";
                attrArrNo = attrArrNo + "attrPrice"+item.id+"^*&"+item.price+",";
            });
            attrArrMAC = attrArrMAC.substring(0,attrArrMAC.length-1)
            attrArrNo = attrArrNo.substring(0,attrArrNo.length-1)
            this.state.defaultAttrName = defaultAttrName;
            this.state.defaultAttrPrice = defaultAttrPrice;

            const attrValArrMAC = attrArrMAC.split(',');
            const attrValArrNo = attrArrNo.split(',');
            var attrValMap = {};
            attrValArrMAC.forEach((key, i) => attrValMap[key] = attrValArrNo[i]);
            console.log(attrValMap);
            var array = this.state.attributes;
            for (const [key, value] of Object.entries(attrValMap)) {
                const keyArr = key.split("^*&");
                const valArr = value.split("^*&");
                const count = parseInt(keyArr[0].substr(keyArr[0].length - 1));
                array.push(
                    <div  id={"attrrow"+count} key={"attrrow"+count}>
                    <FormGroup  className="mb-4" row>
                        <Col lg="11">
                            <Input id={keyArr[0]}
                                   name={keyArr[0]}
                                   value={keyArr[1]}
                                   type="text"
                                   className="form-control"
                                   placeholder="Attribute Name"
                                   onChange={this.handleFormChange}
                            />
                        </Col>
                        <Col lg="1">
                            <button type="button" onClick={() => { this.removePrinter(keyArr,valArr,"attrrow"+count)}} className="close" style={{color:"red", fontSize: '40px'}} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Col>
                    </FormGroup>
                    <FormGroup  className="mb-4" row>
                        <Col lg="5">
                            <InputGroup>
                                <Input
                                    id={valArr[0]}
                                    name={valArr[0]}
                                    value={valArr[1]}
                                    type="number"
                                    className="form-control"
                                    placeholder="Price"
                                    onChange={this.handleFormChange}
                                />
                            </InputGroup>
                        </Col>
                    </FormGroup>
            </div>
                )
                this.setState({
                    attributeForm: array,
                    attrName : [...this.state.attrName,keyArr[0]],
                    attrPrice : [...this.state.attrPrice,valArr[0]],
                    attrValuesName : [...this.state.attrValuesName,keyArr[0]+"^*&"+keyArr[1]],
                    attrValuesPrice : [...this.state.attrValuesPrice,valArr[0]+"^*&"+valArr[1]],
                    tempCount : count
                });
            }
        }
    }

    removePrinter(MAC, No, rowNo){
        if(MAC.length>0){
            this.setState({attrName: this.state.attrName.filter(function(mac) {
                    return mac !== MAC[0]
                })});
            this.setState({attrValuesName: this.state.attrValuesName.filter(function(mac) {
                    return mac !== MAC[1]
                })});
        }
        if(No.length>0){
            this.setState({attrPrice: this.state.attrPrice.filter(function(no) {
                    return no !== No[0]
                })});
            this.setState({attrValuesPrice: this.state.attrValuesPrice.filter(function(no) {
                    return no !== No[1]
                })});
        }
        $("#"+rowNo).remove();
    }

    removeAddPrinter(attrNameKey, attrPriceKey, row){
        this.setState({attrName: this.state.attrName.filter(function(key) {
                return key !== attrNameKey
            })});
        this.setState({attrPrice: this.state.attrPrice.filter(function(key) {
                return key !== attrPriceKey
            })});
        $("#"+row).remove();
    }

    addAttributeForm() {
        var array = this.state.attributes;
        let count = parseInt(this.state.tempCount + this.state.attrCount);
        array.push(
            <div id={"attrrow"+count} key={"attrrow"+count}>
                <FormGroup  className="mb-4" row>
                    <Col lg="11">
                        <Input id="attrName"
                               name={"attrName"+count}
                               type="text"
                               className="form-control"
                               placeholder="Attribute Name"
                               onChange={this.handleFormChange}
                        />
                    </Col>
                    <Col lg="1">
                        <button type="button" onClick={() => { this.removeAddPrinter("attrName"+count,"attrPrice"+count,"attrrow"+count)}} className="close" style={{color:"red", fontSize: '40px'}} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Col>
                </FormGroup>
                <FormGroup  className="mb-4" row>
                    <Col lg="5">
                        <InputGroup>
                            <Input
                                id="attrPrice"
                                name={"attrPrice"+count}
                                type="number"
                                className="form-control"
                                placeholder="Price"
                                onChange={this.handleFormChange}
                            />
                        </InputGroup>
                    </Col>
                </FormGroup>
            </div>
        );

        this.setState({
            attributeForm: array,
            attrCount : count+1,
            tempCount : 0,
            attrName : [...this.state.attrName,"attrName"+count],
            attrPrice : [...this.state.attrPrice,"attrPrice"+count]
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.description);
        console.log(this.state.price);
        console.log(this.state.category);
        console.log(this.state.vat);
        console.log(this.state.selectedImages[0]);
        console.log(this.state.selectedThumnails[0]);

        console.log(this.state.defaultAttrName);
        console.log(this.state.defaultAttrPrice);
        let attributesMAC = '';
        attributesMAC = this.getAttr(this.state.attrName, this.state.attrValuesName);
        attributesMAC = attributesMAC.substring(0, attributesMAC.length - 1);
        console.log("attributesMAC: ",attributesMAC);
        let attributesNo = '';
        attributesNo = this.getAttr(this.state.attrPrice, this.state.attrValuesPrice);
        attributesNo = attributesNo.substring(0, attributesNo.length - 1);
        console.log("attributesNo: ",attributesNo);
        if(this.props.id > 0){
            console.log("Update")
        }else{
            console.log("create")
        }

        event.preventDefault();
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log(this.state.name)
        console.log(this.state.description)
        console.log(this.state.startTime)
        console.log(this.state.closeTime)
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('unit_price', this.state.price);
        formData.append('vat_percent', this.state.vat);
        formData.append('category_id', "1");
        formData.append("product_sku", "1");
        formData.append('image', this.state.selectedImages[0]);
        formData.append('thumb', this.state.selectedThumnails[0]);

        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'multipart/form-data; boundary=---WebKitFormBoundary7MA4YWxkTrZu0gW>',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer
            }
        }
        console.log(headers)
        for (var pair of formData.entries())
        {
            console.log(pair[0]+ ', '+ pair[1]);
            console.log(typeof(pair[1]));
        }
        //console.log(formData.values())
        var api = this.props.id > 0 ? 'api/products/'+this.props.id+'/' : 'api/products/';
        var method = this.props.id > 0 ? 'PUT' : 'POST';
        return fetch(baseUrl+api, {
            method: method,
            headers: headers,
            body: formData
        })
            .then(response => {
                    console.log(" response: ",response)
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }

                },
                error => {
                    console.log(error)
                })
            .catch(error => console.log(error))
      }

    getAttr(attrArrParam, attrValuesParam){
        console.log("attrArrParam: ",attrArrParam);
        console.log("attrValuesParam: ", attrValuesParam);
        let attrArr = [];
        attrValuesParam.forEach(item => {
            if(item.includes("^*&")){
                attrArr.push(item);
            }
        });
        let mainArr = [];
        attrArrParam.forEach(attrval => {
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
        return attributes;
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
        const attrNameName = this.state.attrName.find(elem => elem == event.target.name);
        const attrPriceName = this.state.attrPrice.find(elem => elem == event.target.name);
        this.setState({
            attrValuesName: [...this.state.attrValuesName,attrNameName+"^*&"+value],
            attrValuesPrice: [...this.state.attrValuesPrice,attrPriceName+"^*&"+value]
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
                                                    <Input id="defaultAttrName"
                                                           name="defaultAttrName"
                                                           type="text"
                                                           className="form-control"
                                                           placeholder="Attribute Name"
                                                           onChange={this.handleFormChange} value={this.state.defaultAttrName}
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
                                                            placeholder="Price"
                                                            onChange={this.handleFormChange} value={this.state.defaultAttrPrice}
                                                        />
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

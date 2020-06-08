import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import $ from 'jquery';
import {baseUrl} from "../../helpers/baseUrl";
import SweetAlert from "react-bootstrap-sweetalert";

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
            sku: '',
            name : '',
            description : '',
            price: 0,
            category : '',
            vat : '',
            count : 1,
            attributes : [],
            attrs: [],
            redirectToReferrer : false,
            success_dlg: false,
            error_dlg: false,
            imageurl : '',
            thumburl : '',
            categories : []
        }
        this.handleAcceptedImages = this.handleAcceptedImages.bind(this);
        this.handleAcceptedThumnails = this.handleAcceptedThumnails.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.addAttributeForm = this.addAttributeForm.bind(this);
        this.handleAttrChange = this.handleAttrChange.bind(this);
        this.removeAttr = this.removeAttr.bind(this)
    }

    componentDidMount(){
        if(this.props.id > 0){
            this.fetchProduct();
        }else{
            let attrs = []
            attrs.push({"printer_id":"1temp","printer_number": "","printer_mac_address":""})
            var array = this.state.attributes;
            array.push(
                <div id={"attrrow" + this.state.count} key={"attrrow" + this.state.count}>
                    <FormGroup className="mb-4" row>
                        <Col lg="12">
                            <Input id="name"
                                   name="name"
                                   type="text"
                                   className="form-control"
                                   placeholder="Attribute Name"
                                   onChange={this.handleAttrChange(this.state.count+"temp")}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                        <Col lg="5">
                            <InputGroup>
                                <Input
                                    type="number"
                                    className="form-control"
                                    name = "price"
                                    placeholder="Price"
                                    onChange={this.handleAttrChange(this.state.count+"temp")}
                                />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </div>
            )
        }
        this.fetchCategories();
    }

    fetchCategories(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching tables");
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
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
        return fetch(baseUrl+'api/categories/', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("response: ",response)
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
            .then(response => response.json())
            .then(response => {
                // If response was successful, set the token in local storage
                console.log("response: ",response)
                if(response.length > 0) {
                    let options = []
                    response.forEach(cat => {
                        options.push(<option value={cat.id}>{cat.name}</option>)
                    });
                    this.setState({
                        categories: options
                    })
                }
            })
            .catch(error => console.log(error))
    }

    removeAttr(id, rowNo){
        this.setState({attrs: this.state.attrs.filter(function(attr) {
                return attr.id !== id
            })});
        $("#"+rowNo).remove();
    }

    fetchProduct(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching products");
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
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
        return fetch(baseUrl+'api/products/'+this.props.id+'', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("product response: ",response)
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
            .then(response => response.json())
            .then(response => {
                // If response was successful, set the token in local storage
                console.log("product response 2: ",response)
                this.setState({
                    attrs : response.attributes,
                    sku: response.product_sku,
                    name : response.name,
                    description: response.description,
                    price: response.unit_price,
                    category: response.category_id,
                    vat: response.vat_percent,
                    imageurl: response.image_url,
                    thumburl: response.image_thumb_url
                })
                let attrs = this.state.attrs;
                console.log("attrs1: ",attrs)
                for (var i = 0; i < attrs.length; i++) {
                    attrs[i]['id'] = ""+parseInt(i+1)+"";
                };
                console.log("attrs: ",attrs)
                var array = this.state.attributes;
                if(attrs.length >0) {
                    attrs.forEach(item => {
                        array.push(
                            <div id={"attrrow" + item.id} key={"attrrow" + item.id}>
                                <FormGroup className="mb-4" row>
                                    <Col lg="11">
                                        <Input id="name"
                                               name="name"
                                               defaultValue={item.name}
                                               type="text"
                                               className="form-control"
                                               placeholder="Attribute Name"
                                               onChange={this.handleAttrChange(item.id)}
                                        />
                                    </Col>
                                    <Col lg="1">
                                        <button type="button" onClick={() => { this.removeAttr(item.id,"attrrow" + item.id)}} className="close" style={{color:"red", fontSize: '40px'}} aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </Col>
                                </FormGroup>
                                <FormGroup className="mb-4" row>
                                <Col lg="5">
                                    <InputGroup>
                                        <Input
                                            type="number"
                                            className="form-control"
                                            name = "price"
                                            defaultValue={item.price}
                                            placeholder="Price"
                                            onChange={this.handleAttrChange(item.id)}
                                        />
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            </div>
                        )
                    });
                    var count = parseInt(attrs[attrs.length - 1].id) + 1
                    this.setState({
                        count: count
                    });
                }else{
                    array.push(
                        <div id={"attrrow" + this.state.count} key={"attrrow" + this.state.count}>
                            <FormGroup className="mb-4" row>
                                <Col lg="12">
                                    <Input id="name"
                                           name="name"
                                           type="text"
                                           className="form-control"
                                           placeholder="Attribute Name"
                                           onChange={this.handleAttrChange(this.state.count+"temp")}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup className="mb-4" row>
                                <Col lg="5">
                                    <InputGroup>
                                        <Input
                                            type="number"
                                            className="form-control"
                                            name = "price"
                                            placeholder="Price"
                                            onChange={this.handleAttrChange(this.state.count+"temp")}
                                        />
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                        </div>
                    )
                }
            })
            .catch(error => console.log(error))
    }

    addAttributeForm() {
        var array = this.state.attributes;
        let count = this.state.count+1;
        array.push(
            <div id={"attrrow" + count} key={"attrrow" + count}>
                <FormGroup className="mb-4" row>
                    <Col lg="11">
                        <Input id="name"
                               name="name"
                               type="text"
                               className="form-control"
                               placeholder="Attribute Name"
                               onChange={this.handleAttrChange(count+"temp")}
                        />
                    </Col>
                    <Col lg="1">
                        <button type="button" onClick={() => { this.removeAttr(count+"temp","attrrow"+count)}} className="close" style={{color:"red", fontSize: '40px'}} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Col>
                </FormGroup>
                <FormGroup className="mb-4" row>
                    <Col lg="5">
                        <InputGroup>
                            <Input
                                type="number"
                                className="form-control"
                                name = "price"
                                placeholder="Price"
                                onChange={this.handleAttrChange(count+"temp")}
                            />
                        </InputGroup>
                    </Col>
                </FormGroup>
            </div>
        );

        this.setState({
            attrs: [...this.state.attrs, {"id":count+"temp","name": "","price":0}],
            count: count+1
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

        let attrsList  = this.state.attrs;
        let newRecords = []
        attrsList.forEach(function(item) {
            var tempItem = Object.assign({}, item);
                delete tempItem.id;
                tempItem.price = parseInt(tempItem.price);
                newRecords.push(tempItem);
        });
        let attributes = [];
        attributes = attributes.concat(newRecords);
        //attributes = attributes.concat(newRecords);
        console.log(attributes)

        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let formData = new FormData();

        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('unit_price', this.state.price);
        formData.append('vat_percent', this.state.vat);
        formData.append('category_id', this.state.category);
        formData.append("product_sku", this.state.sku);
        formData.append('image', this.state.selectedImages[0]);
        formData.append('thumb', this.state.selectedThumnails[0]);
        formData.append('attributes', JSON.stringify(attributes));

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
                        this.setState({
                            success_dlg: true,
                            dynamic_title: "Created",
                            dynamic_description: "Record has been created."
                        })
                        return response;
                    } else {
                        this.setState({
                            error_dlg: true,
                            dynamic_title: "Error",
                            dynamic_description: "Error in creation."
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
                        dynamic_description: "Error in creation."
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

    handleAttrChange = id => (event) => {
        let value = event.target.value
        let name = event.target.name
        this.setState(prevState => ({
            attrs: prevState.attrs.map(
                obj => (obj.id === id ? Object.assign(obj, {[name]: value}) : obj)
            )
        }));
        console.log(this.state.attrs);
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
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/products" />
        }

        return (
            <React.Fragment>
                {this.state.success_dlg ? (
                    <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ success_dlg: false, redirectToReferrer:true })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}

                {this.state.error_dlg ? (
                    <SweetAlert
                        error
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ error_dlg: false, redirectToReferrer: true })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null
                }
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
                                                                        alt={this.state.imageurl}
                                                                        src={this.state.imageurl}
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
                                                    {this.state.selectedThumnails.length > 0 ?
                                                    this.state.selectedThumnails.map((f, i) => {
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
                                                        alt={this.state.thumburl}
                                                        src={this.state.thumburl}
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

                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="name" name="name" type="text" onChange={this.handleFormChange} value={this.state.name} className="form-control" placeholder="Enter Product Name" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="name" name="sku" type="text" onChange={this.handleFormChange} value={this.state.sku} className="form-control" placeholder="Enter SKU" />
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
                                                        {this.state.categories}
                                                    </select>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <select className="form-control" name="vat" onChange={this.handleFormChange} value={this.state.vat}>
                                                        <option>VAT %</option>
                                                        <option>0</option>
                                                        <option>9</option>
                                                        <option>21</option>
                                                    </select>
                                                </Col>
                                            </FormGroup>
                                            <h5>Optional Attributes</h5>
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

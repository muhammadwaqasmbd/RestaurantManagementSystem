import React, { Component } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form } from "reactstrap";
import Droppable from "./droppable";
import Drggable from "./draggable";
import styled from "styled-components";
import {baseUrl} from "../../helpers/baseUrl";
import {Redirect} from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

const Item = styled.div`
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 0px;
    border-color: '';
`;

const droppableStyle={
    backgroundColor: "#eff2f7",
    height: "500px"
}

const draggableStyle={
    marginTop: "8px",
    marginBotton: "8px"
}

const draggableHeadingStyle={
    color: '#555',
    backgroundColor: 'white',
    borderRadius: '3px',
    borderColor: '',
    margin: '0px',
    paddingLeft:'0px',
    paddinRight: '0px',
    paddingTop: '8px',
    paddingBottom: '8px',
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuProducts: [],
            otherProducts: [],
            name : '',
            description: '',
            startTime : '09:00',
            closeTime : '12:00',
            success_dlg: false,
            error_dlg: false,
            redirectToReferrer : false

        };
        this.handleProductAdd = this.handleProductAdd.bind(this);
        this.handleProductRemove = this.handleProductRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }

    componentDidMount() {
        if(this.props.menuId > 0) {
            this.fetchProducts();
            this.fetchMenu();
        }
    }


    fetchProducts(){
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
        return fetch(baseUrl+'api/products/?menu_id='+this.props.menuId, {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("register response: ",response)
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
                this.setState({
                    otherProducts: response.results
                })
            })
            .catch(error => console.log(error))
    }

    fetchMenu(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching menus");
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
        return fetch(baseUrl+'api/menus/'+this.props.menuId+'', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("menu response: ",response)
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
                this.setState({
                    name: response.name,
                    description:  response.description,
                    startTime:  response.start_time,
                    closeTime:  response.end_time,
                    menuProducts : response.products
                })
            })
            .catch(error => console.log(error))
    }

    handleProductAdd(id){
        console.log("Adding new product to the menu: ",id);
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let ids = []
        ids.push(id)
        let headers = {}
        let bodyData = {
            "product_id_list":ids
        }
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
        var api = 'api/menus/'+this.props.menuId+'/add-products/'
        return fetch(baseUrl+api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
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
            .catch(error => console.log(error))
    }

    handleProductRemove(id){
        console.log("Removing product from the menu: ",id);
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let ids = []
        ids.push(id)
        let headers = {}
        let bodyData = {
            "product_id_list":ids
        }
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
        var api = 'api/menus/'+this.props.menuId+'/delete-products/'
        return fetch(baseUrl+api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
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
            .catch(error => console.log(error))
    }

    handleSubmit(event) {
        event.preventDefault();
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log(this.state.name)
        console.log(this.state.description)
        console.log(this.state.startTime)
        console.log(this.state.closeTime)
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let bodyData = {
            "name":this.state.name,
            "description":this.state.description,
            "start_time":this.state.startTime,
            "end_time":this.state.closeTime
        }
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
        var api = this.props.menuId > 0 ? 'api/menus/'+this.props.menuId+'/' : 'api/menus/';
        var method = this.props.menuId > 0 ? 'PUT' : 'POST';
        return fetch(baseUrl+api, {
            method: method,
            headers: headers,
            body: JSON.stringify(bodyData)
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
      }
    renderItems() {
        const menuProductRow = [
            <tr key={"row-"+this.props.menuId}>
                {this.props.menuId > 0 ?
                <td>
                    <h5 className="text-truncate font-size-14 text-dark">{this.state.name}</h5>
                    <p className="text-muted mb-0">{this.state.startTime} - {this.state.closeTime}</p>
                </td>:null}
            </tr>,
            this.props.menuId == 0 ?
            <tr key={"row-menu"}>
                <td>
                    <input type="text" name="name" onChange={this.handleFormChange} className="form-control" />
                </td>
                <td>
                    <input type="text" name="description"  onChange={this.handleFormChange} className="form-control" />
                </td>
                <td>
                    <input className="form-control" name="startTime" onChange={this.handleFormChange} type="time" defaultValue="09:00:00" id="startTime" />
                </td>
                <td>
                    <input className="form-control" name="closeTime"  onChange={this.handleFormChange} type="time" defaultValue="12:00:00" id="closeTime" />
                </td>
                <td>
                <Button
                        style={{backgroundColor: 'Green', width : '100px'}}
                        size="sm" 
                        className="btn-rounded waves-effect waves-light"
                        form={"addMenuForm"}
                    >
                    Save
                    </Button>
                </td>
             </tr>
                :
                <tr key={"row-menu"}>
                    <td>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleFormChange} className="form-control" />
                    </td>
                    <td>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleFormChange} className="form-control" />
                    </td>
                    <td>
                        <input className="form-control" name="startTime" value={this.state.startTime} onChange={this.handleFormChange} type="time" id="startTime" />
                    </td>
                    <td>
                        <input className="form-control" name="closeTime" value={this.state.closeTime}  onChange={this.handleFormChange} type="time"  id="closeTime" />
                    </td>
                    <td>
                        <Button
                            style={{backgroundColor: 'Green', width : '100px'}}
                            size="sm"
                            className="btn-rounded waves-effect waves-light"
                            form={"addMenuForm"}
                        >
                            Update
                        </Button>
                    </td>
                </tr>
        ];
        
        return menuProductRow;    
    }

    renderMenuProducts(product) {
        const itemRows = [
            <Drggable key={product.id} id={""+product.id+""} style={draggableStyle}>
                <div className="row" style={{marginLeft:'0px', marginRight:'0px'}}>
                    <Item className="col-sm-4">{product.name}</Item>
                    <Item className="col-sm-3">{product.unit_price}</Item>
                    <Item className="col-sm-3">{product.category}</Item>
                    <Item className="col-sm-2">{product.id}</Item>
                </div>
            </Drggable>
        ];
        return itemRows;    
    }

    renderOtherProducts(product) {
        const itemRows = [
            <Drggable key={product.id} id={""+product.id+""} style={draggableStyle}>
                <div className="row" style={{marginLeft:'0px', marginRight:'0px'}}>
                    <Item className="col-sm-4">{product.name}</Item>
                    <Item className="col-sm-3">{product.unit_price}</Item>
                    <Item className="col-sm-3">{product.category}</Item>
                    <Item className="col-sm-2">{product.id}</Item>
                </div>
            </Drggable>
        ];
        return itemRows;    
    }

    render() {
        console.log(this.props.menuId);
        let allItemRows = [];
        const perItemRows = this.renderItems();
        console.log(perItemRows);
        allItemRows = allItemRows.concat(perItemRows);

        let menuProductRows =[];
        const { menuProducts} = this.state;
        menuProducts.forEach(product => {
            const perItemRow = this.renderOtherProducts(product);
            console.log(perItemRow);
            menuProductRows = menuProductRows.concat(perItemRow);
        });

        let otherProductRows = [];
        const { otherProducts} = this.state;
        otherProducts.forEach(product => {
            const perItemRow = this.renderMenuProducts(product);
            console.log(perItemRow);
            otherProductRows = otherProductRows.concat(perItemRow);
        });

        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/menus" />
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
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            {this.props.menuId > 0 ?
                                <span>Menu - {this.state.name} - Edit</span>
                                :
                                <span>Menu - Add</span>
                            }

                        </CardTitle>
                        <Form
                                className="repeater"
                                encType="multipart/form-data"
                                onSubmit={this.handleSubmit}
                                id="addMenuForm"
                            ></Form>
                        <div className="table-responsive">
                            <table className="table table-centered table-borderless table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width: '20%'}}>Name</th>
                                        <th style={{width: '20%'}}>Description</th>
                                        <th style={{width: '20%'}}>Start Time</th>
                                        <th style={{width: '20%'}}>Close Time</th>
                                        <th style={{width: '20%'}}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="itemsBody">
                                    {allItemRows}
                                </tbody>
                                
                            </table>
                        </div>
                    </CardBody>
                </Card>
                {this.props.menuId > 0 ?
                <Row className="mb-6">
                    <Col>
                    <Droppable id="menuProducts" handleProductAdd = {this.handleProductAdd} style={droppableStyle}>
                        <CardTitle className="mb-6" style={{paddingTop:'10px', paddingLeft:"10px"}}>PRODUCTS ON MENU (DRAG & DROP)</CardTitle>
                        <div className="row" style={draggableHeadingStyle}>
                            <div className="col-sm-4"><strong>Name</strong></div>
                            <div className="col-sm-3"><strong>Price</strong></div>
                            <div className="col-sm-3"><strong>Category</strong></div>
                            <div className="col-sm-2"><strong>ID</strong></div>
                        </div>
                        {menuProductRows}
                    </Droppable>
                    </Col>
                    <Col>
                    <Droppable id="otherProducts" handleProductRemove = {this.handleProductRemove} style={droppableStyle}>
                        <CardTitle  className="mb-6" style={{paddingTop:'10px', paddingLeft:"10px"}}>ADD NEW PRODUCTS (DRAG & DROP)</CardTitle>
                        <div className="row" style={draggableHeadingStyle}>
                            <div className="col-sm-4"><strong>Name</strong></div>
                            <div className="col-sm-3"><strong>Price</strong></div>
                            <div className="col-sm-3"><strong>Category</strong></div>
                            <div className="col-sm-2"><strong>ID</strong></div>
                        </div>
                        {otherProductRows}
                    </Droppable>
                    </Col>
                </Row>
                    :null}
            </React.Fragment>
        );
    }
}

export default Menu;

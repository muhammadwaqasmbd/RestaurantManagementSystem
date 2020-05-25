import React, { Component } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form } from "reactstrap";
import Droppable from "./droppable";
import Drggable from "./draggable";
import styled from "styled-components";

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
            items: [
                { id: "1", name: 'Breakfast (Default)', openTime: "09:00", closeTime: "11:00"}
            ],
            name : '',
            menuProducts: [
                { id: "1", name: 'Coca Cola', price: "250", catrgory: "Soft Drinks"},
                { id: "3", name: 'Sprite', price: "250", catrgory: "Soft Drinks"}
            ],
            otherProducts: [
                { id: "2", name: 'Marinda', price: "250", catrgory: "Soft Drinks"},
                { id: "4", name: '7 up', price: "250", catrgory: "Soft Drinks"}
            ],
            name : '',
            startTime : '09:00:00',
            closeTime : '12:00:00'

        };
        this.handleProductAdd = this.handleProductAdd.bind(this);
        this.handleProductRemove = this.handleProductRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }
    
    handleProductAdd(id){
        console.log("Adding new product to the menu: ",id);
    }

    handleProductRemove(id){
        console.log("Removing product from the menu: ",id);
    }

    handleSubmit(event) {
        alert(this.state.name);
        alert(this.state.startTime);
        alert(this.state.closeTime);
        event.preventDefault();
        //var newTable = { id: "2", name: "Table Kiebert"};    
        //this.setState({ tables: this.state.tables.concat(newTable) 
      }

      handleFormChange(event) {
        const value = event.target.value;
        this.setState({
          [event.target.name]: value
        });
      }
    renderItems(item) {
        const menuProductRow = [
        this.props.menuId > 0 ?
            <tr key={"row-"+item.id}>
                <td>
                    <h5 className="text-truncate font-size-14 text-dark">{item.name}</h5>
                    <p className="text-muted mb-0">{item.openTime} - {item.closeTime}</p>
                </td>
            </tr>
        :
            <tr key={"row-menu"}>
                <td>
                    <input type="text" name="name" onChange={this.handleFormChange} className="form-control" />
                </td>
                <td>
                    <input className="form-control" name="startTime" onChange={this.handleFormChange} type="time" defaultValue="09:00:00" id="startTime" />
                </td>
                <td>
                    <input className="form-control" name="closeTime" onChange={this.handleFormChange} type="time" defaultValue="12:00:00" id="closeTime" />
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
        ];
        
        return menuProductRow;    
    }

    renderMenuProducts(product) {
        const itemRows = [
            <Drggable key={product.id} id={product.id} style={draggableStyle}>
                <div className="row" style={{marginLeft:'0px', marginRight:'0px'}}>
                    <Item className="col-sm-4">{product.name}</Item>
                    <Item className="col-sm-3">{product.price}</Item>
                    <Item className="col-sm-3">{product.catrgory}</Item>
                    <Item className="col-sm-2">{product.id}</Item>
                </div>
            </Drggable>
        ];
        return itemRows;    
    }

    renderOtherProducts(product) {
        const itemRows = [
            <Drggable key={product.id} id={product.id} style={draggableStyle}>
                <div className="row" style={{marginLeft:'0px', marginRight:'0px'}}>
                    <Item className="col-sm-4">{product.name}</Item>
                    <Item className="col-sm-3">{product.price}</Item>
                    <Item className="col-sm-3">{product.catrgory}</Item>
                    <Item className="col-sm-2">{product.id}</Item>
                </div>
            </Drggable>
        ];
        return itemRows;    
    }

    render() {
        console.log(this.props.menuId);
        let allItemRows = [];
        const { items} = this.state;
        items.forEach(item => {
            const perItemRows = this.renderItems(item);
            console.log(perItemRows);
            allItemRows = allItemRows.concat(perItemRows);
        });

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

        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            Menus - {this.state.items[0].name} - Edit
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
                                    {this.props.menuId > 0 ?
                                    <tr>
                                        <th style={{width: '100%'}}>Name</th>
                                    </tr>
                                    :
                                    <tr>
                                        <th style={{width: '30%'}}>Name</th>
                                        <th style={{width: '20%'}}>Start Time</th>
                                        <th style={{width: '20%'}}>Close Time</th>
                                        <th style={{width: '30%'}}>Actions</th>
                                    </tr>
                                    }
                                </thead>
                                <tbody id="itemsBody">
                                    {allItemRows}
                                </tbody>
                                
                            </table>
                        </div>
                    </CardBody>
                </Card>
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
            </React.Fragment>
        );
    }
}

export default Menu;

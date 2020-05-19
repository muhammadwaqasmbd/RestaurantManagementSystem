import React, { Component } from "react";
import { Row, Col, Form, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import $ from 'jquery';
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import { submit } from "redux-form";

class Resturants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [
                { id: "1", name: "Restaurant Dirk"},
                { id: "2", name: "Restaurant Kiebert"}
            ],
            editableRows : [],
            currentPage: 1,
            restaurantsPerPage: 5,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
            confirm_both: false,
            success_dlg: false,
            error_dlg: false,
            newItem: false,
            newRows : [],
            name : ''

        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
        this.editRestaurant = this.editRestaurant.bind(this);
        this.editRestaurantRow = this.editRestaurantRow.bind(this);
        this.pauseRestaurant = this.pauseRestaurant.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
            $("ul li.active").removeClass('active');
            $('ul li#'+this.state.currentPage).addClass('active');
    }
    handleClick(event) {
        let listid = Number(event.target.id);
        this.setState({
        currentPage: listid
        });
        $("ul li.active").removeClass('active');
        $('ul li#'+listid).addClass('active');
        this.setPrevAndNextBtnClass(listid);
    }
    setPrevAndNextBtnClass(listid) {
        let totalPage = Math.ceil(this.state.restaurants.length / this.state.restaurantsPerPage);
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if(totalPage === listid && totalPage > 1){
            this.setState({isPrevBtnActive: ''});
        }
        else if(listid === 1 && totalPage > 1){
            this.setState({isNextBtnActive: ''});
        }
        else if(totalPage > 1){
            this.setState({isNextBtnActive: ''});
            this.setState({isPrevBtnActive: ''});
        }
    }
    btnIncrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        let listid = this.state.upperPageBound + 1;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnDecrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        let listid = this.state.upperPageBound - this.state.pageBound;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnPrevClick() {
        if((this.state.currentPage -1)%this.state.pageBound === 0 ){
            this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        }
        let listid = this.state.currentPage - 1;
        this.setState({ currentPage : listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnNextClick() {
        if((this.state.currentPage +1) > this.state.upperPageBound ){
            this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        }
        let listid = this.state.currentPage + 1;
        this.setState({ currentPage : listid});
        this.setPrevAndNextBtnClass(listid);
    }

    handleDeleteRestaurant(rowId){
        this.setState({ confirm_both: true })
    }

    editRestaurant(id){
        console.log(id);
        //var newRestaurant = { id: "2", name: "Restaurant Kiebert"};    
        //this.setState({ restaurants: this.state.restaurants.concat(newRestaurant) }); 
    }

    editRestaurantRow(rowId){
        const currentEditableRows = this.state.editableRows;
        const isRowCurrentlyExpanded = currentEditableRows.includes(rowId);
        const newEditableRows = isRowCurrentlyExpanded ? 
        currentEditableRows.filter(id => id !== rowId) : 
        currentEditableRows.concat(rowId);
        this.setState({editableRows : newEditableRows});
    }

    pauseRestaurant(id){
        console.log(id);
        //var newRestaurant = { id: "2", name: "Restaurant Kiebert"};    
        //this.setState({ restaurants: this.state.restaurants.concat(newRestaurant) }); 
    }

    addNewRow(){
        const item = {
            name: ""
          };
          this.setState({
            newRows: [...this.state.newRows, item]
          });                          
    }

    removeRow = (e, idx) => {
        $("#addr" + idx).remove();
      };

      handleChange(event) {
        this.setState({name: event.target.value});
      }
    
      handleSubmit(event) {
        alert(this.state.name);
        event.preventDefault();
        //var newRestaurant = { id: "2", name: "Restaurant Kiebert"};    
        //this.setState({ restaurants: this.state.restaurants.concat(newRestaurant) 
      }

    renderRestaurants(restaurant) {
        const editRowCallback = () => this.editRestaurantRow(restaurant.id);
        const editCallback = () => this.editRestaurant(restaurant.id);
        const deleteCallBack = () => this.handleDeleteRestaurant(restaurant.id);
        const pauseCallback = () => this.pauseRestaurant(restaurant.id);
        const itemRows = [
        this.state.editableRows.includes(restaurant.id)  ? 
        <tr>
            <td>abddhhd</td>
            <td>
                <Button type="button" 
                style={{backgroundColor:'Green', width : '100px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={editCallback} 
                key={"update-button-" + restaurant.id}
                >
                    Update
                </Button>
                <Button type="button" 
                style={{backgroundColor:'Red', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={editRowCallback} 
                key={"cancel-button-" + restaurant.id}
                >
                    Cancel
                </Button>
            </td>
        </tr> :
        <tr key={"row-"+restaurant.id}>
            <td>{restaurant.name}</td>
            <td>
                <Link to={"/dashboard/"+restaurant.id}>
                    <Button type="button" 
                    style={{backgroundColor:'Green', width : '100px'}}
                    size="sm" 
                    className="btn-rounded waves-effect waves-light" 
                    key={"dashboard-button-" + restaurant.id}
                    >
                        Dashboard
                    </Button>
                </Link>
                <Button type="button" 
                style={{backgroundColor: 'Maroon', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={pauseCallback} 
                key={"pause-button-" + restaurant.id}
                >
                    Pause
                </Button>

                <Button type="button" 
                style={{backgroundColor: 'Blue', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={editRowCallback} 
                key={"edit-button-" + restaurant.id}
                >
                    Edit
                </Button>

                <Button type="button" 
                style={{width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={deleteCallBack} 
                key={"delete-button-" + restaurant.id}
                >
                    Delete
                </Button>
                {this.state.confirm_both ? (
                        <SweetAlert
                            title="Are you sure?"
                            warning
                            showCancel
                            confirmBtnBsStyle="success"
                            cancelBtnBsStyle="danger"
                            onConfirm={() =>
                                this.setState({
                                    confirm_both: false,
                                    success_dlg: true,
                                    dynamic_title: "Deleted",
                                    dynamic_description: "Your file has been deleted."
                                })
                            }
                            onCancel={() =>
                                this.setState({
                                    confirm_both: false,
                                    error_dlg: true,
                                    dynamic_title: "Cancelled",
                                    dynamic_description: "Your imaginary file is safe :)"
                                })
                            }
                        >
                            You won't be able to revert this!
                        </SweetAlert>
                    ) : null
                }
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
            </td>
        </tr>
        ];
        
        return itemRows;    
    }

    render() {
        let allItemRows = [];
        const { restaurants, currentPage, restaurantsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
        const indexOfLastRestaurant = currentPage * restaurantsPerPage;
        const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
        const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
        currentRestaurants.forEach(restaurant => {
            const perItemRows = this.renderRestaurants(restaurant);
            console.log(perItemRows);
            allItemRows = allItemRows.concat(perItemRows);
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(restaurants.length / restaurantsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if(number === 1 && currentPage === 1){
                return(
                    <li key={number} className='active page-item' id={number}><a className="page-link page-link" id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
            else if((number < upperPageBound + 1) && number > lowerPageBound){
                return(
                    <li key={number} id={number} className='page-item'><a className="page-link page-link" id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
        });
        
        let pageIncrementBtn = null;
        if(pageNumbers.length > upperPageBound && this.state.restaurants.length > 5){
            pageIncrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1 && this.state.restaurants.length > 5){
            pageDecrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className='disabled page-item'><span id="btnPrev" className='page-link page-link'> Prev </span></li>
        }
        else if(this.state.restaurants.length > 5){
            renderPrevBtn = <li className='page-item'><a id="btnPrev" className='page-link page-link' onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li className='disabled page-item'><span className='page-link page-link' id="btnNext"> Next </span></li>
        }
        else if(this.state.restaurants.length > 5){
            renderNextBtn = <li className='page-item'><a id="btnNext" className='page-link page-link' onClick={this.btnNextClick}> Next </a></li>
        }

        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            RESTAURANTS
                        </CardTitle>
                        <div className="table-responsive">
                            <Form
                                className="repeater"
                                encType="multipart/form-data"
                                onSubmit={this.handleSubmit}
                                id="addRestaurantForm"
                            ></Form>
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width: '60%'}}>Restaurant</th>
                                        <th style={{width: '40%'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="restaurantsBody">
                                    {allItemRows}
                                    {
                                        this.state.newRows.map((item, idx) => (
                                        <tr id={"addr" + idx} key={idx}>
                                           
                                            <td>
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    name="name" 
                                                    value={this.state.name} 
                                                    onChange={this.handleChange}
                                                />
                                                </td>
                                                <td>
                                                    <Button
                                                        style={{backgroundColor: 'Green', width : '100px'}}
                                                        size="sm" 
                                                        className="btn-rounded waves-effect waves-light"
                                                        form="addRestaurantForm"
                                                    >
                                                    Submit
                                                    </Button>
                                                    <Button
                                                        onClick={e =>
                                                        this.removeRow(e, idx)
                                                        }
                                                        style={{backgroundColor: 'Red', width : '100px', marginLeft : '10px'}}
                                                        size="sm" 
                                                        className="btn-rounded waves-effect waves-light" 
                                                    >
                                                        {" "}
                                                    Cancel{" "}
                                                    </Button>
                                                </td>
                                    </tr>
                                        ))
                                    }
                                </tbody>
                                
                            </table>
                            <Button
                                color="secondary"
                                className="btn btn-secondary btn-lg btn-block waves-effect"
                                onClick={this.addNewRow}
                            >
                                Add New Restaurant
                            </Button>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="pagination pagination-rounded justify-content-center mt-4" aria-label="pagination">
                                    <ul id="page-numbers" className="pagination">
                                        {renderPrevBtn}
                                        {pageDecrementBtn}
                                        {renderPageNumbers}
                                        {pageIncrementBtn}
                                        {renderNextBtn}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                    
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default Resturants;

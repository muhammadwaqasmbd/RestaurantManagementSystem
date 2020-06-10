import React, { Component } from "react";
import { Row, Col, Form, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import $ from 'jquery';
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import { submit } from "redux-form";
import {baseUrl} from "../../helpers/baseUrl";
var Loader = require('react-loader');

class Resturants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentPage: 1,
            itemsPerPage: 5,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
            confirm_both: false,
            success_dlg: false,
            error_dlg: false,
            name : '',
            loaded: true

        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
        this.pauseItem = this.pauseItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    fetchRestaurants(){
        this.setState({
            loaded: false
        })
        console.log("fetching restaurants");
        const bearer = 'Bearer ' + localStorage.getItem('access');
        return fetch(baseUrl+'api/restaurants/', {
            method: 'GET',
            headers: {
                'X-Requested-With':'application/json',
                'Content-Type':'application/json',
                'Authorization': bearer
            }
        })
            .then(response => {
                    console.log("register response: ",response)
                    if (response.ok) {
                        return response;
                    } else {
                        this.setState({
                            loaded: true,
                        })
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }
                },
                error => {
                    this.setState({
                        loaded: true,
                    })
                    console.log(error)
                })
            .then(response => response.json())
            .then(response => {
                // If response was successful, set the token in local storage
                let resultsArr = response.results;
                const results = resultsArr.map(item => ({
                    id: item.id,
                    name: item.name,
                    feepercent: item.fee_percent
                }));
                console.log(results)
                this.setState({
                    loaded: true,
                    items: results
                })

            })
            .catch(error => console.log(error))
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
        let totalPage = Math.ceil(this.state.items.length / this.state.itemsPerPage);
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

    handleDeleteItem(id){
        const updatedRestaurants = this.state.items.filter(p => id !== p.id);

        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
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
        var api = 'api/restaurants/'+id+"/";
        return fetch(baseUrl+api, {
            method: 'DELETE',
            headers: headers
        })
            .then(response => {
                    console.log(" response: ",response)
                    if (response.ok) {
                        this.setState({
                            success_dlg: true,
                            dynamic_title: "Deleted",
                            dynamic_description: "Restaurant has been deleted.",
                            items : updatedRestaurants
                        })
                        return response;
                    } else {
                        this.setState({
                            error_dlg: true,
                            dynamic_title: "Error",
                            dynamic_description: "Error in deletion."
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
                        dynamic_description: "Error in deletion."
                    })
                    console.log(error)
                })
            .catch(error => console.log(error))
    }

    pauseItem(id){
        console.log(id);
        //var newItem = { id: "2", name: "Item Kiebert"};    
        //this.setState({ items: this.state.items.concat(newItem) }); 
    }

      handleChange(event) {
        this.setState({name: event.target.value});
      }
    
    renderItems(item) {
        const deleteCallBack = () => this.handleDeleteItem(item.id);
        const pauseCallback = () => this.pauseItem(item.id);
        const itemRows = [
        <tr key={"row-"+item.id}>
            <td>{item.name}</td>
            <td>{item.feepercent+" %"}</td>
            <td>
                <Link to={"/dashboard/"+item.id}>
                    <Button type="button" 
                    style={{backgroundColor:'Green', width : '100px'}}
                    size="sm" 
                    className="btn-rounded waves-effect waves-light" 
                    key={"dashboard-button-" + item.id}
                    >
                        Dashboard
                    </Button>
                </Link>
                {/*<Button type="button"
                style={{backgroundColor: 'Maroon', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={pauseCallback} 
                key={"pause-button-" + item.id}
                >
                    Pause
                </Button>*/}
                <Link to={"/restaurant/"+item.id}>
                    <Button type="button" 
                    style={{backgroundColor: 'Blue', width : '100px', marginLeft : '10px'}}
                    size="sm" 
                    className="btn-rounded waves-effect waves-light" 
                    key={"edit-button-" + item.id}
                    >
                        Edit
                    </Button>
                </Link>
                <Button type="button" 
                style={{width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={deleteCallBack} 
                key={"delete-button-" + item.id}
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
        const { items, currentPage, itemsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
        currentItems.forEach(item => {
            const perItemRows = this.renderItems(item);
            console.log(perItemRows);
            allItemRows = allItemRows.concat(perItemRows);
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
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
        if(pageNumbers.length > upperPageBound && this.state.items.length > 5){
            pageIncrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1 && this.state.items.length > 5){
            pageDecrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className='disabled page-item'><span id="btnPrev" className='page-link page-link'> Prev </span></li>
        }
        else if(this.state.items.length > 5){
            renderPrevBtn = <li className='page-item'><a id="btnPrev" className='page-link page-link' onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li className='disabled page-item'><span className='page-link page-link' id="btnNext"> Next </span></li>
        }
        else if(this.state.items.length > 5){
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
                                id="addItemForm"
                            ></Form>
                            <Loader loaded={this.state.loaded}>
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width: '20%'}}>Restaurant</th>
                                        <th style={{width: '40%'}}>Fee %</th>
                                        <th style={{width: '40%'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="itemsBody">
                                    {allItemRows}
                                </tbody>    
                            </table>
                            </Loader>
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
            </React.Fragment>
        );
    }
}

export default Resturants;

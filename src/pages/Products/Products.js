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
            items: [
                { id: "1", img: 'favicon.ico', name: "Coca Cola", subTitle: "A refinded subtitle to be defined", price: "250", printerNo: "3", category: "Soft Drinks", menu: "Breakfast"},
                { id: "2", img: 'favicon.ico', name: "Sprite", subTitle: "A refinded subtitle to be defined", price: "250", printerNo: "4", category: "Soft Drinks", menu: "Breakfast"}
            ],
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
            name : ''

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

    handleDeleteItem(rowId){
        this.setState({ confirm_both: true })
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
            <td><img src={item.img} alt="" className="avatar-sm" /></td>
            <td>
                <h5 className="text-truncate font-size-14 text-dark">{item.name}</h5>
                <p className="text-muted mb-0">{item.subTitle}</p>
            </td>
            <td>{item.price}</td>
            <td>{item.printerNo}</td>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td>{item.menu}</td>
            <td>
                <Link to={"/product/"+item.id}>
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
                            PRODUCTS
                        </CardTitle>
                        <div className="table-responsive">
                            <Form
                                className="repeater"
                                encType="multipart/form-data"
                                onSubmit={this.handleSubmit}
                                id="addItemForm"
                            ></Form>
                            <table className="table table-centered table-borderless table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Printer #</th>
                                        <th>ID</th>
                                        <th>Category</th>
                                        <th>Menu</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="itemsBody">
                                    {allItemRows}
                                </tbody>
                                
                            </table>
                            <Link to={"/product/0"}>
                            <Button
                                color="secondary"
                                className="btn btn-secondary btn-lg btn-block waves-effect"
                            >
                                Add New Product
                            </Button>
                            </Link>
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

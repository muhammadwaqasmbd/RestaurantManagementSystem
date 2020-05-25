import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { } from "../../store/actions";

// MetisMenu
import MetisMenu from "metismenujs";
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

const SidebarContent = props => {
    return (
        <>
            <div id="sidebar-menu">
                <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title">Home</li>
                    <li>
                        <Link to="/admindashboard" className="waves-effect">
                            <i className="bx bx-home-circle"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resturants" className="waves-effect">
                            <i className="bx bx-list-ul"></i>
                            <span>Restaurants</span>
                        </Link>
                    </li>
                    <li className="menu-title">Home</li>
                    <li>
                        <Link to="/dashboard" className="waves-effect">
                            <i className="bx bx-home-circle"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="menu-title">Actions</li>
                    <li>
                        <Link to="/products" className="waves-effect">
                            <i className="bx bx-list-ul"></i>
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/menus" className="waves-effect">
                            <i className="bx bx-calendar"></i>
                            <span>Menus</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tables" className="waves-effect">
                            <i className="bx bx-calendar"></i>
                            <span>Tables</span>
                        </Link>
                    </li>

                    <li className="menu-title">Apps</li>

                    <li>
                        <Link to="calendar" className=" waves-effect">
                            <i className="bx bx-calendar"></i>
                            <span>Calendar</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="chat" className=" waves-effect">
                            <i className="bx bx-chat"></i>
                            <span className="badge badge-pill badge-success float-right">New</span>
                            <span>Chat</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-store"></i>
                            <span>Ecommerce</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="ecommerce-products">Products</Link></li>
                            <li><Link to="ecommerce-product-detail">Product Detail</Link></li>
                            <li><Link to="ecommerce-orders">Orders</Link></li>
                            <li><Link to="ecommerce-customers">Customers</Link></li>
                            <li><Link to="ecommerce-cart">Cart</Link></li>
                            <li><Link to="ecommerce-checkout">Checkout</Link></li>
                            <li><Link to="ecommerce-shops">Shops</Link></li>
                            <li><Link to="ecommerce-add-product">Add Product</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-envelope"></i>
                            <span>Email</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="email-inbox">Inbox</Link></li>
                            <li><Link to="email-read">Read Email</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-receipt"></i>
                            <span>Invoices</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="invoices-list">Invoice List</Link></li>
                            <li><Link to="invoices-detail">Invoice Detail</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-briefcase-alt-2"></i>
                            <span>Projects</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="projects-grid">Projects Grid</Link></li>
                            <li><Link to="projects-list">Projects List</Link></li>
                            <li><Link to="projects-overview">Project Overview</Link></li>
                            <li><Link to="projects-create">Create New</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-task"></i>
                            <span>Tasks</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="tasks-list">Task List</Link></li>
                            <li><Link to="tasks-kanban">Kanban Board</Link></li>
                            <li><Link to="tasks-create">Create Task</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bxs-user-detail"></i>
                            <span>Contacts</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="contacts-grid">User Grid</Link></li>
                            <li><Link to="contacts-list">User List</Link></li>
                            <li><Link to="contacts-profile">Profile</Link></li>
                        </ul>
                    </li>

                    <li className="menu-title">Pages</li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-user-circle"></i>
                            <span>Authentication</span>
                        </Link>
                        <ul className="sub-menu">
                            <li><Link to="pages-login">Login</Link></li>
                            <li><Link to="pages-register">Register</Link></li>
                            <li><Link to="pages-forget-pwd">Forget Password</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-file"></i>
                            <span>Utility</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="pages-starter">Starter Page</Link></li>
                            <li><Link to="pages-maintenance">Maintenance</Link></li>
                            <li><Link to="pages-comingsoon">Coming Soon</Link></li>
                            <li><Link to="pages-timeline">Timeline</Link></li>
                            <li><Link to="pages-faqs">FAQs</Link></li>
                            <li><Link to="pages-pricing">Pricing</Link></li>
                            <li><Link to="pages-404">Error 404</Link></li>
                            <li><Link to="pages-500">Error 500</Link></li>
                        </ul>
                    </li>

                    <li className="menu-title">Components</li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-tone"></i>
                            <span>UI Elements</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="ui-alerts">Alerts</Link></li>
                            <li><Link to="ui-buttons">Buttons</Link></li>
                            <li><Link to="ui-cards">Cards</Link></li>
                            <li><Link to="ui-carousel">Carousel</Link></li>
                            <li><Link to="ui-dropdowns">Dropdowns</Link></li>
                            <li><Link to="ui-grid">Grid</Link></li>
                            <li><Link to="ui-images">Images</Link></li>
                            <li><Link to="ui-lightbox">Lightbox</Link></li>
                            <li><Link to="ui-modals">Modals</Link></li>
                            <li><Link to="ui-rangeslider">Range Slider</Link></li>
                            <li><Link to="ui-session-timeout">Session Timeout</Link></li>
                            <li><Link to="ui-progressbars">Progress Bars</Link></li>
                            <li><Link to="ui-sweet-alert">Sweet-Alert</Link></li>
                            <li><Link to="ui-tabs-accordions">Tabs & Accordions</Link></li>
                            <li><Link to="ui-typography">Typography</Link></li>
                            <li><Link to="ui-video">Video</Link></li>
                            <li><Link to="ui-general">General</Link></li>
                            <li><Link to="ui-colors">Colors</Link></li>
                            <li><Link to="ui-rating">Rating</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="waves-effect">
                            <i className="bx bxs-eraser"></i>
                            <span className="badge badge-pill badge-danger float-right">6</span>
                            <span>Forms</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="form-elements">Form Elements</Link></li>
                            <li><Link to="form-validation">Form Validation</Link></li>
                            <li><Link to="form-advanced">Form Advanced</Link></li>
                            <li><Link to="form-editors">Form Editors</Link></li>
                            <li><Link to="form-uploads">Form File Upload</Link></li>
                            <li><Link to="form-xeditable">Form Xeditable</Link></li>
                            <li><Link to="form-repeater">Form Repeater</Link></li>
                            <li><Link to="form-wizard">Form Wizard</Link></li>
                            <li><Link to="form-mask">Form Mask</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-list-ul"></i>
                            <span>Tables</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="tables-basic">Basic Tables</Link></li>
                            <li><Link to="tables-datatable">Data Tables</Link></li>
                            <li><Link to="tables-responsive">Responsive Table</Link></li>
                            <li><Link to="tables-editable">Editable Table</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bxs-bar-chart-alt-2"></i>
                            <span>Charts</span>
                        </Link>

                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="apex-charts">Apex charts</Link></li>
                            <li><Link to="chartist-charts">Chartist Chart</Link></li>
                            <li><Link to="chartjs-charts">Chartjs Chart</Link></li>
                            <li><Link to="e-charts">E Chart</Link></li>
                            <li><Link to="tui-charts">Toast UI Chart</Link></li>
                            <li><Link to="sparkline-charts">Sparkline Chart</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-aperture"></i>
                            <span>Icons</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="icons-boxicons">Boxicons</Link></li>
                            <li><Link to="icons-materialdesign">Material Design</Link></li>
                            <li><Link to="icons-dripicons">Dripicons</Link></li>
                            <li><Link to="icons-fontawesome">Font awesome</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-map"></i>
                            <span>Maps</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="maps-google">Google Maps</Link></li>
                            <li><Link to="maps-vector">Vector Maps</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-share-alt"></i>
                            <span>Multi Level</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="true">
                            <li><Link to="#">Level 1.1</Link></li>
                            <li><Link to="#" className="has-arrow">Level 1.2</Link>
                                <ul className="sub-menu" aria-expanded="true">
                                    <li><Link to="#">Level 2.1</Link></li>
                                    <li><Link to="#">Level 2.2</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
};


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
    }

    initMenu() {
        // if (this.props.type !== "condensed" || this.props.isMobile) {
            new MetisMenu("#side-menu");

            var matchingMenuItem = null;
            var ul = document.getElementById("side-menu");
            var items = ul.getElementsByTagName("a");
            for (var i = 0; i < items.length; ++i) {
                if (this.props.location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
        // }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        {this.props.type !== "condensed" ? (
                            <SimpleBar style={{ maxHeight: "100%" }}>
                                <SidebarContent />
                            </SimpleBar>
                        ) : <SidebarContent />}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {
        layout: state.Layout
    };
};
export default connect(mapStatetoProps, {})(withRouter(Sidebar));

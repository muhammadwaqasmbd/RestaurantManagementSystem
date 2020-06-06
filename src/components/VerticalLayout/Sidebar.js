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
                {localStorage.getItem('isStuff') === "false" && localStorage.getItem("mollieSetup") && localStorage.getItem("mollieSetup") == "false"
                ?
                <ul className="metismenu list-unstyled" id="side-menu">
                    <li>
                        <Link to="/dashboard" className="waves-effect">
                            <i className="bx bx-home-circle"></i>
                            <span>Registration</span>
                        </Link>
                    </li>
                </ul>
                :
                <ul className="metismenu list-unstyled" id="side-menu">
                    {localStorage.getItem('isStuff') == "true" ?
                    <li className="menu-title">Home</li>
                        :
                        null}
                    {localStorage.getItem('isStuff') == "true" ?
                    <li>
                        <Link to="/admindashboard" className="waves-effect">
                            <i className="bx bx-home-circle"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                        :
                        null}
                    {localStorage.getItem('isStuff') == "true" ?
                    <li>
                        <Link to="/resturants" className="waves-effect">
                            <i className="bx bx-list-ul"></i>
                            <span>Restaurants</span>
                        </Link>
                    </li>
                        :
                        null}
                    {localStorage.getItem('isStuff') == "true" ?
                    <li>
                        <Link to="/qrcodes" className="waves-effect">
                            <i className="bx bx-barcode"></i>
                            <span>QRCodes</span>
                        </Link>
                    </li>
                    :
                    null}
                    {localStorage.getItem('isStuff') == "false" ?
                    <li className="menu-title">Home</li>
                        :null}
                    {localStorage.getItem('isStuff') == "false" ?
                    <li>
                        <Link to="/dashboard" className="waves-effect">
                            <i className="bx bx-home-circle"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    :
                    null}
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
                        <Link to="/tables-assignments" className="waves-effect">
                            <i className="bx bxs-barcode"></i>
                            <span>QR-Code Assignments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tables" className="waves-effect">
                            <i className="bx bx-calendar"></i>
                            <span>Tables</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories" className="waves-effect">
                            <i className="bx bx-calendar"></i>
                            <span>Categories</span>
                        </Link>
                    </li>

                </ul>
                }
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

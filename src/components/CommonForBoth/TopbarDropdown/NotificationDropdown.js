import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

class NotificationDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }
  render() {
    return (
      <React.Fragment>

        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="dropdown d-inline-block"
          tag="li"
        >
          <DropdownToggle
            className="btn header-item noti-icon waves-effect"
            tag="button" id="page-header-notifications-dropdown">
            <i className="bx bx-bell bx-tada"></i>
            <span className="badge badge-danger badge-pill">3</span>
          </DropdownToggle>

          <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0" right>
            <div className="p-3">
              <Row className="align-items-center">
                <Col>
                  <h6 className="m-0"> Notifications </h6>
                </Col>
                <div className="col-auto">
                  <a href="#!" className="small"> View All</a>
                </div>
              </Row>
            </div>

            <SimpleBar style={{ height: "230px" }}>
              <Link to="" className="text-reset notification-item">
                <div className="media">
                  <div className="avatar-xs mr-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="bx bx-cart"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Your order is placed</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">If several languages coalesce the grammar</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="" className="text-reset notification-item">
                <div className="media">
                  <img src={avatar3} className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">James Lemire</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">It will seem like simplified English.</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="" className="text-reset notification-item">
                <div className="media">
                  <div className="avatar-xs mr-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="bx bx-badge-check"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Your item is shipped</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">If several languages coalesce the grammar</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="" className="text-reset notification-item">
                <div className="media">
                  <img src={avatar4} className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Salena Layfield</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                    </div>
                  </div>
                </div>
              </Link>

            </SimpleBar>
            <div className="p-2 border-top">
              <Link
                className="btn btn-sm btn-link font-size-14 btn-block text-center"
                to="#"
              >
                {" "}
                View all{" "}
              </Link>
            </div>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}
export default NotificationDropdown;

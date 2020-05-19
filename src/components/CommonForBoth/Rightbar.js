import React, { Component } from "react";
import { FormGroup } from "reactstrap";

import { connect } from "react-redux";
import {
  hideRightSidebar,
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType, changePreloader,
  changeTopbarTheme
} from "../../store/actions";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

import "./rightbar.scss";
//Import images
import layout1 from "../../assets/images/layouts/layout-1.jpg";
import layout2 from "../../assets/images/layouts/layout-2.jpg";
import layout3 from "../../assets/images/layouts/layout-3.jpg";

class RightSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutType: this.props.layoutType,
      sidebarType: this.props.leftSideBarType,
      layoutWidth: this.props.layoutWidth,
      sidebarTheme: this.props.leftSideBarTheme,
      topbarTheme: this.props.topbarTheme,
    };
    this.hideRightbar = this.hideRightbar.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
    this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
    this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this);
    this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this);
    this.changeTopbarTheme = this.changeTopbarTheme.bind(this);
    this.changeThemePreloader = this.changeThemePreloader.bind(this);
  }

  /**
    * Hides the right sidebar
    */
  hideRightbar(e) {
    e.preventDefault();
    this.props.hideRightSidebar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        sidebarType: this.props.leftSideBarType,
        layoutWidth: this.props.layoutWidth,
        sidebarTheme: this.props.leftSideBarTheme,
        topbarTheme: this.props.topbarTheme
      });
    }
  }

  changeThemePreloader = () => {
    this.props.changePreloader(!this.props.isPreloader);
  }
  /**
   * Change the layout
   * @param {*} e
   */
  changeLayout(e) {
    if (e.target.checked) {
      this.props.changeLayout(e.target.value);
    }
  }

  /**
   * Changes layout width
   * @param {*} e 
   */
  changeLayoutWidth(e) {
    if (e.target.checked) {
      this.props.changeLayoutWidth(e.target.value);
    }
  }

  // change left sidebar design
  changeLeftSidebarType(e) {
    if (e.target.checked) {
      this.props.changeSidebarType(e.target.value);
    }
  }

  // change left sidebar theme
  changeLeftSidebarTheme(e) {
    if (e.target.checked) {
      this.props.changeSidebarTheme(e.target.value);
    }
  }

  // change topbar theme
  changeTopbarTheme(e) {
    if (e.target.checked) {
      this.props.changeTopbarTheme(e.target.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar">

          <SimpleBar style={{ height: "900px" }}>
            <div data-simplebar className="h-100">
              <div className="rightbar-title px-3 py-4">
                <Link to="#" onClick={this.hideRightbar} className="right-bar-toggle float-right">
                  <i className="mdi mdi-close noti-icon"></i>
                </Link>
                <h5 className="m-0">Settings</h5>
              </div>

              <hr className="my-0" />

              <div className="p-4">
                <div className="radio-toolbar">
                  <span className="mb-2 d-block">Layouts</span>
                  <input
                    type="radio"
                    id="radioVertical"
                    name="radioFruit"
                    value="vertical"
                    checked={this.state.layoutType === "vertical"}
                    onChange={this.changeLayout} />
                  <label htmlFor="radioVertical">Vertical</label>
                  {"   "}
                  <input
                    type="radio"
                    id="radioHorizontal"
                    name="radioFruit"
                    value="horizontal"
                    checked={this.state.layoutType === "horizontal"}
                    onChange={this.changeLayout} />
                  <label htmlFor="radioHorizontal">Horizontal</label>
                </div>

                <hr className="mt-1"/>

                <div className="radio-toolbar">
                  <span className="mb-2 d-block" id="radio-title">Layout Width</span>
                  <input
                    type="radio"
                    id="radioFluid"
                    name="radioWidth"
                    value="fluid"
                    checked={this.state.layoutWidth !== "boxed"}
                    onChange={this.changeLayoutWidth} />
                  <label htmlFor="radioFluid">Fluid</label>
                  {"   "}
                  <input
                    type="radio"
                    id="radioBoxed"
                    name="radioWidth"
                    value="boxed"
                    checked={this.state.layoutWidth === "boxed"}
                    onChange={this.changeLayoutWidth} />
                  <label htmlFor="radioBoxed">Boxed</label>
                </div>
                <hr className="mt-1"/>

                <div className="radio-toolbar">
                  <span className="mb-2 d-block" id="radio-title">Topbar Theme</span>
                  <input
                    type="radio"
                    id="radioThemeLight"
                    name="radioTheme"
                    value="light"
                    checked={this.state.topbarTheme === "light"}
                    onChange={this.changeTopbarTheme} />

                  <label htmlFor="radioThemeLight">Light</label>
                  {"   "}
                  <input
                    type="radio"
                    id="radioThemeDark"
                    name="radioTheme"
                    value="dark"
                    checked={this.state.topbarTheme === "dark"}
                    onChange={this.changeTopbarTheme} />
                  <label htmlFor="radioThemeDark">Dark</label>
                  {"   "}
                  {this.state.layoutType === "vertical" ? null :
                    <> <input
                      type="radio"
                      id="radioThemeColored"
                      name="radioTheme"
                      value="colored"
                      checked={this.state.topbarTheme === "colored"}
                      onChange={this.changeTopbarTheme} />
                      <label htmlFor="radioThemeColored">Colored</label> </>}

                </div>


                {this.state.layoutType === "vertical" ? <React.Fragment>
                  <hr className="mt-1"/>
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">Left Sidebar Type</span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value="light"
                      checked={this.state.sidebarType === "default"}
                      onChange={this.changeLeftSidebarType} />

                    <label htmlFor="sidebarDefault">Default</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value="compact"
                      checked={this.state.sidebarType === "compact"}
                      onChange={this.changeLeftSidebarType} />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value="icon"
                      checked={this.state.sidebarType === "icon"}
                      onChange={this.changeLeftSidebarType}
                    />
                    <label htmlFor="sidebarIcon">Icon</label>

                  </div>

                  <hr className="mt-1"/>

                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">Left Sidebar Type</span>
                    <input
                      type="radio"
                      id="leftsidebarThemelight"
                      name="leftsidebarTheme"
                      value="light"
                      checked={this.state.sidebarTheme === "light"}
                      onChange={this.changeLeftSidebarTheme} />

                    <label htmlFor="leftsidebarThemelight">Light</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemedark"
                      name="leftsidebarTheme"
                      value="dark"
                      checked={this.state.sidebarTheme === "dark"}
                      onChange={this.changeLeftSidebarTheme} />
                    <label htmlFor="leftsidebarThemedark">Dark</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemecolored"
                      name="leftsidebarTheme"
                      value="colored"
                      checked={this.state.sidebarTheme === "colored"}
                      onChange={this.changeLeftSidebarTheme}
                    />
                    <label htmlFor="leftsidebarThemecolored">Colored</label>

                  </div>
                  <hr className="mt-1"/>


                </React.Fragment> : null}

                <FormGroup>

                  <span className="mb-2 d-block" id="radio-title">Preloader</span>

                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input checkbox" id="checkbox_1"
                      checked={this.props.isPreloader}
                      onChange={this.changeThemePreloader} />
                    <label className="custom-control-label" htmlFor="checkbox_1">Preloader</label>
                  </div>
                </FormGroup>

                <h6 className="text-center">Choose Layouts</h6>

                <div className="mb-2">
                  <Link to="//skote-v-light.react.themesbrand.com" target="_blank">
                    <img
                      src={layout1}
                      className="img-fluid img-thumbnail"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="mb-2">
                  <Link
                    to="//skote-v-dark.react.themesbrand.com"
                    target="_blank"
                  >
                    <img
                      src={layout2}
                      className="img-fluid img-thumbnail"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="mb-2">
                  <Link
                    to="//skote-v-rtl.react.themesbrand.com"
                    target="_blank"
                  >
                    <img
                      src={layout3}
                      className="img-fluid img-thumbnail"
                      alt=""
                    />
                  </Link>
                </div>

                <Link
                  to="#"
                  className="btn btn-primary btn-block mt-3"
                  target="_blank"
                >
                  <i className="mdi mdi-cart mr-1"></i> Purchase Now
                </Link>
              </div>

            </div>

          </SimpleBar>
        </div>
        <div className="rightbar-overlay"></div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return { ...state.Layout };
};

export default connect(mapStatetoProps, {
  hideRightSidebar,
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader
})(RightSidebar);

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class UiButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: true,
      radio2: false,
      radio3: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="UI Elements" breadcrumbItem="Form Elements" />


            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Default buttons</CardTitle>
                    <CardSubtitle className="mb-3">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</CardSubtitle>
                    <div className="button-items">
                      <Button
                        color="primary"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Primary
                    </Button>
                      <Button
                        color="secondary"
                        className="btn btn-secondary waves-effect"
                      >
                        Secondary
                    </Button>
                      <Button
                        color="success"
                        className="btn btn-success waves-effect waves-light"
                      >
                        Success
                    </Button>
                      <Button
                        color="info"
                        className="btn btn-info waves-effect waves-light"
                      >
                        Info
                    </Button>
                      <Button
                        color="warning"
                        className="btn btn-warning waves-effect waves-light"
                      >
                        Warning
                    </Button>
                      <Button
                        color="danger"
                        className="btn btn-danger waves-effect waves-light"
                      >
                        Danger
                    </Button>
                      <Button
                        color="dark"
                        className="btn btn-dark waves-effect waves-light"
                      >
                        Dark
                    </Button>
                      <Button color="link" className="btn btn-link waves-effect">
                        Link
                    </Button>
                      <Button
                        color="light"
                        className="btn btn-light waves-effect"
                      >
                        Light
                    </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Outline buttons</CardTitle>
                    <CardSubtitle className="mb-3">Add one another property like <code className="highlighter-rouge">outline</code> ones to remove all background images and colors on any button.</CardSubtitle>
                    <div className="button-items">
                      <Button
                        color="primary"
                        outline
                        className="waves-effect waves-light"
                      >
                        Primary
                    </Button>
                      <Button color="secondary" outline className="waves-effect">
                        Secondary
                    </Button>
                      <Button
                        color="success"
                        outline
                        className="waves-effect waves-light"
                      >
                        Success
                    </Button>
                      <Button
                        color="info"
                        outline
                        className="waves-effect waves-light"
                      >
                        Info
                    </Button>
                      <Button
                        color="warning"
                        outline
                        className="waves-effect waves-light"
                      >
                        Warning
                    </Button>
                      <Button
                        color="danger"
                        outline
                        className="waves-effect waves-light"
                      >
                        Danger
                    </Button>
                      <Button
                        color="dark"
                        outline
                        className="waves-effect waves-light"
                      >
                        Dark
                    </Button>
                      <Button color="light" outline className="waves-effect">
                        Light
                    </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Button tags</CardTitle>
                    <CardSubtitle className="mb-3">Use class <code>.btn-rounded</code> for button round border.</CardSubtitle>
                    <div className="button-items">
                      <Link
                        className="btn btn-primary waves-effect waves-light"
                        to="#"
                        role="button"
                      >
                        Link
                    </Link>
                      <Button
                        color="success"
                        className="btn btn-success waves-effect waves-light"
                        type="submit"
                      >
                        Button
                    </Button>
                      <input
                        className="btn btn-info"
                        type="button"
                        value="Input"
                      />
                      <input
                        className="btn btn-danger"
                        type="submit"
                        value="Submit"
                      />
                      <input
                        className="btn btn-warning"
                        type="reset"
                        value="Reset"
                      />
                    </div>  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Buttons with icon</CardTitle>
                    <CardSubtitle className="mb-3">Add icon in button.</CardSubtitle>

                    <div className="button-items">
                      <button type="button" className="btn btn-primary waves-effect waves-light">
                        <i className="bx bx-smile font-size-16 align-middle mr-2"></i> Primary
                                            </button>
                      <button type="button" className="btn btn-success waves-effect waves-light">
                        <i className="bx bx-check-double font-size-16 align-middle mr-2"></i> Success
                                            </button>
                      <button type="button" className="btn btn-warning waves-effect waves-light">
                        <i className="bx bx-error font-size-16 align-middle mr-2"></i> Warning
                                            </button>
                      <button type="button" className="btn btn-danger waves-effect waves-light">
                        <i className="bx bx-block font-size-16 align-middle mr-2"></i> Danger
                                            </button>
                      <button type="button" className="btn btn-dark waves-effect waves-light">
                        <i className="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i> Loading
                                            </button>
                      <button type="button" className="btn btn-light waves-effect">
                        <i className="bx bx-hourglass bx-spin font-size-16 align-middle mr-2"></i> Loading
                                            </button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Buttons Sizes</CardTitle>
                    <CardSubtitle className="mb-3">Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</CardSubtitle>

                    <div className="button-items">
                      <Button
                        color="primary"
                        className="btn btn-primary btn-lg waves-effect waves-light"
                      >
                        Large button
                    </Button>
                      <Button
                        color="secondary"
                        className="btn btn-secondary btn-lg waves-effect"
                      >
                        Large button
                    </Button>
                      <Button
                        color="primary"
                        className="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        Small button
                    </Button>
                      <Button
                        color="secondary"
                        className="btn btn-secondary btn-sm waves-effect"
                      >
                        Small button
                    </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Buttons width</CardTitle>
                    <CardSubtitle className="mb-3">Add <code>.w-xs</code>, <code>.w-sm</code>, <code>.w-md</code> and <code> .w-lg</code> className for additional buttons width.</CardSubtitle>

                    <div className="button-items">
                      <button type="button" className="btn btn-primary w-xs waves-effect waves-light">Xs</button>
                      <button type="button" className="btn btn-danger w-sm waves-effect waves-light">Small</button>
                      <button type="button" className="btn btn-warning w-md waves-effect waves-light">Medium</button>
                      <button type="button" className="btn btn-success w-lg waves-effect waves-light">Large</button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Button tags</CardTitle>
                    <CardSubtitle className="mb-3">The <code className="highlighter-rouge">.btn</code>
                                            classes are designed to be used with the <code
                        className="highlighter-rouge">&lt;button&gt;</code> element.
                                            However, you can also use these classes on <code
                        className="highlighter-rouge">&lt;Link&gt;</code> or <code
                          className="highlighter-rouge">&lt;input&gt;</code> elements (though
                                            some browsers may apply a slightly different rendering).</CardSubtitle>

                    <div className="button-items">
                      <Link
                        className="btn btn-primary waves-effect waves-light"
                        to="#"
                        role="button"
                      >
                        Link
                    </Link>
                      <Button
                        color="success"
                        className="btn btn-success waves-effect waves-light"
                        type="submit"
                      >
                        Button
                    </Button>
                      <input
                        className="btn btn-info"
                        type="button"
                        value="Input"
                      />
                      <input
                        className="btn btn-danger"
                        type="submit"
                        value="Submit"
                      />
                      <input
                        className="btn btn-warning"
                        type="reset"
                        value="Reset"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Toggle states</CardTitle>
                    <CardSubtitle className="mb-3">Add <code className="highlighter-rouge">data-toggle="button"</code>
                                            to toggle a button’s <code className="highlighter-rouge">active</code>
                                            state. If you’re pre-toggling a button, you must manually add the <code
                        className="highlighter-rouge">.active</code> class
                                            <strong>and</strong> <code
                        className="highlighter-rouge">aria-pressed="true"</code> to the
                                            <code className="highlighter-rouge">&lt;button&gt;</code>.
                                        </CardSubtitle>

                    <div className="button-items">
                      <Button
                        color="primary"
                        className="btn btn-primary waves-effect waves-light"
                        data-toggle="button"
                        aria-pressed="false"
                      >
                        Single toggle
                    </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Block Buttons</CardTitle>
                    <CardSubtitle className="mb-3">Create block level buttons—those that span the full width of a parent—by adding <code
                      className="highlighter-rouge">.btn-block</code>.</CardSubtitle>

                    <div className="button-items">
                      <Button
                        color="primary"
                        className="btn btn-primary btn-lg btn-block waves-effect waves-light"
                      >
                        Block level button
                    </Button>
                      <Button
                        color="secondary"
                        className="btn btn-secondary btn-sm btn-block waves-effect"
                      >
                        Block level button
                    </Button>
                    </div>
                  </CardBody>
                </Card>

              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Checkbox & Radio Buttons</CardTitle>
                    <CardSubtitle className="mb-3">Bootstrap’s <code
                      className="highlighter-rouge">.button</code> styles can be applied to
                                            other elements, such as <code className="highlighter-rouge">
                        &lt;label&gt;</code>s, to provide checkbox or radio style button
                                            toggling. Add <code
                        className="highlighter-rouge">data-toggle="buttons"</code> to a
                                            <code className="highlighter-rouge">.btn-group</code> containing those
                                            modified buttons to enable toggling in their respective styles.</CardSubtitle>

                    <Row>
                      <Col xl={6}>
                        <div
                          className="btn-group btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-secondary active">
                            <input type="checkbox" defaultChecked /> Checked-1
                    </label>
                          <label className="btn btn-secondary">
                            <input type="checkbox" /> Checked-2
                    </label>
                          <label className="btn btn-secondary">
                            <input type="checkbox" /> Checked-3
                    </label>
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div
                          className="btn-group btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label
                            className={
                              this.state.radio1
                                ? "btn btn-primary active"
                                : "btn btn-primary"
                            }
                          >
                            <input
                              type="radio"
                              name="options"
                              id="option1"
                              onClick={() =>
                                this.setState({
                                  radio1: true,
                                  radio2: false,
                                  radio3: false
                                })
                              }
                            />{" "}
                      Active
                    </label>
                          <label
                            className={
                              this.state.radio2
                                ? "btn btn-primary active"
                                : "btn btn-primary"
                            }
                          >
                            <input
                              type="radio"
                              name="options"
                              id="option2"
                              onClick={() =>
                                this.setState({
                                  radio2: true,
                                  radio1: false,
                                  radio3: false
                                })
                              }
                            />{" "}
                      Radio
                    </label>
                          <label
                            className={
                              this.state.radio3
                                ? "btn btn-primary active"
                                : "btn btn-primary"
                            }
                          >
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              onClick={() =>
                                this.setState({
                                  radio3: true,
                                  radio2: false,
                                  radio1: false
                                })
                              }
                            />{" "}
                      Radio
                    </label>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Button group</CardTitle>
                    <CardSubtitle className="mb-3">Wrap a series of buttons with <code
                      className="highlighter-rouge">.btn</code> in <code
                        className="highlighter-rouge">.btn-group</code>.</CardSubtitle>

                    <Row>
                      <Col md={6}>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Button color="secondary" className="btn btn-secondary">
                            Left
                    </Button>
                          <Button color="secondary" className="btn btn-secondary">
                            Middle
                    </Button>
                          <Button color="secondary" className="btn btn-secondary">
                            Right
                    </Button>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="btn-group mt-4 mt-md-0" role="group" aria-label="Basic example">
                          <button type="button" className="btn btn-secondary"><i className="bx bx-menu-alt-right"></i></button>
                          <button type="button" className="btn btn-secondary"><i className="bx bx-menu"></i></button>
                          <button type="button" className="btn btn-secondary"><i className="bx bx-menu-alt-left"></i></button>
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Button toolbar</CardTitle>
                    <CardSubtitle className="mb-3">Combine sets of button groups into
                    button toolbars for more complex components. Use utility classNamees as
                                            needed to space out groups, buttons, and more.</CardSubtitle>

                    <div
                      className="btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <Button color="secondary" className="btn btn-secondary">
                          1
                      </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          2
                      </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          3
                      </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          4
                      </Button>
                      </div>
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <Button color="secondary" className="btn btn-secondary">
                          5
                      </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          6
                      </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          7
                      </Button>
                      </div>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Third group"
                      >
                        <Button color="secondary" className="btn btn-secondary">
                          8
                      </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Sizing</CardTitle>
                    <CardSubtitle className="mb-3">Instead of applying button sizing
                                            classes to every button in a group, just add <code
                        className="highlighter-rouge">.btn-group-*</code> to each <code
                          className="highlighter-rouge">.btn-group</code>, including each one
                                            when nesting multiple groups.</CardSubtitle>

                    <div
                      className="btn-group btn-group-lg"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        Left
                    </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        Middle
                    </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        Right
                    </Button>
                    </div>

                    <br />

                    <div
                      className="btn-group mt-2"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        Left
                    </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        Middle
                    </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        Right
                    </Button>
                    </div>

                    <br />

                    <div
                      className="btn-group btn-group-sm mt-2"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        Left
                    </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        Middle
                    </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        Right
                    </Button>
                    </div>

                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Vertical variation</CardTitle>
                    <CardSubtitle className="mb-3">Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.</CardSubtitle>

                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      <Button
                        type="button"
                        color="secondary"
                        className="btn btn-secondary"
                      >
                        Button
                    </Button>

                      <ButtonDropdown
                        isOpen={this.state.drp_link}
                        toggle={() =>
                          this.setState({ drp_link: !this.state.drp_link })
                        }
                      >
                        <DropdownToggle caret color="secondary">
                          Dropdown <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Dropdown link</DropdownItem>
                          <DropdownItem>Dropdown link</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>

                      <Button
                        color="secondary"
                        type="button"
                        className="btn btn-secondary"
                      >
                        Button
                    </Button>
                      <Button
                        color="secondary"
                        type="button"
                        className="btn btn-secondary"
                      >
                        Button
                    </Button>
                    </div>

                  </CardBody>
                </Card>
              </Col>
            </Row>

          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default UiButtons;

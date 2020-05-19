import React, { Component } from "react";
import {
  Col, Row, Card, CardBody, Button, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, ButtonDropdown, CardTitle, CardSubtitle
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class UiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="UI Elements" breadcrumbItem="Dropdowns" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>

                    <CardTitle>Single button dropdowns</CardTitle>
                    <CardSubtitle className="mb-3">Any single <code
                      className="highlighter-rouge">.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either <code className="highlighter-rouge">&lt;button&gt;</code> elements:</CardSubtitle>
                    <Row>
                      <Col sm={6}>
                        <Dropdown
                          isOpen={this.state.singlebtn}
                          toggle={() =>
                            this.setState({ singlebtn: !this.state.singlebtn })
                          }
                        >
                          <DropdownToggle className="btn btn-secondary" caret>
                            Dropdown button{" "}
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                      <Col sm={6}>
                        <Dropdown
                          isOpen={this.state.singlebtn1}
                          toggle={() =>
                            this.setState({ singlebtn1: !this.state.singlebtn1 })
                          }
                        >
                          <DropdownToggle className="btn btn-secondary" caret>
                            Dropdown Link <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Variant</CardTitle>
                    <CardSubtitle className="mb-3">The best part is you can do this with any button variant, too:</CardSubtitle>

                    <div className="d-flex">
                      <Dropdown
                        isOpen={this.state.btnprimary1}
                        toggle={() =>
                          this.setState({ btnprimary1: !this.state.btnprimary1 })
                        }
                      >
                        <DropdownToggle tag="button" className="btn btn-primary">
                          Primary
                      </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>{" "}
                    &nbsp;
                    <Dropdown
                        isOpen={this.state.btnsuccess1}
                        toggle={() =>
                          this.setState({ btnsuccess1: !this.state.btnsuccess1 })
                        }
                      >
                        <DropdownToggle tag="button" className="btn btn-success">
                          Success
                      </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    &nbsp;
                    <Dropdown
                        isOpen={this.state.btnInfo1}
                        toggle={() =>
                          this.setState({ btnInfo1: !this.state.btnInfo1 })
                        }
                      >
                        <DropdownToggle tag="button" className="btn btn-info">
                          Info
                      </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    &nbsp;
                    <Dropdown
                        isOpen={this.state.btnWarning1}
                        toggle={() =>
                          this.setState({ btnWarning1: !this.state.btnWarning1 })
                        }
                      >
                        <DropdownToggle tag="button" className="btn btn-warning">
                          Warning
                      </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    &nbsp;
                    <Dropdown
                        isOpen={this.state.btnDanger1}
                        toggle={() =>
                          this.setState({ btnDanger1: !this.state.btnDanger1 })
                        }
                      >
                        <DropdownToggle tag="button" className="btn btn-danger">
                          Danger
                      </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Split button dropdowns</CardTitle>
                    <CardSubtitle className="mb-3">The best part is you can do this with any button variant, too:</CardSubtitle>

                    <div className="d-flex">
                      <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_primary1}
                          toggle={() =>
                            this.setState({
                              drp_primary1: !this.state.drp_primary1
                            })
                          }
                        >
                          <Button id="caret" color="primary">
                            Primary
                        </Button>
                          <DropdownToggle caret color="primary">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_secondary1}
                          toggle={() =>
                            this.setState({
                              drp_secondary1: !this.state.drp_secondary1
                            })
                          }
                        >
                          <Button id="caret" color="secondary">
                            Secondary
                        </Button>
                          <DropdownToggle caret color="secondary">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_success1}
                          toggle={() =>
                            this.setState({
                              drp_success1: !this.state.drp_success1
                            })
                          }
                        >
                          <Button id="caret" color="success">
                            Success
                        </Button>
                          <DropdownToggle caret color="success">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_info1}
                          toggle={() =>
                            this.setState({ drp_info1: !this.state.drp_info1 })
                          }
                        >
                          <Button id="caret" color="info">
                            Info
                        </Button>
                          <DropdownToggle caret color="info">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    &nbsp;

                  </div>

                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_warning1}
                        toggle={() =>
                          this.setState({
                            drp_warning1: !this.state.drp_warning1
                          })
                        }
                      >
                        <Button id="caret" color="warning">
                          Warning
                        </Button>
                        <DropdownToggle caret color="warning">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_danger1}
                        toggle={() =>
                          this.setState({
                            drp_danger1: !this.state.drp_danger1
                          })
                        }
                      >
                        <Button id="caret" color="danger">
                          Danger
                        </Button>
                        <DropdownToggle caret color="danger">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Sizing</CardTitle>
                    <CardSubtitle className="mb-3"> Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</CardSubtitle>
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary}
                        toggle={() =>
                          this.setState({
                            drp_secondary: !this.state.drp_secondary
                          })
                        }
                      >
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-lg"
                        >
                          Large button &nbsp;{" "}
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary_lg}
                        toggle={() =>
                          this.setState({
                            drp_secondary_lg: !this.state.drp_secondary_lg
                          })
                        }
                      >
                        <Button className="btn btn-secondary">
                          {" "}
                        Large button &nbsp;
                      </Button>
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-lg"
                        >
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary_sm}
                        toggle={() =>
                          this.setState({
                            drp_secondary_sm: !this.state.drp_secondary_sm
                          })
                        }
                      >
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-sm"
                        >
                          Small button &nbsp;{" "}
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary_sm1}
                        toggle={() =>
                          this.setState({
                            drp_secondary_sm1: !this.state.drp_secondary_sm1
                          })
                        }
                      >
                        <Button className="btn btn-secondary btn-sm">
                          {" "}
                        Small button &nbsp;
                      </Button>
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>



            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Dropup variation</CardTitle>
                    <CardSubtitle className="mb-3">Trigger dropdown menus above elements by adding <code className="highlighter-rouge">.dropup</code> to the parent element.</CardSubtitle>
                    <div className="d-flex">
                      <Dropdown
                        isOpen={this.state.dropup1}
                        direction="up"
                        toggle={() =>
                          this.setState({ dropup1: !this.state.dropup1 })
                        }
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                          Dropup <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                        direction="up"
                        isOpen={this.state.drp_up11}
                        toggle={() =>
                          this.setState({
                            drp_up11: !this.state.drp_up11
                          })
                        }
                      >
                        <Button id="caret" color="secondary">
                          Split dropup
                      </Button>
                        <DropdownToggle caret color="secondary">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Menu alignment</CardTitle>
                    <CardSubtitle className="mb-3">Add <code className="highlighter-rouge">.dropdown-menu-right</code> to a <code className="highlighter-rouge">.dropdown-menu</code> to right align the dropdown menu.</CardSubtitle>
                    <ButtonDropdown
                      isOpen={this.state.drop_align}
                      direction="right"
                      toggle={() =>
                        this.setState({ drop_align: !this.state.drop_align })
                      }
                    >
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary"
                      >
                        Menu is right-aligned{" "}
                        <i className="mdi mdi-chevron-right"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-right-custom">
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </CardBody>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Dropright variation</CardTitle>
                    <CardSubtitle className="mb-3">Trigger dropdown menus at the right of the elements by adding <code>.dropright</code> to the parent element.</CardSubtitle>

                    <div className="d-flex">
                      <Dropdown
                        isOpen={this.state.info_dropup1}
                        direction="right"
                        toggle={() =>
                          this.setState({
                            info_dropup1: !this.state.info_dropup1
                          })
                        }
                      >
                        <DropdownToggle className="btn btn-info" caret>
                          Dropright <i className="mdi mdi-chevron-right"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                        direction="right"
                        isOpen={this.state.infodrp_up11}
                        toggle={() =>
                          this.setState({
                            infodrp_up11: !this.state.infodrp_up11
                          })
                        }
                      >
                        <Button id="caret" color="info">
                          Split dropright
                      </Button>
                        <DropdownToggle caret color="info">
                          <i className="mdi mdi-chevron-right"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Dropleft variation</CardTitle>
                    <CardSubtitle className="mb-3">Trigger dropdown menus at the right of the elements by adding <code>.dropleft</code> to the parent element.</CardSubtitle>

                    <div className="d-flex">
                      <Dropdown
                        isOpen={this.state.info_dropup111}
                        direction="left"
                        toggle={() =>
                          this.setState({
                            info_dropup111: !this.state.info_dropup111
                          })
                        }
                      >
                        <DropdownToggle className="btn btn-info" caret>
                          Dropleft <i className="mdi mdi-chevron-left"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                        direction="left"
                        isOpen={this.state.infodrp_up1111}
                        toggle={() =>
                          this.setState({
                            infodrp_up1111: !this.state.infodrp_up1111
                          })
                        }
                      >
                        <Button id="caret" color="info">
                          Split dropleft
                      </Button>
                        <DropdownToggle caret color="info">
                          <i className="mdi mdi-chevron-left"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
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

export default UiDropdown;

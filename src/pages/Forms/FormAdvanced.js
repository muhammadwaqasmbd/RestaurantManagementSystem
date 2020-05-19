import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Form, FormGroup, InputGroup, Label, Input, Button } from "reactstrap";

import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import Select from "react-select";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" }
    ]
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" }
    ]
  }
];

class FormAdvanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      colorRgb: "red",
      colorCust: "red",
      colorHor: "#fffff",

      default_date: new Date(),
      default: false,
      start_date: new Date(),
      monthDate: new Date(),
      yearDate: new Date(),
      end_date: new Date(),
      date: new Date(),

      disbadge: true,
      disthresh: false,
      placementbadge: false,
      textcount: 0,
      optioncount: 0,
      placementcount: 0,
      advanceclass: "badgecount",

      switch1: true,
      switch2: true,
      switch3: true,
      switch4: true,
      switch5: true,
      switch6: true,
      switch7: true,
      switch8: true,
      switch9: true,
      switch11: true,
      switch12: true,
      switch13: true,
      switch14: true,
      switch15: true,

      data_attr: 56,
      postfix: 20,
      prefix: 25,
      empty_val: 0,
      not_attr: 15,
      explicit_val: 33,

      selectedGroup: null,
      selectedMulti: null
    };
    //colorpicker
    this.onDrag = this.onDrag.bind(this);
    this.onDragRgb = this.onDragRgb.bind(this);
    this.onDragCust = this.onDragCust.bind(this);
    this.handleHor = this.handleHor.bind(this);

    // DatePicker
    this.handleDefault = this.handleDefault.bind(this);
    this.handleAutoClose = this.handleAutoClose.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

    // Bootsrap Maxlength
    this.threshholdchange = this.threshholdchange.bind(this);
    this.threshholdDefault = this.threshholdDefault.bind(this);
    this.optionchange = this.optionchange.bind(this);
    this.placementchange = this.placementchange.bind(this);
    this.textareachange = this.textareachange.bind(this);

    this.handleSelectGroup = this.handleSelectGroup.bind(this);
    this.handleMulti = this.handleMulti.bind(this);
  }

  //Color Picker
  onDrag(c1) {
    this.setState({ color: c1 });
  }
  onDragRgb(c1) {
    this.setState({ colorRgb: c1 });
  }
  onDragCust(c1) {
    this.setState({ colorCust: c1 });
  }
  handleHor = color => {
    this.setState({ colorHor: color.hex });
  };

  //DatePicker
  handleDefault(date) {
    this.setState({ default_date: date });
  }
  handleAutoClose(date) {
    this.setState({ auto_close: date });
  }
  handleStart(date) {
    this.setState({ start_date: date });
  }
  handleEnd(date) {
    this.setState({ end_date: date });
  }
  handleMonthChange(date) {
    this.setState({ monthDate: date });
  }
  handleYearChange(date) {
    this.setState({ yearDate: date });
  }

  //Bootstrap Maxlength
  threshholdchange(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ disthresh: true });
    } else {
      this.setState({ disthresh: false });
    }
    this.setState({ threshholdcount: event.target.value.length });
  }

  threshholdDefault(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ disDefault: true });
    } else {
      this.setState({ disDefault: false });
    }
    this.setState({ threshholdDefault: event.target.value.length });
  }

  optionchange(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ disbadge: true });
    } else {
      this.setState({ disbadge: false });
    }
    if (count > 24) {
      this.setState({ advanceclass: "badgecountextra" });
    } else {
      this.setState({ advanceclass: "badgecount" });
    }
    this.setState({ optioncount: event.target.value.length });
  }

  placementchange(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ placementbadge: true });
    } else {
      this.setState({ placementbadge: false });
    }
    this.setState({ placementcount: event.target.value.length });
  }

  textareachange(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ textareabadge: true });
    } else {
      this.setState({ textareabadge: false });
    }
    this.setState({ textcount: event.target.value.length });
  }

  //Select
  handleSelectGroup = selectedGroup => {
    this.setState({ selectedGroup });
  };
  handleMulti = selectedMulti => {
    this.setState({ selectedMulti });
  };

  render() {
    const { selectedGroup } = this.state;
    const { selectedMulti } = this.state;

    const Offsymbol = props => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            color: "#fff",
            paddingRight: 2
          }}
        >
          {" "}
          No
        </div>
      );
    };

    const OnSymbol = props => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            color: "#fff",
            paddingRight: 2
          }}
        >
          {" "}
          Yes
        </div>
      );
    };

    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">


            <Breadcrumbs title="Form" breadcrumbItem="Form Advanced" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Select2</CardTitle>
                    <CardSubtitle className="mb-3">
                      A mobile and touch friendly input spinner component for Bootstrap
                    </CardSubtitle>
                    <Form>
                      <FormGroup className="select2-container">
                        <Label>Single Select</Label>
                        <Select
                          value={selectedGroup}
                          onChange={this.handleSelectGroup}
                          options={optionGroup}
                          classNamePrefix="select2-selection"
                        />
                      </FormGroup>
                      <FormGroup className="mb-0 select2-container">
                        <Label>Multiple Select</Label>
                        <Select
                          value={selectedMulti}
                          isMulti={true}
                          onChange={this.handleMulti}
                          options={optionGroup}
                          classNamePrefix="select2-selection"
                        />
                      </FormGroup>
                    </Form>{" "}
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>React Switch</CardTitle>
                    <CardSubtitle className="mb-3">
                      {" "} Here are a few types of switches.{" "}
                    </CardSubtitle>
                    <div>
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#626ed4"
                        onChange={() =>
                          this.setState({ switch1: !this.state.switch1 })
                        }
                        checked={this.state.switch1}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#a2a2a2"
                        onChange={() =>
                          this.setState({ switch2: !this.state.switch2 })
                        }
                        checked={this.state.switch2}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#02a499"
                        onChange={() =>
                          this.setState({ switch3: !this.state.switch3 })
                        }
                        checked={this.state.switch3}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#626ed4"
                        onChange={() =>
                          this.setState({ switch4: !this.state.switch4 })
                        }
                        checked={this.state.switch4}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#02a499"
                        onChange={() =>
                          this.setState({ switch5: !this.state.switch5 })
                        }
                        checked={this.state.switch5}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#38a4f8"
                        onChange={() =>
                          this.setState({ switch6: !this.state.switch6 })
                        }
                        checked={this.state.switch6}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#f8b425"
                        onChange={() =>
                          this.setState({ switch7: !this.state.switch7 })
                        }
                        checked={this.state.switch7}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#ec4561"
                        onChange={() =>
                          this.setState({ switch8: !this.state.switch8 })
                        }
                        checked={this.state.switch8}
                      />
                      &nbsp;
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        onColor="#2a3142"
                        onChange={() =>
                          this.setState({ switch9: !this.state.switch9 })
                        }
                        checked={this.state.switch9}
                      />
                    </div>

                    <h5 className="mt-4 font-size-14 mb-3">Square switch</h5>
                    <div className="d-flex">
                      <div className="square-switch">
                        <input
                          type="checkbox"
                          id="square-switch1"
                          switch="none"
                          checked={this.state.sq1}
                          onChange={() => this.setState({ sq1: !this.state.sq1 })}
                        />
                        <label
                          htmlFor="square-switch1"
                          data-on-label="On"
                          data-off-label="Off"
                        ></label>
                      </div>
                      <div className="square-switch">
                        <input
                          type="checkbox"
                          id="square-switch2"
                          switch="info"
                          checked={this.state.sq2}
                          onChange={() => this.setState({ sq2: !this.state.sq2 })}
                        />
                        <label
                          htmlFor="square-switch2"
                          data-on-label="Yes"
                          data-off-label="No"
                        ></label>
                      </div>
                      <div className="square-switch">
                        <input
                          type="checkbox"
                          id="square-switch3"
                          switch="bool"
                          checked={this.state.sq3}
                          onChange={() => this.setState({ sq3: !this.state.sq3 })}
                        />
                        <label
                          htmlFor="square-switch3"
                          data-on-label="Yes"
                          data-off-label="No"
                        ></label>
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
                    <CardTitle>Colorpicker</CardTitle>
                    <CardSubtitle className="mb-3">
                      Fancy and customizable colorpicker plugin for Twitter Bootstrap.
                    </CardSubtitle>

                    <Form action="#">
                      <FormGroup>
                        <Label>Simple input field</Label>
                        <Input
                          type="text"
                          className="colorpicker-default"
                          value={this.state.color}
                          onClick={() =>
                            this.setState({
                              simple_color: !this.state.simple_color
                            })
                          }
                        />
                        {this.state.simple_color ? (
                          <ColorPicker
                            saturationHeight={100}
                            saturationWidth={100}
                            value={this.state.color}
                            onDrag={this.onDrag.bind(this)}
                          />
                        ) : null}
                      </FormGroup>

                      <FormGroup>
                        <Label>Horizontal mode</Label>
                        <Input
                          type="text"
                          onClick={() =>
                            this.setState({
                              simple_color2: !this.state.simple_color2
                            })
                          }
                          value={this.state.colorHor}
                        />
                        {this.state.simple_color2 ? (
                          <SketchPicker
                            color="#fff"
                            value={this.state.simple_color2}
                            width="160px"
                            onChangeComplete={this.handleHor}
                          />
                        ) : null}
                      </FormGroup>

                      <FormGroup className="mb-0">
                        <Label>Customized widget size</Label>
                        <Input
                          type="text"
                          className="colorpicker-large"
                          value={this.state.colorCust}
                          onClick={() =>
                            this.setState({
                              simple_color3: !this.state.simple_color3
                            })
                          }
                        />
                        {this.state.simple_color3 ? (
                          <React.Fragment>
                            <ColorPicker
                              saturationHeight={100}
                              saturationWidth={100}
                              value={this.state.colorCust}
                              onDrag={this.onDragCust.bind(this)}
                            />
                            <div
                              style={{
                                backgroundColor: this.state.colorCust,
                                width: "140px",
                                padding: "5px"
                              }}
                            ></div>
                          </React.Fragment>
                        ) : null}
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>React Datepicker</CardTitle>
                    <CardSubtitle className="mb-3">
                      {" "} Examples of twitter bootstrap datepicker.{" "}
                    </CardSubtitle>
                    <Form action="#">
                      <FormGroup className="forminput">
                        <Label>Default Functionality</Label>
                        <InputGroup>
                          <DatePicker
                            className="form-control"
                            selected={this.state.default_date}
                            onChange={this.handleDefault}
                          />
                        </InputGroup>
                      </FormGroup>

                      <Row>
                        <Col lg={6}> <FormGroup className="forminput">
                          <Label>Month View</Label>
                          <InputGroup>
                            <DatePicker
                              selected={this.state.monthDate}
                              className="form-control"
                              onChange={this.handleMonthChange}
                              showMonthDropdown
                            />
                          </InputGroup>
                        </FormGroup></Col>
                        <Col lg={6}>  <FormGroup className="forminput">
                          <Label>Year View</Label>
                          <InputGroup>
                            <DatePicker
                              selected={this.state.yearDate}
                              className="form-control"
                              onChange={this.handleYearChange}
                              showYearDropdown
                            />
                          </InputGroup>
                        </FormGroup></Col>
                      </Row>
                      <FormGroup className="mb-0 forminput">
                        <Label>Date Range</Label>
                        <Row>
                          <Col lg={6}>
                            <DatePicker
                              selected={this.state.start_date}
                              selectsStart
                              className="form-control"
                              placeholderText="From"
                              startDate={this.state.start_date}
                              endDate={this.state.end_date}
                              onChange={this.handleStart}
                            />
                          </Col>
                          <Col lg={6}>
                            <DatePicker
                              selected={this.state.end_date}
                              selectsEnd
                              className="form-control"
                              startDate={this.state.start_date}
                              endDate={this.state.end_date}
                              onChange={this.handleEnd}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>{" "}
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Bootstrap MaxLength</CardTitle>
                    <CardSubtitle className="mb-3">
                      This plugin integrates by default with Twitter bootstrap
                      using badges to display the maximum lenght of the field
                      where the user is inserting text.{" "}
                    </CardSubtitle>

                    <Label>Default usage</Label>
                    <p className="text-muted m-b-15">
                      The badge will show up by default when the remaining chars
                      are 10 or less:
                    </p>
                    <Input
                      type="text"
                      maxLength="25"
                      name="defaultconfig"
                      onChange={this.threshholdDefault}
                      id="defaultconfig"
                    />
                    {this.state.disDefault ? (
                      <span className="badgecount badge badge-success">
                        {this.state.threshholdDefault} / 25{" "}
                      </span>
                    ) : null}

                    <div className="mt-3">
                      <Label>Threshold value</Label>
                      <p className="text-muted m-b-15">
                        Do you want the badge to show up when there are 20 chars
                        or less? Use the <code>threshold</code> option:
                      </p>
                      <Input
                        type="text"
                        maxLength="25"
                        onChange={this.threshholdchange}
                        name="thresholdconfig"
                        id="thresholdconfig"
                      />
                      {this.state.disthresh ? (
                        <span className="badgecount badge badge-success">
                          {this.state.threshholdcount} / 25{" "}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3">
                      <Label>All the options</Label>
                      <p className="text-muted m-b-15">
                        Please note: if the <code>alwaysShow</code> option is
                        enabled, the <code>threshold</code> option is ignored.
                      </p>
                      <Input
                        type="text"
                        maxLength="25"
                        onChange={this.optionchange}
                        name="alloptions"
                        id="alloptions"
                      />
                      {this.state.disbadge ? (
                        <span className="badgecount">
                          You Types <span className="badge badge-success">{this.state.optioncount}</span> out of <span className="badge badge-success">25</span> chars
                          available
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3">
                      <Label>Position</Label>
                      <p className="text-muted m-b-15">
                        All you need to do is specify the <code>placement</code>{" "}
                        option, with one of those strings. If none is specified,
                        the positioning will be defauted to 'bottom'.
                      </p>
                      <Input
                        type="text"
                        maxLength="25"
                        onChange={this.placementchange}
                        name="placement"
                        id="placement"
                      />
                      {this.state.placementbadge ? (
                        <span style={{ float: "right" }} className="badgecount badge badge-success">
                          {this.state.placementcount} / 25{" "}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3">
                      <Label>textareas</Label>
                      <p className="text-muted m-b-15">
                        Bootstrap maxlength supports textarea as well as inputs.
                        Even on old IE.
                      </p>
                      <Input
                        type="textarea"
                        id="textarea"
                        onChange={this.textareachange}
                        maxLength="225"
                        rows="3"
                        placeholder="This textarea has a limit of 225 chars."
                      />
                      {this.state.textareabadge ? (
                        <span className="badgecount badge badge-success">
                          {" "}
                          {this.state.textcount} / 225{" "}
                        </span>
                      ) : null}
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Bootstrap TouchSpin</CardTitle>
                    <CardSubtitle className="mb-3">
                      A mobile and touch friendly input spinner component for
                      Bootstrap
                    </CardSubtitle>
                    <Form>
                      <FormGroup>
                        <Label>Using data attributes</Label>
                        <InputGroup>
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                data_attr: this.state.data_attr - 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-minus"></i>
                            </Button>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            value={this.state.data_attr}
                            placeholder="number"
                          />
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                data_attr: this.state.data_attr + 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-plus"></i>
                            </Button>
                          </div>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label>Example with postfix (large)</Label>
                        <InputGroup>
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({ postfix: this.state.postfix - 1 })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-minus"></i>
                            </Button>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            value={this.state.postfix}
                            placeholder="number"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">%</span>
                            <Button
                              type="button"
                              onClick={() =>
                                this.setState({
                                  postfix: this.state.postfix + 1
                                })
                              }
                              color="primary"
                            >
                              <i className="mdi mdi-plus"></i>
                            </Button>
                          </div>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label>Init with empty value:</Label>
                        <InputGroup>
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                empty_val: this.state.empty_val - 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-minus"></i>
                            </Button>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            value={this.state.empty_val}
                            placeholder="number"
                          />
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                empty_val: this.state.empty_val + 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-plus"></i>
                            </Button>
                          </div>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          Value attribute is not set (applying settings.initval)
                        </Label>
                        <InputGroup>
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                not_attr: this.state.not_attr - 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-minus"></i>
                            </Button>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            value={this.state.not_attr}
                            placeholder="number"
                          />
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                not_attr: this.state.not_attr + 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-plus"></i>
                            </Button>
                          </div>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <Label>
                          Value is set explicitly to 33 (skipping
                          settings.initval){" "}
                        </Label>
                        <InputGroup>
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                explicit_val: this.state.explicit_val - 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-minus"></i>
                            </Button>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            value={this.state.explicit_val}
                            placeholder="number"
                          />
                          <div
                            className="input-group-append"
                            onClick={() =>
                              this.setState({
                                explicit_val: this.state.explicit_val + 1
                              })
                            }
                          >
                            <Button type="button" color="primary">
                              <i className="mdi mdi-plus"></i>
                            </Button>
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Form>{" "}
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

export default FormAdvanced;

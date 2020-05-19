import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, Table, Input, Form, FormGroup, Label, Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard";

//Import Images
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";


class TasksKanban extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          id: 1,
          title: 'Upcoming',
          cards: [
            {
              id: 1,
              content: {
                title: "Topnav layout design", date: "14 Oct, 2019", img: avatar4, text: "3 +", budget: 145, status: "Waiting", class: "secondary"
              }
            },
            {
              id: 2,
              content: {
                title: "Create a New Landing UI", date: "15 Oct, 2019", img: avatar5, text: "3 +", budget: 112, status: "Approved", class: "primary"
              }
            },
            {
              id: 3,
              content: {
                title: "Create a Skote Logo", date: "16 Oct, 2019", img: avatar4, text: "F", budget: 86, status: "Waiting", class: "secondary"
              }
            },
          ]
        },
        {
          id: 2,
          title: 'In Progress',
          cards: [
            {
              id: 1,
              content: {
                title: "Brand logo design", date: "12 Oct, 2019", img: avatar4, text: "S", budget: 132, status: "Complete", class: "success"
              }
            },
            {
              id: 2,
              content: {
                title: "Create a Blog Template UI", date: "18 Oct, 2019", img: avatar5, text: "K", budget: 103, status: "Pending", class: "pending"
              }
            },
            {
              id: 3,
              content: {
                title: "Skote Dashboard UI", date: "14 Oct, 2019", img: avatar4, text: "F", budget: 94, status: "Complete", class: "success"
              }
            },

          ]
        },
        {
          id: 3,
          title: 'Completed',
          cards: [
            {
              id: 1,
              content: {
                title: "Redesign - Landing page", date: "10 Oct, 2019", img: avatar4, text: "S", budget: 145, status: "Complete", class: "success"
              }
            },
            {
              id: 2,
              content: {
                title: "Multipurpose Landing", date: "9 Oct, 2019", img: avatar5, text: "K", budget: 92, status: "Complete", class: "success"
              }
            },
            {
              id: 3,
              content: {
                title: "Skote landing Psd", date: "15 Oct, 2019", img: avatar4, text: "F", budget: 86, status: "Waiting", class: "secondary"
              }
            },

          ]
        },

      ]
    }
  }

  render() {
    // console.log("From kanban")
    // console.log(this.state.columns)
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>

            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Tasks" breadcrumbItem="Kanban Board" />

            <Row>
              <UncontrolledBoard board={this.state} content={this.state.columns} />
            </Row>

          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default TasksKanban;
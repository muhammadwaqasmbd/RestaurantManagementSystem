import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard";

//Import Images
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

import "./tasks.scss";

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
							id: 11,
							content: {
								title: "Multipurpose  -  layout design", date: "14 Oct, 2019", img: avatar4, text: "3 +", budget: 145, status: "Waiting", class: "secondary"
							}
						},
						{
							id: 12,
							content: {
								title: "Multipurpose  - d a New Landing UI", date: "15 Oct, 2019", img: avatar5, text: "3 +", budget: 112, status: "Approved", class: "primary"
							}
						},
						{
							id: 13,
							content: {
								title: "Variously  - d a Skote Logo", date: "16 Oct, 2019", img: avatar4, text: "F", budget: 86, status: "Waiting", class: "secondary"
							}
						},
					]
				},
				{
					id: 2,
					title: 'In Progress',
					cards: [
						{
							id: 21,
							content: {
								title: "Branded  -  logo design", date: "12 Oct, 2019", img: avatar4, text: "S", budget: 132, status: "Complete", class: "success"
							}
						},
						{
							id: 22,
							content: {
								title: "Create  - d a Blog Template UI", date: "18 Oct, 2019", img: avatar5, text: "K", budget: 103, status: "Pending", class: "pending"
							}
						},
						{
							id: 23,
							content: {
								title: "Multipurpose Dashboard UI", date: "14 Oct, 2019", img: avatar4, text: "F", budget: 94, status: "Complete", class: "success"
							}
						},

					]
				},
				{
					id: 3,
					title: 'Completed',
					cards: [
						{
							id: 31,
							content: {
								title: "Redesign - Landing page", date: "10 Oct, 2019", img: avatar4, text: "S", budget: 145, status: "Complete", class: "success"
							}
						},
						{
							id: 32,
							content: {
								title: "Multipurpose Landing", date: "9 Oct, 2019", img: avatar5, text: "K", budget: 92, status: "Complete", class: "success"
							}
						},
						{
							id: 33,
							content: {
								title: "Multipurpose Landing", date: "15 Oct, 2019", img: avatar4, text: "F", budget: 86, status: "Waiting", class: "secondary"
							}
						},

					]
				}
			]
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="page-content">
					<Container fluid>
						{/* Render Breadcrumbs */}
						<Breadcrumbs title="Tasks" breadcrumbItem="Kanban Board" />
						<UncontrolledBoard board={this.state} content={this.state.columns} />
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default TasksKanban;
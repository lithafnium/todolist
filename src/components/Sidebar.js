import React from 'react';
import {FaChevronDown, 
	FaInbox, 
	FaRegCalendarAlt, 
	FaRegCalendar, 
} from 'react-icons/fa'; 

function Sidebar(){

	return(
		<div className = "nav-wrapper">
		<div className = "sidebar">
			<ul>
				<li className = "list-item">
					<span id = "inbox" className = "list-icon">
						<FaInbox/>
					</span>
					<span>Inbox</span>
				</li>
				<li className = "list-item">
					<span id = "today" className = "list-icon">
						<FaRegCalendar/>
					</span>
					<span>Today</span>
				</li>
				<li className = "list-item">
					<span id = "next7days" className = "list-icon">
						<FaRegCalendarAlt/>
					</span>
					<span>Next 7 Days</span>
				</li>
				
			</ul>
			<div>
				<h3 className = "project-header">
					<span>
						<FaChevronDown/>
					</span>
					Projects
				</h3>
			</div>
		</div>
		</div>
	); 
}

export default Sidebar; 
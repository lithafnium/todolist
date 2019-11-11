import React from 'react';
import {FaChevronDown, 
	FaInbox, 
	FaRegCalendarAlt, 
	FaRegCalendar, 
} from 'react-icons/fa'; 

function Sidebar(){

	return(
		<div class = "sidebar">
			<ul>
				<li class = "list-item">
					<span id = "inbox" class = "list-icon">
						<FaInbox/>
					</span>
					<span>Inbox</span>
				</li>
				<li class = "list-item">
					<span id = "today" class = "list-icon">
						<FaRegCalendar/>
					</span>
					<span>Today</span>
				</li>
				<li class = "list-item">
					<span id = "next7days" class = "list-icon">
						<FaRegCalendarAlt/>
					</span>
					<span>Next 7 Days</span>
				</li>
				
			</ul>

			<div>
				
				<h3 class = "project-header">
					<span>
						<FaChevronDown/>
					</span>
					Projects
				</h3>
			</div>
		</div>
	); 
}

export default Sidebar; 
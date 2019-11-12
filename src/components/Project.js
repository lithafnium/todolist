import React from 'react'; 
import Task from './Task'; 

function Project(props){

	return(
		<div>
			<h3 class = "task-name">{props.projectName}</h3>
			<ul class = "task-list">			
				<Task content={"Research articles and take notes"}/>		
				<Task content={"Create analytical question and thesis"}/>
				<Task content={"Start drafting"}/>		
				<Task content={"Meet with Collier"}/>
			</ul>
		</div>

	); 

}

export default Project; 
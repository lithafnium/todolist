import React from 'react'; 
import Task from './Task'; 
import AddTask from './AddTask';  


function Project(props){
	const tasks = props.tasks; 
	const showTasks = tasks.map((task) =>
		<Task content = {task}/>); 
	return(
		<div>
			<h3 class = "task-name">{props.projectName}</h3>
			<ul class = "task-list">			
				{showTasks}
			</ul>
			<AddTask/>

		</div>


	); 

}

export default Project; 
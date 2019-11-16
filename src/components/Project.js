import React from 'react'; 
import Task from './Task'; 
import AddTask from './AddTask';  


function Project(props){
	const tasks = props.tasks; 
	const showTasks = tasks.map((task) =>
		<Task content = {task}/>); 
	return(
		<div>
			<h3 className = "task-name">{props.projectName}</h3>
			<ul className = "task-list">			
				{showTasks}
			</ul>
			<AddTask projectName = {props.projectName} addTask = {props.addTask}/>

		</div>


	); 

}

export default Project; 
import React from 'react'; 
import Task from './Task'; 
import AddTask from './AddTask';  
import Project from './Project'; 

function Tasks(props){

	const keys = [...props.projects.keys()]
	console.log(keys); 
	const showProjects = keys.map((projectName) =>
		<Project addTask = {props.addTask} projectName = {projectName} tasks = {props.projects.get(projectName)}/>
	); 

	return(
		<div class = "tasks">
			{showProjects}
		</div>
	); 
}


export default Tasks; 
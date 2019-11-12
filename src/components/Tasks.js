import React from 'react'; 
import Task from './Task'; 
import AddTask from './AddTask';  
import Project from './Project'; 

function Tasks(){

	return(
		<div class = "tasks">
			<Project projectName="Expos Paper"/>
			<AddTask/>

			<h3 class = "task-name">Seminar</h3>
			<ul class = "task-list">
				<Task content={"Read articles"}/>
				<Task content={"Start thinking about final project"}/>
			</ul>
			<AddTask/>
		</div>
	); 
}


export default Tasks; 
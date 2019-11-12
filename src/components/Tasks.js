import React from 'react'; 
import Task from './Task'; 
import AddTask from './AddTask';  

function Tasks(){

	return(
		<div class = "tasks">
			<h3 class = "task-name">Expos Paper</h3>
			<ul class = "task-list">			
				<Task content={"Research articles and take notes"}/>		
				<Task content={"Create analytical question and thesis"}/>
				<Task content={"Start drafting"}/>		
				<Task content={"Meet with Collier"}/>
		

			</ul>
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
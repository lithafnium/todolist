import React from 'react'; 
import Checkbox from './Checkbox'; 
import AddTask from './AddTask';  

function Tasks(){

	return(
		<div class = "tasks">
			<h3 class = "task-name">Expos Paper</h3>
			<ul class = "task-list">
				<li>
					<Checkbox/>
				</li>
				<li>
					<Checkbox/>
				</li>
				
				<li>
					<Checkbox/>
				</li>
				<li>
					<Checkbox/>
				</li>

			</ul>
			<AddTask/>

			<h3 class = "task-name">Seminar</h3>
			<ul class = "task-list">
				<li>
					<Checkbox/>
				</li>

			</ul>
			<AddTask/>
		</div>
	); 
}


export default Tasks; 
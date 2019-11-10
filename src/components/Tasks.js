import React from 'react'; 
import Checkbox from './Checkbox'; 

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

			</ul>

			<h3 class = "task-name">Seminar</h3>
			<ul class = "task-list">
				<li>
					<Checkbox/>
				</li>

			</ul>
		</div>
	); 
}


export default Tasks; 
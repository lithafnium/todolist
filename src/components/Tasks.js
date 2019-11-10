import React from 'react'; 
import Checkbox from './Checkbox'; 

function Tasks(){

	return(
		<div class = "tasks">
			<h2 class = "task-name">Expos Paper</h2>
			<ul class = "task-list">
				<li>
					<span>
					<Checkbox/>
					Do research</span>
				</li>

			</ul>
		</div>
	); 
}


export default Tasks; 
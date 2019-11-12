import React from 'react'; 
import {MdAdd} from 'react-icons/md';

function AddTask(){

	return(
		<ul class = "add-task-holder">
			<li>
				<div class = "checkbox-holder">
					<MdAdd class = "plus-svg" />
					<span class = "addTask">Add Task</span>
				</div>
			</li>
		</ul>
	); 
}

export default AddTask; 
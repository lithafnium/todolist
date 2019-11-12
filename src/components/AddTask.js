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

			
				 <input type="text" class = "inputTask" name="name"
           			placeholder="e.g. Read every Day p3 @goals #learning"/>
			<div class = "add-task">
			
				<button class = "add-task-submit">
           				Add Task
           			</button>

           			<span class = "add-task-cancel">
           				Cancel
           			</span>
           	</div>
			
		</ul>
	); 
}

export default AddTask; 
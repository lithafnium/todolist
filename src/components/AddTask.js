import React, {useState} from 'react'; 
import {MdAdd} from 'react-icons/md';

function AddTask(){
	const [showForm, toggleForm] = useState(false); 

	return(
		<ul class = "add-task-holder">
			{!showForm && (
			<li onClick={() => toggleForm(!showForm)}>
				<div class = "checkbox-holder">
					<MdAdd class = "plus-svg" />
					<span class = "addTask">Add Task</span>
				</div>
			</li>
			)}

			{showForm && (

				<div>
					 <input type="text" class = "inputTask" name="name"
	           			placeholder="e.g. Read every Day p3 @goals #learning"/>
					<div class = "add-task">
				
						<button onClick={() =>toggleForm(!showForm)} class = "add-task-submit">
	           				Add Task
	           			</button>

	           			<span onClick = {() => toggleForm(!showForm)} class = "add-task-cancel">
	           				Cancel
	           			</span>
	           		</div>
           		</div>
           	)}
			
		</ul>
	); 
}

export default AddTask; 
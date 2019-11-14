import React, {useState} from 'react'; 
import {MdAdd} from 'react-icons/md';

function AddTask(props){
	const [showForm, toggleForm] = useState(false); 
	const [task, setTask] = useState(""); 

	function submitTask(){
		toggleForm(!showForm); 
		props.addTask(props.projectName, task); 
	}

	function displayForm(){
		toggleForm(!showForm); 
	}

	function handleChange(event){
		setTask(event.target.value); 
	}

	return(
		<ul class = "add-task-holder">
			{!showForm && (
			<li onClick={() => displayForm()}>
				<div class = "checkbox-holder">
					<MdAdd class = "plus-svg" />
					<span class = "addTask">Add Task</span>
				</div>
			</li>
			)}
			{showForm && (
				<div>
					 <input type="text" class = "inputTask" name="name"
	           			placeholder="e.g. Read every Day p3 @goals #learning"
	           			onChange = {handleChange}/>
					<div class = "add-task">
						<button onClick={() => submitTask()} class = "add-task-submit">
	           				Add Task
	           			</button>
	           			<span onClick = {() => displayForm()} class = "add-task-cancel">
	           				Cancel
	           			</span>
	           		</div>
           		</div>
           	)}
			
		</ul>
	); 
}

export default AddTask; 
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
		<ul className = "add-task-holder">
			{!showForm && (
			<li onClick={() => displayForm()}>
				<div className = "checkbox-holder">
					<MdAdd className = "plus-svg" />
					<span className = "addTask">Add Task</span>
				</div>
			</li>
			)}
			{showForm && (
				<div>
					 <input type="text" className = "inputTask" name="name"
	           			placeholder="e.g. Read every Day p3 @goals #learning"
	           			onChange = {handleChange}/>
					<div className = "add-task">
						<button onClick={() => submitTask()} className = "add-task-submit">
	           				Add Task
	           			</button>
	           			<span onClick = {() => displayForm()} className = "add-task-cancel">
	           				Cancel
	           			</span>
	           		</div>
           		</div>
           	)}
			
		</ul>
	); 
}

export default AddTask; 
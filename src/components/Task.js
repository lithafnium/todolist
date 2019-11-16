import React, {useState} from 'react'; 

function Task(props){

	const [checked, toggleCheck] = useState(false); 

	function toggleClass(){
		toggleCheck(!checked); 
	}
	return(
		<li>
			<div class = "checkbox-holder">
				<span className = {checked ? 'checkbox checked': "checkbox"}  onClick = {() => toggleClass()}/>
				<span className = {checked ? 'task-completed' : null}>{props.content}</span>
			</div>
		</li>
	); 
}


export default Task; 
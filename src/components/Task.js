import React, {useState} from 'react'; 

function Task(props){

	const [checked, toggleCheck] = useState(false); 

	function toggleClass(){
		toggleCheck(!checked); 
	}
	return(
		<li>
			<div class = "checkbox-holder">
				<span class = {checked ? 'checkbox checked': "checkbox"}  onClick = {() => toggleClass()}/>
				<span class = {checked ? 'task-completed' : null}>{props.content}</span>
			</div>
		</li>
	); 
}


export default Task; 
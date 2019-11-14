import React from 'react'; 

function Task(props){
	return(
		<li>
			<div class = "checkbox-holder">
				<span class = "checkbox"/>
				<span class = "task-content">{props.content}</span>
			</div>
		</li>
	); 
}


export default Task; 
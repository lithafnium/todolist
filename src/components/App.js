import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Sidebar from './Sidebar'; 
import Tasks from './Tasks'; 
import Header from './Header'; 
class App extends React.Component {

	constructor(props){
		super(props); 
		const projects = new Map(); 
		projects.set("Expos Paper", ["Research articles and take notes", 
									"Create analytical question and thesis",
									"Start drafting",
									"Meet with Collier"]); 
		projects.set("Seminar", ["read articles", "write blog"]); 

		this.state = {
			projects: projects
		}; 
	}

	addTask(projectName, taskName){
		const projects = this.state.projects; 
		if(projects.has(projectName)){
			projects.get(projectName).push(taskName); 
		} 

		this.setState({projects: projects}); 
	}

	render(){
	  return (
	    <div>
	      <Header/>
	        <div id = "app-holder" >
	        	<div id = "content-holder">

	        		<Sidebar/>
	        		<Tasks addTask = {this.addTask} projects = {this.state.projects}/>

	        	</div>
	    
	      </div>
	    </div>
	  );
	}
}

export default App;

import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Sidebar from './Sidebar'; 
import Tasks from './Tasks'; 
import Header from './Header';
import {firebaseSetup} from '../firebaseSetup'; 
import * as firebase from 'firebase';


class App extends React.Component {

	constructor(props){
		super(props); 
		var db = firebaseSetup.firestore(); 

		var projectsRef = db.collection("projects"); 
		var tasks = db.collection("tasks"); 

		const projectNames = []; 
		const projectId = [];
		console.log("asdf"); 
		const IdtoProjects = new Map(); 


		projectsRef.get().then(function(querySnapshot){
			querySnapshot.forEach(function(doc){
				IdtoProjects.set(doc.data().projectName, doc.id); 
				projectNames.push(doc.data().projectName); 
				projectId.push(doc.id); 
			}); 
		}); 

		//console.log(projectId); 
		var tasks = db.collection("tasks"); 
		 
		const projects = new Map(); 
		projects.set("Expos Paper", ["Research articles and take notes", 
									 "Create analytical question and thesis",
									 "Start drafting",
									 "Meet with Collier"]); 
		projects.set("Seminar", ["read articles", 
								 "write blog"]); 
		this.state = {
			projects: projects,
			IdtoProjects: IdtoProjects
		}; 

		this.addTask = this.addTask.bind(this);
		// this.db = db; 
		// this.projects = projects1; 
		this.tasks = tasks; 

	}

	addTask(projectName, taskName){
		// var projectId; 
		// this.projects.add({
		// 	projectName: projectName
		// }).then(function(docRef){
		// 	projectId = docRef.id; 
		// }); 



		let ref = this.state.IdtoProjects; 
		let projectId = ref.get(projectName);
		console.log(projectId);  
		console.log(this.tasks); 
		this.tasks.doc(projectId).update({
			taskContent: firebase.firestore.FieldValue.arrayUnion(taskName)
		}); 

		this.tasks.doc(projectId).collection("taskContents").add({
			isCompleted: false, 
			taskContent: taskName
		}); 





		let p = this.state.projects; 
		if(p.has(projectName)){
			p.get(projectName).push(taskName); 
		} 
		this.setState({projects: p}); 
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

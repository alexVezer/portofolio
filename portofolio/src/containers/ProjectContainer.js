import React , {Component } from 'react';
import data from '../data/data';
import Project from '../components/Project';
import Tachyons from 'tachyons';

class ProjectContainer extends Component {

  constructor(props){
    super(props);
    this.state= { 
      projects: data.projects,
      project: data.projects[0] 
    }
  }
	
nextProject = () =>{
	console.log(this.state.project.index);
	const newIndex = this.state.project.index+1;
	this.setState({
		project:this.state.projects[newIndex-1]
	})
	console.log("newIndex= " + newIndex);

}

prevProject = () => { 
	const newIndex = this.state.project.index-1;
	this.setState({
		project:this.state.projects[newIndex-1]
	})

}

render() {
const {projects, project} = this.state;
  console.log(projects);

	return (
		<div className="flex">
			<div className="w-10 tc">
					<button onClick={ () =>this.prevProject()}
					disabled={project.index === 1} > prev </button>
			</div> 

				<Project project={project}/>
			
			<div className="w-10 tc">
					<button onClick={() =>this.nextProject()} 
					disabled= {project.index===data.projects.length} > next </button>
			</div> 
		</div>
		
		);
}
}

export default ProjectContainer;
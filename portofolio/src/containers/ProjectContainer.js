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
			<div className="aa w-10 tc">
					<button className="arrows dim" onClick={ () =>this.prevProject()}
					disabled={project.index === 1} > 
					<i class="fas fa-chevron-left"></i>
					</button>
			</div> 

				<Project project={project}/>
			
			<div className="w-10 tc aa">
					<button className="arrows dim" onClick={() =>this.nextProject()} 
					disabled= {project.index===data.projects.length} > 
					<i class="fas fa-chevron-right"></i> 
					</button>
			</div> 
		</div>
		
		);
}
}

export default ProjectContainer;
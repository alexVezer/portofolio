import React, {Component} from 'react';
import tachyons from 'tachyons';
//import './Project.css';

class Project extends Component {
	render() {
		return ( 
		<div>
			<div className=" fl w-60"> 
				<h1 className="f2 pv5 ph6"> Robofriends </h1>
				<p className=" mh6"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				</p>
				<button className="fr dim mv5 mh6 " onClick=""> See more </button>
			</div>
			<img className="fl w-40 grow" src="../logo512.png" /> 
		</div>
			);
	}
}

export default Project;

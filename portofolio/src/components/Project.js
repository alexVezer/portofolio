import React, {Component} from 'react';
import tachyons from 'tachyons';
//import './Project.css';

const Project =({project}) => {
	const { id, index, title, desc, photo} = project;
		return ( 
		<div className="flex">
			<div className=" fl w-40"> 
				<h1 className="f2 pv5 ph6">{title} </h1>
				<p className=" mh6"> {desc}	</p>
				<div className=" mv5 mh6 ">
					<a className="fr f2 dim" href=""> <i class="fab fa-github-square"></i> </a>
					<button className="fr pa2 mr3 dim" onClick=""> See live </button>
				</div>
			</div>
			<img className="fl w-40 grow" src={photo} /> 
			
		</div>
			);
	
}

export default Project;

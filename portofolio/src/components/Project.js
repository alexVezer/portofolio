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
				<button className="fr dim mv5 mh6 " onClick=""> See more </button>
			</div>
			<img className="fl w-40 grow" src={photo} /> 
			
		</div>
			);
	
}

export default Project;

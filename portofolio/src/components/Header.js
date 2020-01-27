import React, {Component } from 'react';

const Header = ({title, descr}) => {
	return (
		<div style={{ backgroundColor:'lightgreen',
			clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'}} >
			<h2> {title} </h2>
			<h4 style= {{padding :'10%'}}> {descr} </h4> 
		</div>
		);
}

export default Header;
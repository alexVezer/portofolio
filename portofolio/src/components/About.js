import React from 'react';
import Tachyons from 'tachyons';
function About () {
	return (
	<div style= {{ backgroundColor:'lightgreen',
				clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'}} >
			<h2 className="f2 pl6 pt5"> About </h2>
			<h4 style= {{padding :'10%'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4> 
		</div>
	);
}

export default About;

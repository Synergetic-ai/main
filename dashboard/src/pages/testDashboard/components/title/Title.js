
import React from 'react';

const Title = ({big, small}) => {
	return (
		<h1 className="page-title">{big} &nbsp;
	       	<small>
	         	<small>{small}</small>
	    	</small>
		</h1>
	)
}

export default Title;
import React from "react";

const Example = ({message=""}) => {

	return (
		<div>
			{message}
            {console.log(message)}
		</div>
	);
};

export default Example;
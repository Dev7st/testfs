import React, { useState } from "react";

const Example = () => {
	const [aa,setAa] = useState(10);

	return(
		<div>
			{aa}
		</div>
	);
};

export default Example;
import React from 'react';

const Example = (props) => {
    return (
        <div>
            {props.message}
            {console.log(props)}
        </div>
    );
};

export default Example;
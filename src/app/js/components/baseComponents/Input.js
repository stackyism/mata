import React from 'react';

const Input = props => {
    return (
        <div>
            <label htmlFor="r-inp">{props.label}</label>
            <input type={props.type} onChange={props.onChange}/>
        </div>);
};

Input.defaultProps = {
    type: 'text',
};

export default Input;

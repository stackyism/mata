import React from 'react';
import Input from './../baseComponents/Input';

const onChange = event => {
    console.log(event.target.value);
};

const Workspace  = props => {
  return (
      <div>
          <Input label="Machine 1" onChange={onChange}/>
      </div>
  );
};

export default Workspace;

import React from 'react';

var FormField = (props) => {
  var handleChange = props.handleChange;
  return (
    <div>
      <span>{props.title}</span>
      <input type="text" className={props.className} onChange={handleChange} />
      <br />
    </div>
  );
};

export default FormField;
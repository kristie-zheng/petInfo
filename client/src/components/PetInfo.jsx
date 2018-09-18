import React from 'react';
import FormField from './FormField.jsx'
const PetInformation = (props) => {
  var { handleClick, handleChange, petInfoFields } = props;
  // var handleClick = props.handleClick;
  // var petInfoFields = props.petInfoFields; //this is an array of titles
  return (
    <div>
      <form className="petInfo">
        {petInfoFields.map((field) => (
          <FormField
            title={field}
            handleChange={handleChange}
            className={field}
            name={field}
          />
        ))}
      </form>
      <button type="button" className="next" onClick={handleClick}>
        {' '}
        Next{' '}
      </button>
    </div>
  );
};

export default PetInformation;

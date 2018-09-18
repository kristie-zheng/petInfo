import React from 'react';
import FormField from './FormField.jsx'

var MedicationInformation = (props) => {
  var handleClick = props.handleClick;
  var medicationFields = props.medicationFields;
  return (
    <div>
      <form className="medicationInfo">
        {medicationFields.map((field) => (
          <FormField
            title={field}
            handleChange={props.handleChange}
            name={field}
          />
        ))}
      </form>
      <button type="button" className="submit" onClick={handleClick}>
        {' '}
        Submit{' '}
      </button>
    </div>
  );
};

export default MedicationInformation;
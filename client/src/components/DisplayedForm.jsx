import React from 'react';
import FormField from './FormField.jsx';
import PetInformation from './PetInfo.jsx';
import MedicationInformation from './MedicationInfo.jsx';
import VaccineInformation from './VaccineInfo.jsx';

var DisplayedForm = (props) => {
  var { petInfoFields, medicationFields, vaccinationFields, currentPage, handleClick, handleChange } = props;
  var pageToDisplay = props.currentPage;
  if (props.currentPage === 'petInfo') {
    return (
      <PetInformation
        petInfoFields={petInfoFields}
        handleClick={handleClick}
        handleChange={handleChange}
      />
    );
  } else if (props.currentPage === 'vaccinationInfo') {
    return (
      <VaccineInformation
        vaccinationFields={props.vaccinationFields}
        handleClick={props.handleClick}
        handleChange={props.handleChange}
      />
    );
  } else if (props.currentPage === 'medicationInfo') {
    return (
      <MedicineInformation
        medicationFields={props.medicationFields}
        handleClick={props.handleClick}
        handleChange={props.handleChange}
      />
    );
  } else if (props.currentPage === 'displayAll') {
    return <DisplayAll showAll={props.showAllPets} />;
  }
};

export default DisplayedForm;
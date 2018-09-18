var VaccineInformation = (props) => {
  var handleClick = props.handleClick;
  var vaccinationFields = props.vaccinationFields;
  return (
    //insert form fields here
    <div>
      <form className="vaccinationInfo">
        {vaccinationFields.map((field) => (
          <FormField
            title={field}
            handleChange={props.handleChange}
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

export default VaccineInformation;
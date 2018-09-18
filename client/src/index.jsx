import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FormField from './components/FormField.jsx';
import DisplayedForm from './components/DisplayedForm.jsx';
import PetInformation from './components/PetInfo.jsx';
import VaccineInformation from './components/VaccineInfo.jsx';
import MedicationInformation from './components/MedicationInfo.jsx';
// import FlipCard from 'react-flipcard';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'petInfo',
      petInfoFields: [
        'Name',
        'Owner Name', 
        'Type',
        'Species',
        'Breed',
        'Sex',
        'Color',
        'Birthdate',
        'Weight',
        'Microchip ID',
      ],
      vaccinationFields: [
        'Name', 
        'Frequency', 
        'Last Given'
      ],
      medicationFields: [
        'Name',
        'Use', 
        'Dosage', 
        'Frequency',
        'Start Date',
        'End Date',
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.showAllPets = this.showAllPets.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // renders the next form when submit button is clicked
  handleClick(event) {
    if (this.state.currentPage === 'petInfo') {
      this.setState({ currentPage: 'vaccinationInfo' }, () => {
        console.log(this.state);
      });
      $.ajax({
        url: '/',
        method: 'POST',
        data: { petInfo: this.state.petInfo },
        success: function(data) {
          console.log('here is data returned from server', data);
        },
        error: function(error) {
          console.log('error running the post request', error);
        },
      });
    } else if (this.state.currentPage === 'vaccinationInfo') {
      this.setState({ currentPage: 'medicationInfo' }, () => {
        console.log(this.state);
      });
    } else if (this.state.currentPage === 'medicationInfo') {
      this.setState({ currentPage: 'displayAll' }, () => {
        console.log(this.state);
      });
    }

    // $.ajax({
    //   url: '/',
    //   method: 'POST',
    //   data: JSON.stringify({ test: 'data' }),
    //   success: function(data) {
    //     console.log('here is data return from server', data);
    //   },
    //   error: function(error) {
    //     console.log('error', error);
    //   },
    // });
  }

  handleChange(event) {
    const key = event.target.className;
    const name = event.target.name;
    console.log('value', event.target.value)
    console.log(this.state.petInfoFields.includes(key));
    let newStateProp = 'myProp' + key;
    console.log('nsp', newStateProp)
    if (this.state.petInfoFields.includes(key)) {
      this.setState(
        // { petInfo: { [event.target.className]: event.target.value } },
        newStateProp: 'what',
        function() {
          console.log('state is', this.state);
        },
      );
      // {[event.target.className]: event.target.value}
    } else if (this.state.vaccinationFields.includes(key)) {
      this.setState(
        { vaccinationInfo: { [event.target.className]: event.target.value } },
        function() {
          console.log(this.state);
        },
      );
    } else if (this.state.medicationFields.includes(key)) {
      this.setState(
        { medicationInfo: { [event.target.className]: event.target.value } },
        function() {
          console.log(this.state);
        },
      );
    }
  }

  showAllPets(event) {
    //submit a get request to server
    //retrieve the database data (use query)
    //render it on the dom
    console.log('hi');
    $.ajax({
      url: '/',
      method: 'GET',
      data: 'useremail',
      success: function(data) {
        console.log('here is data returned from serer', data);
      },
      error: function(error) {
        console.log('error of get req', error);
      },
    });
  }

  render() {
    return (
      <div>
        <h1>PetInfo</h1>
        <DisplayedForm
          handleClick={this.handleClick}
          showAllPets={this.handlePurchase}
          currentPage={this.state.currentPage}
          petInfoFields={this.state.petInfoFields}
          vaccinationFields={this.state.vaccinationFields}
          medicationFields={this.state.medicationFields}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const PetCard = styled.span`
  border: 1px solid gray;
  padding: 10px
  display: inline-block;
  width: 210px
  &:hover: {
    background: blue;
  }
`;

//each form field


//form1 (petInfo) component

// form2 (vaccineInfo)


//form3 medication info



//form 4 (shows tiles)
var DisplayAll = (props) => {
  // var displayAllPets = props.displayAllPets;
  return (
    <div>
      <p>Your Pets</p>
       <div>
    <PetCard>
      <img src='http://2.bp.blogspot.com/-EiNcwcrlXyU/UZfLXZoI7zI/AAAAAAAAFAE/1Rv63hRHMSE/s1600/Golden-Retriever.jpg' height='200' width='200'/> <br/>
      <span> Goldie </span> <br/>
      <button onClick={() => {window.alert('Name: Goldie \nGender: F \nBreed: Golden Retriever \nWeight: 50lbs\nMicrochip ID: A12345' )}}>Vitals</button> <br/>
      <button onClick={() => {window.alert('Name: Rabies\nFrequency: 1x year\nLast Given:03062018' )}}>Vaccines</button> <br/>
      <button onClick={() => {window.alert('Name: Advantage\nUse: Anti-Flea \nDosage: 1 tube \nFrequency: 1x month' )}}>Medications</button> <br/>

    </PetCard>
    <PetCard>
      <img src='https://www.warrenphotographic.co.uk/photography/bigs/22196-Grey-and-white-cat-white-background.jpg' height='200' width='200'/> <br/>
      <span> Stella </span> <br/>
      <button onClick={() => {window.alert('Name: Stella \nGender: F \nBreed: American Shorthair \nWeight: 7.5lbs\nMicrochip ID: A11111' )}}>Vitals</button> <br/>
      <button onClick={() => {window.alert('Name: Rabies\nFrequency: 1x year\nLast Given:03062018' )}}>Vaccines</button> <br/>
      <button onClick={() => {window.alert('Name: Advantage\nUse: Anti-Flea \nDosage: 1 tube \nFrequency: 1x month' )}}>Medications</button> <br/>

    </PetCard>                
      </div>
    </div>
  );
};


// var Cards = React.createClass({
//   getInitialState() {
//     return {
//       isFlipped: false
//     };
//   },

//   showBack() {
//     this.setState({
//       isFlipped: true
//     });
//   },

//   showFront() {
//     this.setState({
//       isFlipped: false
//     });
//   },

//   handleOnFlip(flipped) {
//     if (flipped) {
//       this.refs.backButton.getDOMNode().focus();
//     }
//   },

//   handleKeyDown(e) {
//     if (this.state.isFlipped && e.keyCode === 27) {
//       this.showFront();
//     }
//   },

//   render() {
//     return (
//       <div>
//         {/*
//           The `disabled` attribute allows turning off the auto-flip
//           on hover, or focus. This allows manual control over flipping.

//           The `flipped` attribute indicates whether to show the front,
//           or the back, with `true` meaning show the back.
//         */}
//         <FlipCard
//           disabled={true}
//           flipped={this.state.isFlipped}
//           onFlip={this.handleOnFlip}
//           onKeyDown={this.handleKeyDown}
//         >
//           <div>
//             <div>Turtle</div>
//             <img src= 'https://www.bing.com/th?id=OIP.i3Y1sljqEyH7kRasrjZ3DgHaEI&w=300&h=167&c=7&o=5&dpr=2&pid=1.7' height='200' width='200'/>
//             <button type="button" onClick={this.showBack}>Show back</button>
//           </div>
//           <div>
//             <div>Back</div>
//             <button type="button" ref="backButton" onClick={this.showFront}>Vitals</button>
//             <button type="button" ref="backButton" onClick={this.showFront}>Vaccines</button>
//             <button type="button" ref="backButton" onClick={this.showFront}>Medications</button>
//             <button type="button" ref="backButton" onClick={this.showFront}>Show front</button>
//           </div>
//         </FlipCard>

//       </div>
//     );
//   }
// });

window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));

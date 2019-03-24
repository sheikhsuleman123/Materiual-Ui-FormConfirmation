import React, { Component } from 'react';

import FormUserDetails from './FormUserDetail';
import FormPersonalDetail from './FormPersonal';
import Confirm from './Confirm';
import Success from './Success'


 class UserForm extends Component {
    state = {
        step : 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    
    // Procees to next step 
    nextStep = () => {
        const {step } = this.state;
        this.setState({
            step : step + 1
        });
    }
    
    // Go back to previous step 
    preStep = () => {
        const {step } = this.state;
        this.setState({
            step : step - 1
        });
    }
        // Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    } 

    render() {
      const {step} = this.state;
      const {firstName,lastName,email,city,occupation,bio} = this.state;
      const values = {firstName,lastName,email,city,occupation,bio}
  
      switch(step) {
          case 1:
          return(
              <FormUserDetails 
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              />
          )
          case 2:
          return (
          <FormPersonalDetail 
          nextStep={this.nextStep}
          preStep={this.preStep}
          handleChange={this.handleChange}
          values={values}
          />
          )
          case 3:
          return (
            <Confirm 
            nextStep={this.nextStep}
            preStep={this.preStep}
            handleChange={this.handleChange}
            values={values}
            />
            )
          case 4:
          return <Success />
      }
  
    }
  }


export default UserForm

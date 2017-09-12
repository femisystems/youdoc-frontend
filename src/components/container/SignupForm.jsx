import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextBox from '../shared/TextBox';
import Button from '../shared/Button';
import Loader from '../shared/Loader';

import { SignupProps } from '../../utils/formInput';
import './form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      roleId: 5
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render () {
    const { signupInputFields, submitButtonProps } = SignupProps(this);
    const isLoading = this.state.isLoading;

    return (
      <div>
        <div className="form-header">
          <span className="title">Sign up</span>
          <span className="info">I have an account <span onClick={this.props.switchForm} className="signup-link">Sign in</span></span>
        </div>
        {signupInputFields.map(inputProps => <TextBox key={inputProps.name} {...inputProps} />)}
        <Button {...submitButtonProps} loading={isLoading}>
          {isLoading && <Loader/>}
          {!isLoading && 'Sign up'}
        </Button>
      </div>
    );
  }
}

SignupForm.propTypes = {
  switchForm: PropTypes.func.isRequired
};

export default SignupForm;

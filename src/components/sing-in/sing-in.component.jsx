import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSingInStart,
  emailSingInStart,
} from "../../redux/user/user.actions";

import "./sing-in.styles.scss";

const SingIn = ({ emailSingInStart, googleSingInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = this.stateuserCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSingInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sing-in">
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sing In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSingInStart}
            isGoogleSingIn
          >
            Sing in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSingInStart: () => dispatch(googleSingInStart()),
  emailSingInStart: (email, password) =>
    dispatch(emailSingInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SingIn);

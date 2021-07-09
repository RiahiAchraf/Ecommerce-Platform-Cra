/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.peventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign-in">
      <h2 className="title">I have already an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

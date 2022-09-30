import React, {useCallback} from 'react';
import Cookies from 'universal-cookie';
import {toast} from 'react-toastify';

import {RouterService} from '~/services';
import {Route, signInForm} from '~/constants';
import {Typography, Form, Link} from '~/components';

import styles from './SignIn.module.scss';

const SignIn: React.FC = () => {
  const cookies = new Cookies();

  const handleSignInFormSubmit = useCallback((values) => {
    if (values.email === 'test@gmail.com' && values.password === '111111') {
      cookies.set('token', 'test');
      RouterService.push(Route.Home);
    } else {
      toast.error('Email:test@gmail.com && password:111111');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container container__auth">
      <div className={styles.container__top}>
        <Typography
          type="Extra"
          variant="Heading"
          className={styles.container__top__title}>
          Sign In
        </Typography>
      </div>

      <Form
        form={signInForm}
        submitText="Sign In"
        onSubmit={handleSignInFormSubmit}
      />

      <div className={styles.container__account}>
        <Typography
          variant="Text"
          type="Semibold"
          className={styles.container__account_reg}>
          Don’t have an account?
        </Typography>
        <Link to={Route.SignUp}>
          <Typography
            variant="Text"
            type="Medium"
            className={styles.container__account_sign}>
            Sign up
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

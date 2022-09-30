import React from 'react';

import {RouterService} from '~/services';
import {registrationForm, Route} from '~/constants';
import {Typography, Form, Button, Link} from '~/components';

import styles from './SignUp.module.scss';

const SignUp: React.FC = () => {
  const handleRegistrationSubmit = () => {
    RouterService.push(Route.Home);
  };

  return (
    <div className="container container__auth">
      <div className={styles.container__top}>
        <Typography
          type="Extra"
          variant="Heading"
          className={styles.container__top__title}>
          Registration
        </Typography>
      </div>

      <Form
        submitText="Register"
        form={registrationForm}
        onSubmit={handleRegistrationSubmit}
      />
      <div className={styles.container__back}>
        <Link to={Route.SignIn}>
          <Button variant="ghost" className={styles.container__back__button}>
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

import {GetServerSideProps} from 'next';
import Cookies from 'universal-cookie';

import {Route} from '~/constants';

const enforceAuthenticated: () => GetServerSideProps = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');

  return async () => {
    if (!token) {
      return {
        props: {},
        redirect: {
          destination: Route.SignIn,
        },
      };
    }

    return {
      props: {},
    };
  };
};

export default enforceAuthenticated;

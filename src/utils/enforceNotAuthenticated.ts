import {GetServerSideProps} from 'next';
import Cookies from 'universal-cookie';

import {Route} from '~/constants';

const enforceNotAuthenticated: () => GetServerSideProps = () => {
  return async (context) => {
    const cookies = new Cookies(context.req.headers.cookie);
    const token = cookies.get('token');

    if (token) {
      return {
        props: {},
        redirect: {
          destination: Route.Home,
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  };
};

export default enforceNotAuthenticated;

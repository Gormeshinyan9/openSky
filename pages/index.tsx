import {useEffect, useState} from 'react';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import Cookies from 'universal-cookie';

import {Seo} from '~/components';
import {StatesApi} from '~/services/api';
import {FlightContainer} from '~/containers';
import {GetAllFlightsResponse} from '~/services/api/states/types';
import {Route} from '~/constants';

type FlightsPageProps = {
  data?: GetAllFlightsResponse;
};
const FlightsPage: NextPage<FlightsPageProps> = ({data}) => {
  const [flightsData, setFlightsdata] = useState(data);
  const [dataLoading, setDataLoading] = useState(data ? false : true);

  const flightsDataError = typeof flightsData === 'string';

  useEffect(() => {
    const getAllFlightsClient = async () => {
      if (!flightsData || flightsDataError) {
        setDataLoading(true);

        const updatedData = await StatesApi.getAllFlights();

        setFlightsdata(updatedData);
        setDataLoading(false);
      }
    };

    getAllFlightsClient();
  }, [flightsData, flightsDataError]);

  return (
    <Seo title="Flights" metaDescription="Flights page description">
      {dataLoading ? (
        <div>...loading</div>
      ) : (
        !flightsDataError &&
        flightsData && <FlightContainer flights={flightsData} />
      )}
    </Seo>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<FlightsPageProps>> => {
  const cookies = new Cookies(context.req.headers.cookie);
  const token = cookies.get('token');

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: Route.SignIn,
        permanent: false,
      },
    };
  }

  const data = await StatesApi.getAllFlights();

  return {
    props: {
      data,
    },
  };
};

export default FlightsPage;

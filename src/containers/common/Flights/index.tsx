import React, {useMemo, useState} from 'react';

import {FlightCard, Pagination} from '~/components';
import {PaginationConstant} from '~/constants';

import styles from './Flights.module.scss';
import {FlightsProps} from './types';

const FlightsContainer: React.FC<FlightsProps> = ({flights}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const currentTableData = useMemo(() => {
    const firstPageIndex =
      (currentPage + 1) * PaginationConstant.INITIAL_PAGINATION_ROWS_PER_PAGE;
    const lastPageIndex =
      firstPageIndex + PaginationConstant.INITIAL_PAGINATION_ROWS_PER_PAGE;

    return flights.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, flights]);

  const renderFlightCards = () =>
    currentTableData.map((flight, index) => (
      <FlightCard key={index} {...flight} />
    ));

  return (
    <section className={styles.container}>
      <div className={styles.container__cards}>{renderFlightCards()}</div>
      <div>
        <Pagination
          activePage={currentPage}
          dataLength={flights.length}
          setActivePage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default FlightsContainer;

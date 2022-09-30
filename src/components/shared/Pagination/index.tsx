import React from 'react';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';

import {NextIcon, PrevIcon} from '~/assets';
import {PaginationConstant} from '~/constants';

import {IPaginationProps} from './types';
import styles from './Pagination.module.scss';

const Pagination: React.FC<IPaginationProps> = ({
  isRight = false,
  dataLength,
  rowsPerPage = PaginationConstant.INITIAL_PAGINATION_ROWS_PER_PAGE,
  activePage = PaginationConstant.INITIAL_PAGINATION_ACTIVE_PAGE,
  setActivePage = (e) => e,
  handleClickLeftArrow,
  handleClickRightArrow,
  transformXValue,
  transformMaxWeight,
}) => {
  const pageCount = Math.floor(dataLength / rowsPerPage);
  const rightArrowClasses = classNames(styles.right_block__arrow, {
    [styles.disabled]: transformXValue === transformMaxWeight,
  });

  const leftArrowClasses = classNames(styles.right_block__arrow, {
    [styles.disabled]: transformXValue === 0,
  });

  const setPage = (selectedItem: {selected: number}) => {
    setActivePage(selectedItem.selected);
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  };

  const activePagination = isRight ? (
    <div className={styles.right_block}>
      <NextIcon onClick={handleClickRightArrow} className={rightArrowClasses} />
      <PrevIcon onClick={handleClickLeftArrow} className={leftArrowClasses} />
    </div>
  ) : (
    <ReactPaginate
      forcePage={activePage}
      nextLabel={<NextIcon />}
      pageCount={pageCount}
      onPageChange={setPage}
      previousLabel={<PrevIcon />}
      pageClassName={styles.container__break}
      breakClassName={styles.container__break}
      activeClassName={styles.container_active}
      disabledClassName={styles.disabled}
      nextLinkClassName={styles.container__tick}
      containerClassName={styles.container}
      pageRangeDisplayed={PaginationConstant.INITIAL_PAGINATION_RANGE_DISPLAYED}
      marginPagesDisplayed={
        PaginationConstant.INITIAL_PAGINATION_MARGIN_DISPLAYED
      }
      previousLinkClassName={styles.container__tick}
    />
  );

  return <div className={styles.container__wrapper}>{activePagination}</div>;
};

export default Pagination;

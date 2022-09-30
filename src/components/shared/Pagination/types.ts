export type IPaginationProps = {
  isRight?: boolean;
  dataLength: number;
  rowsPerPage?: number;
  activePage?: number;
  setActivePage?: (arg: number) => void;
  setRowsPerPage?: (arg: number) => void;
  transformXValue?: number | null;
  transformMaxWeight?: number | null;
  handleClickLeftArrow?: () => void;
  handleClickRightArrow?: () => void;
};

export type IPerPageProps = {
  rowsPerPage: number;
  setRowsPerPage: (arg: number) => void;
};

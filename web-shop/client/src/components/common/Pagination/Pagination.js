import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { Pagination as BootstrapPagination } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pagination.scss';

class Pagination extends React.Component {
  state = {
    presentPage: this.props.presentPage || this.props.initialPage || 1
  };

  changePage = page => {
    // for lifted up state
    if (this.props.presentPage) {
      this.props.onPageChange(page);
    }
    // for local state
    else {
      const { onPageChange } = this.props;
      this.setState({ presentPage: page });
      onPageChange(page);
    }
  };

  render() {
    const { pages } = this.props;
    const { presentPage } = this.state;
    const { changePage } = this;

    return (
      <BootstrapPagination className="home-pagination" aria-label="Pagination">
        <PaginationItem disabled={presentPage === 1}>
          <PaginationLink first onClick={() => changePage(1)} />
        </PaginationItem>
        <PaginationItem disabled={presentPage === 1}>
          <PaginationLink
            previous
            className={`pagination-item${
              presentPage === 1 ? ' pagination-item--hidden' : ''
            }`}
            onClick={() => changePage(presentPage - 1)}>
            <MdArrowBack />
          </PaginationLink>
        </PaginationItem>
        {[...Array(pages)].map((el, page) => (
          <PaginationItem key={page} active={page === presentPage - 1}>
            <PaginationLink
              key={++page}
              onClick={() => changePage(page)}
              className={`pagination-item${
                page === presentPage ? ' pagination-item--active' : ''
              }`}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={presentPage === pages}>
          <PaginationLink
            next
            className={`pagination-item${
              presentPage === pages ? ' pagination-item--hidden' : ''
            }`}
            onClick={() => changePage(presentPage + 1)}>
            <MdArrowForward />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={presentPage === pages}>
          <PaginationLink last onClick={() => changePage(pages)} />
        </PaginationItem>
      </BootstrapPagination>
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;

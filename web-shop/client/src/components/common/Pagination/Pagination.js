import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import './Pagination.scss';

class Pagination extends React.Component {
  state = { presentPage: this.props.presentPage || (this.props.initialPage || 1) };

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
      <div className="pagination">
        <ul className="pagination__list">
          <li
            className={`pagination__list__item${presentPage === 1 ? ' pagination__list__item--hidden' : ''}`}
            onClick={() => changePage(presentPage - 1)}
          >
            <MdArrowBack />
          </li>

          {[...Array(pages)].map((el, page) => (
            <li
              key={++page}
              onClick={() => changePage(page)}
              className={`pagination__list__item${page === presentPage ? ' pagination__list__item--active' : ''}`}
            >
              {page}
            </li>
          ))}

          <li
            className={`pagination__list__item${presentPage === pages ? ' pagination__list__item--hidden' : ''}`}
            onClick={() => changePage(presentPage + 1)}
          >
            <MdArrowForward />
          </li>
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;

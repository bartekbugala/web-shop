import React from 'react';
import './ListProduct.scss';
import { Link } from 'react-router-dom'
import Spinner from '../../common/Spinner/Spinner';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleLoading() {
    this.setState({ loading: false });
  }

  handleError() {
    this.setState({ loading: true });
  }
  render() {
    const { name, price, img, id } = this.props;
    const { loading, handleError, handleLoading } = this.state
    return (
      <Link to={`products/${id}`}>
        {loading && <Spinner />}
        <div className="list-product__container">
          {!loading && <img onLoad={handleLoading} onError={handleError} className="list-product__img" src={img} alt={`${name}`} />}
          <p className="list-product__name">{`name: ${name}`}</p>
          <p className="list-product__price">{`price: ${price}`}</p>
        </div>
      </Link>
    );
  }

};

export default ListProduct;

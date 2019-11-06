import React from 'react';
import { connect } from 'react-redux';
import { getSort, changeSortingRequest } from '../../../redux/shopRedux';

const mapStateToProps = state => ({
  sortParam: getSort(state)
})

const mapDispatchToProps = dispatch => ({
  changeSorting: (sortParam) => dispatch(changeSortingRequest(sortParam))
})

class SortingWidget extends React.Component {
  changeSorting = (sortParam) => {
    const { changeSorting } = this.props
    changeSorting(sortParam)
  }

  render() {
    const { changeSorting } = this
    return <div>
      <h2>Sortuj:</h2>
      <p onClick={changeSorting('name')}>Nazwa A-Z</p>
      <p onClick={changeSorting('-name')}>Nazwa Z-A</p>
      <p onClick={changeSorting('price')}>Cena rosnąco</p>
      <p onClick={changeSorting('-price')}>Cena malejąco</p>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingWidget);

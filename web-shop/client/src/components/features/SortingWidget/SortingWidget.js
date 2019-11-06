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
  changeSorting = (e) => {
    e.preventDefault
    const { changeSorting } = this.props
    changeSorting('name')
  }

  render() {
    const { changeSorting } = this
    return <div>
      <h2>Sortuj:</h2>
      <p onClick={changeSorting()}>Nazwa A-Z</p>
      <p onClick={changeSorting()}>Nazwa Z-A</p>
      <p onClick={changeSorting}>Cena rosnąco</p>
      <p onClick={changeSorting}>Cena malejąco</p>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingWidget);

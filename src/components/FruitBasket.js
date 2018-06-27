import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();
//   }
//
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.props.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

const FruitBasket = ({
  handleFilterChange, currentFilter, filters, items
}) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} filters={filters}/>
      <FilteredFruitList
        filter={currentFilter} fruit={items}/>
    </div>
  );
}

FruitBasket.defaultProps = {
  filters: [],
  currentFilter: '',
  updateFilterCallback: '',
  fruit: ''
}

export default FruitBasket;

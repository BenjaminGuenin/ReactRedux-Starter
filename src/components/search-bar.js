import React, { Component } from 'react';

class SearchBar extends Component {
  // The state is created as soon as the class is instantiated (see life cylce of a class)

  constructor(props) {
    super(props);
    this.state = { searchText: '', placeholder: 'Tapez votre film...' };
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-8'>
          <input
            type='text'
            className='form-control input-lg'
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeholder}
          />
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
    console.log(event.target.value);
  }
}

export default SearchBar;

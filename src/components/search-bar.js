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
        <div className='col-lg-8 input-group'>
          <input
            type='text'
            className='form-control input-lg'
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeholder}
          />
          <span className='input-group-btn'>
            <button
              className='btn btn-secondary'
              onClick={this.handleOnClik.bind(this)}>
              Go
            </button>
          </span>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleOnClik(event) {
    this.props.callback(this.state.searchText);
  }
}

export default SearchBar;

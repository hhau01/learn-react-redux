import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // update state to contain search term
        this.state = { term: '' };
    }

    render() {
        // event onChange
        return (
            <div>
                <input onChange={ event => this.setState({ term: event.target.value })} />
                <br />
                Value of the input: {this.state.term}
            </div>
        );
    }

}

export default SearchBar;
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
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange = { event => this.setState({ term: event.target.value })} />
            </div>
        );
    }

}

export default SearchBar;
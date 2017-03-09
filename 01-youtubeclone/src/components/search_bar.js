import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // update state to contain search term
        this.state = { term: '' };
    }

    render() {
        // event onChange
        return <input onChange={ event => console.log(event.target.value) } />;
    }

}

export default SearchBar;
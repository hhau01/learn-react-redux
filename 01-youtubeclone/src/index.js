import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAG_EjjXsIxH6SsGR9wuOu_Yfhl4XHjn6c';

// create new component. this component should produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            // this.setState({ videos: videos });
            this.setState({ videos });
            console.log("videos");
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's generated html and put it on the page (in the DOM)
// <App /> == <App></App>
ReactDOM.render(<App />, document.querySelector('.container'));
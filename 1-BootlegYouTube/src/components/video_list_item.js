import React from 'react';

// const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className='media-body'>
                    <h5 className='media-heading'>{video.snippet.title}</h5>
                    {video.snippet.channelTitle}
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
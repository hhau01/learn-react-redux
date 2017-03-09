import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div></div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;


    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe src={url} className='embed-responsive-item'></iframe>
            </div>
            <div className='details'>
                <h5 className='media-heading'><strong>{video.snippet.title}</strong></h5>
                <em>{video.snippet.channelTitle}</em>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail
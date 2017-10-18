import React from 'react';
import dateFormat from 'dateformat';

const VideoDetail = ({video}) =>{
  //check in case video is a null array when trying to get data from youtube
  if(!video){
    return <div>Loading video</div>
  }
  //get the video id for embed
  const videoID = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoID}`;

  //date formate
  const videoPublish = dateFormat(video.snippet.publishedAt);

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={videoURL} frameborder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="detail">
        <div className="video-title">{video.snippet.title}</div>
        <small>{videoPublish}</small>
        <div className="video-description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;

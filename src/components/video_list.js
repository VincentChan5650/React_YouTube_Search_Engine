import React from 'react';
import VideoListItem from './video_list_item';

//the props come from parent component
const VideoList = (props) =>{
  //using map function to iterate each element in videos array to VideoListItem
  //passing a key for unique identifier
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  })


  return (
    <ul className = 'col-md-4 list-group'>
    {videoItems}
    </ul>
  );
};


export default VideoList;

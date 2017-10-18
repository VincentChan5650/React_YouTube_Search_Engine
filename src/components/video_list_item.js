import React from 'react';

//taking props off and place {video} telling react to treat video = props.video
const VideoListItem = ({video, onVideoSelect}) =>{
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={()=>onVideoSelect(video)} className ='list-group-item' >
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={imageUrl}/>
          </div>

          <div className='media-body'>
            <div className='media-heading'>{video.snippet.title}</div>
            <small>{video.snippet.channelTitle}</small>
          </div>
        </div>
    </li>
  );
};

export default VideoListItem;

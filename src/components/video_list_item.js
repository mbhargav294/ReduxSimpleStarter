import React, {Component} from 'react';

class VideoListItem extends Component {
  render() {
    const video = this.props.video;
    const videoThumbnailUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={videoThumbnailUrl}/>
          </div>
          <div className="media-body">
            <div className="media-heading">
              {videoTitle}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem

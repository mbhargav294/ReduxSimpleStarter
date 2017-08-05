import React, {Component} from 'react'

class VideoDetail extends Component {
  render() {
    const video = this.props.video;
    if(!video)
      return (
        <div className="col-md-8">
          Loding...
        </div>
      );
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <h2>{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail

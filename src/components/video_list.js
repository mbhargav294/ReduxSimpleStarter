import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  render() {
      const videoItems = this.props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
      });
      return (
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
      );
  }
}
// const VideoList = (props) => {
//   return (
//     <ul className="col-md-4 list-group">
//       {props.videos.length}
//     </ul>
//   );
// }

export default VideoList

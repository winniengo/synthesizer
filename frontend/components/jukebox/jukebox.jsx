import React from 'react';
import Track from './track';

// const Jukebox = ({ tracks, isRecording, isPlaying, onDelete, onPlay }) => (
//   <div className="juke-box">
//     <div className='juke-box-title'>
//       Jukebox
//     </div>
//     <div className='track-list'>
//       {Object.keys(tracks).map(id => (
//         <Track
//           key={`track-${id}`}
//           track={tracks[id]}
//           disabled={isRecording || isPlaying}
//           onPlay={onPlay(tracks[id])}
//           onDelete={onDelete(id)} />
//       ))}
//     </div>
//   </div>
// );

class Jukebox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTracks();
  }

  onDestroy(id) {
    return e => this.props.destroyTrack(id);
  }

  render() {
    const { tracks, isRecording, isPlaying, onPlay } = this.props;
    return (
      <div className="juke-box">
        <div className='juke-box-title'>
          Jukebox
        </div>
        <div className='track-list'>
          {Object.keys(tracks).map(id => (
            <Track
              key={`track-${id}`}
              track={tracks[id]}
              disabled={isRecording || isPlaying}
              onPlay={onPlay(tracks[id])}
              onDelete={this.onDestroy(id)} />
          ))}
        </div>
      </div>
    );
  }
}


export default Jukebox;

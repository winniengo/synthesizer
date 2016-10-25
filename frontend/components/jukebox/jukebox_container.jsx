import { connect } from 'react-redux';
import { deleteTrack } from '../../actions/tracks_actions';
import { groupUpdate } from '../../actions/notes_actions';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';
import Jukebox from './jukebox';

import { requestTracks, destroyTrack } from '../../actions/tracks_actions';

const mapStateToProps = ({ tracks, isRecording, isPlaying }) => ({
  tracks,
  isRecording,
  isPlaying
});

const mapDispatchToProps = dispatch => ({
  requestTracks: () => dispatch(requestTracks()),
  destroyTrack: id => dispatch(destroyTrack(id)),
  onDelete: id => e => dispatch(deleteTrack(id)),
  onPlay: track => e => {
    dispatch(startPlaying());
    const roll = track.roll;
    const playBackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed;

    let interval = setInterval(() => {
      if (currNote < roll.length) { // keep playing
        timeElapsed = Date.now() - playBackStartTime;

        if (timeElapsed >= roll[currNote].timeSlice) {
          dispatch(groupUpdate(roll[currNote].notes));
          currNote++;
        }
      } else { // done playing
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);

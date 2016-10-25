// Track API Utils
import { fetchTracks,
         createTrack,
         destroyTrack } from '../util/track_api_util';

// Track Action Creators and Type Constants
import { receiveTrack,
         receiveTracks,
         deleteTrack,
         REQUEST_TRACKS,
         STOP_RECORDING,
         DESTROY_TRACK } from '../actions/tracks_actions';

import merge from 'lodash/merge';

const tracksMiddleware = ({ getState, dispatch }) => next => action => {
  const tracksSuccess = data => dispatch(receiveTracks(data));
  const trackSuccess = data => dispatch(receiveTrack(data));
  const trackDeleted = data => dispatch(deleteTrack(data));
  const trackErrored = data => dispatch(trackError(data.responseJSON));

  switch(action.type) {
    case REQUEST_TRACKS:
      fetchTracks(tracksSuccess);
      return next(action);
    case STOP_RECORDING:
      next(action);
      const newTrack = merge({}, getState().tracks[null], {
        roll: JSON.stringify(getState().tracks[null].roll),
        time_start: getState().tracks[null].timeStart
      });
      createTrack(newTrack, trackSuccess, trackErrored);
      break;
    case DESTROY_TRACK:
      destroyTrack(action.id, trackDeleted);
      return next(action);
    default:
      return next(action);
  }
};

export default tracksMiddleware;

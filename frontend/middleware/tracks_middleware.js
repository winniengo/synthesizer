// Track API Utils
import { fetchTracks,
         createTrack,
         destroyTrack } from '../util/track_api_util';

// Track Action Creators and Type Constants
import { receiveTrack,
         receiveTracks,
         removeTrack,
         REQUEST_TRACKS,
         CREATE_TRACK,
         DESTROY_TRACK } from '../actions/tracks_actions';


const tracksMiddleware = ({ getState, dispatch }) => next => action => {
  const tracksSuccess = data => dispatch(receiveTracks(data));
  const trackSuccess = data => dispatch(receiveTrack(data));
  const trackRemoved = data => dispatch(removeTrack(data));
  const trackErrored = data => dispatch(trackError(data.responseJSON));

  switch(action.type) {
    case REQUEST_TRACKS:
      fetchTracks(tracksSuccess);
      return next(action);
    case CREATE_TRACK:
      createTrack(action.track, trackSuccess, trackErrored);
      return next(action);
    case DESTROY_TRACK:
      destroyTrack(action.track, trackRemoved);
      return next(action);
    default:
      return next(action);
  }
};

export default tracksMiddleware;

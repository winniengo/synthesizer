import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

// const preloadedState = {
//   notes: [],
//   tracks: {},
//   isRecording:false,
//   isPlaying:false
// }


const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    masterMiddleware
  )
);

export default configureStore;

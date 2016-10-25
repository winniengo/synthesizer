
export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";
export const ADD_NOTES = "ADD_NOTES";
export const DELETE_TRACK = "DELETE_TRACK";

export const startRecording = () => ({
  type: START_RECORDING,
  timeStart: Date.now()
});

export const stopRecording = () => ({
  type: STOP_RECORDING,
  timeNow: Date.now()
});

export const addNotes = notes => ({
  type: ADD_NOTES,
  timeNow: Date.now(),
  notes
});

export const deleteTrack = id => ({
  type: DELETE_TRACK,
  id
});

export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const requestTracks = () => ({
  type: REQUEST_TRACKS
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const CREATE_TRACK = "CREATE_TRACK";
export const RECEIVE_TRACK = "RECEIVE_TRACK";

export const createTrack = track => ({
  type: CREATE_TRACK,
  track
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const DESTROY_TRACK = "DESTROY_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const destroyTrack = id => ({
  type: DESTROY_TRACK,
  id
});

export const removeTrack = id => ({
  type: REMOVE_TRACK,
  id
})

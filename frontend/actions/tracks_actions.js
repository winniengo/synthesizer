
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

export const RECEIVE_TRACKS = tracks => ({
  type: RECEIVE_TRACKS
})

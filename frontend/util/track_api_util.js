export const fetchTracks = success => {
  $.ajax({
    method: 'GET',
    url: 'api/tracks',
    success
  });
};

export const createTrack = (track, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/tracks',
    data: track,
    success,
    error
  });
};

// export const updateTrack = (track, success) => {
//   $.ajax({
//     method: 'PATCH',
//     url: `api/tracks/${track.id}`,
//     data: { track },
//     success
//   });
// };

export const destroyTrack = (track, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${track.id}`,
    success
  });
};

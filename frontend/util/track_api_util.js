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
    data: {track},
    success,
    error
  });
};

export const destroyTrack = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`,
    success
  });
};

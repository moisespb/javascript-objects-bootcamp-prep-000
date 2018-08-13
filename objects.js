var playlist = {
  Drake: 'Know yourself',
  Future: 'March madness',
  Youngthug: 'Digits'
};

function updatePlaylist(obj, string, value) {
  obj[string] = value
  playlist.liluzi = 'Xo tour life';
 
  return obj
}

function removeFromPlaylist (obj, string) {
  
  delete playlist.Youngthug;
 
  return playlist
}

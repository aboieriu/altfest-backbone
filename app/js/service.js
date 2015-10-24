var service = service || {}
service.base = "http://localhost:3000/api";
//artist
service.artist = service.base + "/artists";
// Song
service.song = service.artist + "/${artistId}/songs";
service.songs = service.base + "/songs";
var views = views || {};

views.CreateArtistSongView = Marionette.ItemView.extend({
    template: "#create-artist-song-template",
    className: 'card'
    , ui: {
        '$songName': '#songNameInput',
        '$youtubeUrl': '#songUrl'
    }
    , events: {
        'keypress #songNameInput': 'createArtistInputKeypressHandler',
        'keypress #songUrl': 'createArtistInputKeypressHandler'
    }

    , initialize: function(options) {
        _.bindAll(this, 'createArtistInputKeypressHandler');
    }

    , createArtistInputKeypressHandler: function(e){
        var self = this;
        if (e.keyCode == 13) {
            var songData = this.gatherData();
            if (songData.name && songData.name.trim().length > 0
                && songData.urlYoutube && songData.urlYoutube.trim().length > 0) {
                var song = new model.Song(songData);
                song.artistId = this.collection.artistId;

                song.save().then(function() {
                    self.collection.fetch();
                });
            }
        }
    }

    , gatherData: function() {
        var artistData = {
            name: this.ui.$songName.val()
            , urlYoutube: this.ui.$youtubeUrl.val()
        };
        return artistData;
    }
});
var views = views || {};

views.ArtistSongView = Marionette.ItemView.extend({
    template: "#artist-song-template",
    tagName: 'li',
    className: 'card'
    , events: {
        'click .listen-btn': 'listenSong'
    }

    , templateHelpers: {
        getEmbededUrl: function() {
            return this.urlYoutube.replace('watch?v=', 'embed/');
        }
    }

    , listenSong : function() {

    }
});
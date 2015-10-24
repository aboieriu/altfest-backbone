var layout = layout || {};

layout.ArtistLayout = Marionette.LayoutView.extend({
    template: "#artist-layout",
    regions: {
        artistDetails: "#artist-details-region"
        , artistSongs: "#artist-song-region"
        , createArtistSongs: "#create-artist-song-region"
    }

    , initialize: function(options) {
        this.songCollection = new collection.Songs();
        this.songCollection.artistId = options.artistId;
        this.artistId = options.artistId;
    }


    , render: function() {
        Marionette.LayoutView.prototype.render.apply(this, arguments);
        this.artistSongs.show(new views.ArtistSongsView({collection: this.songCollection}));
        this.createArtistSongs.show( new views.CreateArtistSongView({collection: this.songCollection}));
        this.songCollection.fetch();
        return this;
    }
});
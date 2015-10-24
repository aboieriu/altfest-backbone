var layout = layout || {};

layout.HomeLayout = Marionette.LayoutView.extend({
    template: "#home-layout",
    regions: {
        artists: "#artists-region",
        createArtists: "#create-artist-region"
    }

    , initialize: function() {
        this.collection = new collection.Artists();
    }

    , render: function() {
        Marionette.LayoutView.prototype.render.apply(this, arguments);
        this.artists.show(new views.ArtistsView({collection: this.collection}));
        this.createArtists.show(new views.CreateArtistView({collection: this.collection}));
        this.collection.fetch();
        return this;
    }
});
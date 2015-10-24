var views = views || {};

views.ArtistSingleView = Marionette.ItemView.extend({
    template: "#artist-single-template",
    className: 'artist-single-view'
    , modelEvents: {
        'sync':'render'
    }
});
var views = views || {};

views.ArtistsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'artists',
    childView: views.ArtistView
});
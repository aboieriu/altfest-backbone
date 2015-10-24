var views = views || {};

views.ArtistSongsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'artist-songs',
    childView: views.ArtistSongView
});
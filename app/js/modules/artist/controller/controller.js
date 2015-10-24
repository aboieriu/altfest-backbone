var controller = controller || {};
controller.artistController = {
    showArtist:function(artistId) {
        SongManager.showLayout(new layout.ArtistLayout({artistId:artistId}));
    }
}
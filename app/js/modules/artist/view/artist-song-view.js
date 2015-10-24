var views = views || {};

views.ArtistSongView = Marionette.ItemView.extend({
    template: "#artist-song-template",
    tagName: 'li',
    className: 'card'
    , ui: {
        $artistName: '.song-name'
    }
    , events: {
        'click .card-delete': 'cardDeleteHandler'
        , 'click .artist-song-likes': 'artistSongLikeClickHandler'
        , 'blur .song-name': 'updateArtistSongName'
        , 'click .listen-btn' : 'showSongModal'
    }

    , modelEvents: {
        'sync':'render'
    }

    , getEmbededUrl: function() {
        return this.model.get('urlYoutube').replace('watch?v=', 'v/');
    }


    , cardDeleteHandler: function() {
        this.model.destroy();
    }
    , artistSongLikeClickHandler: function(){
        this.model.set('likes', this.model.get('likes') + 1);
        this.model.save();
    }

    , updateArtistSongName: function(){
        var artistName = this.ui.$artistName.text();
        if (artistName != this.model.get('name')){
            this.model.set('name', artistName);
            this.model.save();
        }
    }

    , showSongModal: function(){
        this.$el.find('.modal-video .modal-body').html('<iframe width="860" height="615" src="'+this.getEmbededUrl()+'" frameborder="0" allowfullscreen></iframe>')
    }
});
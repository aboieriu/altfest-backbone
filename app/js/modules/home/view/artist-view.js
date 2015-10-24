var views = views || {};

views.ArtistView = Marionette.ItemView.extend({
    template: "#artist-template",
    tagName: 'li',
    className: 'card'
    , ui: {
        $artistName: '.artist-name'
    }
    , events: {
        'click .card-delete': 'cardDeleteHandler'
        , 'blur .artist-name': 'updateArtistName'
    }

    , cardDeleteHandler: function() {
        this.model.destroy();
    }

    , updateArtistName: function(){
        var artistName = this.ui.$artistName.text();
        if (artistName != this.model.get('name')){
            this.model.set('name', artistName);
            this.model.save();
        }
    }
});
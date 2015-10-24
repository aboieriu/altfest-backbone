var views = views || {};

views.CreateArtistView = Marionette.ItemView.extend({
    template: "#create-artist-template",
    className: 'card'
    , ui: {
        '$artistName': '#artistNameInput'
    }
    , events: {
        'keypress #artistNameInput': 'createArtistInputKeypressHandler'
    }

    , initialize: function() {
        _.bindAll(this, 'createArtistInputKeypressHandler');
    }

    , createArtistInputKeypressHandler: function(e){
        if (e.keyCode == 13) {
            var self = this;
            var artist = new model.Artist({name:this.ui.$artistName.val()});
            artist.save().then(function(){
                self.collection.fetch();
                self.ui.$artistName.val('');
            });

        }
    }
});
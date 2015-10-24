var collection = collection || {};
collection.Songs = Backbone.Collection.extend({
    url: function() {
        var url = service.song;
        if (this.artistId){
            url = url.replace('${artistId}', this.artistId);
        }
        return url;
    },
    model: model.Song
})
var collection = collection || {};
collection.Artists = Backbone.Collection.extend({
    url: service.artist,
    model: model.Artist
})
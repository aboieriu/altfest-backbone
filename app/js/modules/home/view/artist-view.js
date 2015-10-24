var views = views || {};

views.ArtistView = Marionette.ItemView.extend({
    template: "#artist-template",
    tagName: 'li',
    className: 'card'
    , events: {
        'click .card-delete': 'cardDeleteHandler'
    }

    , initialize: function() {
        _.bindAll(this, 'cardDeleteHandler');
    }

    , cardDeleteHandler: function() {
        this.model.set('id', this.model.get('_id'));
        this.model.destroy();
    }
});
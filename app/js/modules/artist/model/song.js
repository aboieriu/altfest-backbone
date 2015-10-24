var model = model || {};
model.Song = Backbone.Model.extend({
    urlRoot: service.songs
    , parse: function(responseData){
        if (responseData._id){
            var data = _.omit(responseData, '_id');
            data.id = responseData._id;
            return data;
        }
        return {};
    }
});
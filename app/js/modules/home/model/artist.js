var model = model || {};

model.Artist = Backbone.Model.extend({
    urlRoot: service.artist
    , parse: function(responseData){
        if (responseData._id){
            var data = _.omit(responseData, '_id');
            data.id = responseData._id;
            return data;
        }
        return {};
    }
});
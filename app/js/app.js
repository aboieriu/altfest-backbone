SongManager = new Backbone.Marionette.Application();

SongManager.addRegions({
    mainRegion: "#content"
});

SongManager.addInitializer(function(options){
    this.showLayout = function( view ) {
        this.mainRegion.$el.hide();
        this.mainRegion.show( view );
        this.mainRegion.$el.fadeIn();
    };
    this.closeLayout = function() {
        this.mainRegion.close();
    }
});

SongManager.on("start", function(){
    new router.MainRouter();
    Backbone.history.start();
});
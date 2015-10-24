var router = router || {};
router.ArtistRouter = Marionette.AppRouter.extend({
    controller: controller.artistController,
    // "someMethod" must exist at controller.someMethod
    appRoutes: {
        "artist/:id": "showArtist"
    }
});
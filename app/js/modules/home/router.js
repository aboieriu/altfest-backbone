/**
 * Created by aboieriu on 10/24/15.
 */
var router = router || {};

router.MainRouter = Marionette.AppRouter.extend({
    controller: controller.mainController,
    // "someMethod" must exist at controller.someMethod
    appRoutes: {
        "": "showHome",
        "home": "showHome"
    }
});
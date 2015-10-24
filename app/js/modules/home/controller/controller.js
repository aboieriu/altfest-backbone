var controller = controller || {};
controller.mainController = {
    showHome:function() {
        SongManager.showLayout(new layout.HomeLayout());
    }
}
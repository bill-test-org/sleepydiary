window.Workspace = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Workspace.Routers.Entries();
    Backbone.history.start();

  }
};

$(document).ready(function(){
  Workspace.initialize();
});

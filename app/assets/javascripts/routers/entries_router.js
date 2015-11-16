Workspace.Routers.Entries = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    var view = new Workspace.Views.EntriesIndex();
    console.log(view.render().el);
    $('#container').html(view.render().el);
  }

});

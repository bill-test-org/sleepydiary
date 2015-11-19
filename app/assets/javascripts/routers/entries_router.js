Workspace.Routers.Entries = Backbone.Router.extend({
  routes: {
    '': 'index',
    'bill': 'bill'
  },

  initialize: function() {
    this.collection = new Workspace.Collections.Entries();
    this.collection.fetch({reset: true});
  },

  index: function() {
    var view = new Workspace.Views.EntriesIndex({collection: this.collection});
    $('#container').html(view.render().el);
  }

});

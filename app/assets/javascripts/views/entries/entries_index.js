Workspace.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  initialize: function(){
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function(){
    this.$el.html( this.template({entries: this.collection}) );
    this.collection.each(this.appendEntry);
    return this;
  },

  appendEntry: function(entry) {
    var view = new Workspace.Views.Entry({model: entry});
    $('#entries').append(view.render().el);
    //return this;
  }

});

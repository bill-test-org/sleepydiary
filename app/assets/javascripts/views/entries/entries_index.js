Workspace.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  initialize: function(){
    //this.collection.on('reset', this.render, this);
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function(){
    this.$el.html( this.template() );
    this.collection.each(this.appendEntry);
    return this;
  },

  appendEntry: function(entry) {
    console.log('append entry ' + entry.id);
    var view = new Workspace.Views.Entry({model: entry});
    $('#entries').append(view.render().el);
    //return this;
  }

});

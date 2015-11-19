Workspace.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  initialize: function(){
    //this.collection.on('reset', this.render, this);
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function(){
    this.$el.html( this.template({ entries : this.collection }) );
    return this;
  }

});

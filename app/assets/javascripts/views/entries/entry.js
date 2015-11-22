Workspace.Views.Entry = Backbone.View.extend({

  template: JST['entries/entry'],

  tagName: 'li',

  initialize: function(){
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function(){
    console.log('Bill inside entry.render');
    this.$el.html( this.template({ entry : this.model }) );
    return this;
  }

});

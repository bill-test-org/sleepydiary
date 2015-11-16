Workspace.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  render: function(){
    this.$el.html( this.template({ title : "The Title" }) );
    return this;
  }

});

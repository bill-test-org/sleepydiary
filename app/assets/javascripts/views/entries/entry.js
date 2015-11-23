Workspace.Views.Entry = Backbone.View.extend({

  template: JST['entries/entry'],

  tagName: 'li',

  events: {
    'click #edit_entry'   : 'clickEdit',
    'click #delete_entry' : 'clickDelete'
  },

  initialize: function(){
    this.listenTo(this.model, "remove", this.removeEntry);
  },

  render: function(){
    console.log('Bill inside entry.render');
    this.$el.html( this.template({ entry : this.model }) );
    return this;
  },

  clickEdit: function(e){
    console.log('clicked edit ' + this.model.id);
    var view = new Workspace.Views.EditEntry({model: this.model});

    var existingEditView = this.$el.find('#edit_entry_div');
    if(existingEditView.length <= 0) {
      this.$el.append(view.render().el);
    } else {
      existingEditView.remove();
    }
  },

  clickDelete: function(e){
    console.log('clicked delete ' + this.model.id);
    this.model.destroy({wait: true});
  },

  removeEntry: function(entry) {
    this.$el.remove();
  }

});

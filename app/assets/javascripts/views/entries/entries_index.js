Workspace.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  events: {
    'click #create_new_entry' : 'create'
  },

  initialize: function(){
    //this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    this.$el.html( this.template({entries: this.collection}) );
    this.collection.each(this.appendEntry);

    var view = new Workspace.Views.CreateEntry();
    $('#create_entry').html(view.render().el);

    return this;
  },

  appendEntry: function(entry) {
    var view = new Workspace.Views.Entry({model: entry});
    $('#entries').append(view.render().el);
    //return this;
  },

  create: function(e){
    e.preventDefault();
    var newEntryForm = this.$el.find('#new_entry');

    // TODO - this re-renders the entire collection... I need to look into
    // bootstrapping my initial data so as not to overload the 'sync' event
    this.collection.create({
      wake_time:    newEntryForm.find('#new_entry_wake_time').val(),
      bed_time:     newEntryForm.find('#new_entry_bed_time').val(),
      sleep_rating: newEntryForm.find('#new_entry_sleep_rating').val()
    }, {wait: true});
  }

});

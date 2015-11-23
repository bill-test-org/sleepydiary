Workspace.Views.EditEntry = Backbone.View.extend({

  template: JST['entries/edit_entry'],
  id: 'edit_entry_div',

  events: {
    'click #cancel_edit_entry'  : 'cancel',
    'click #update_entry'       : 'update'
  },

  initialize: function(){
    this.listenTo(this.model, 'sync', this.saved);
  },

  render: function(){
    this.$el.html( this.template({entry: this.model}) );
    return this;
  },

  cancel: function(e) {
    e.preventDefault();
    this.$el.remove();
  },

  update: function(e){
    e.preventDefault();

    this.bedTime = this.bed_time || this.$el.find('#edit_entry_bed_time');
    this.wakeTime = this.wake_time || this.$el.find('#edit_entry_wake_time');
    this.sleepRating = this.sleep_rating || this.$el.find('#edit_entry_sleep_rating');
    
    console.log("update! bed_time=" + this.bedTime.val());
    console.log("update! wake_time=" + this.wakeTime.val());
    console.log("update! sleep_rating=" + this.sleepRating.val());

    this.model.save({
      sleep_rating: this.sleepRating.val(),
      bed_time:     this.bedTime.val(),
      wake_time:    this.wakeTime.val()
    }, {wait: true});
  },

  saved: function(entry) {
    console.log('save success');
    this.$el.remove();
  }

});

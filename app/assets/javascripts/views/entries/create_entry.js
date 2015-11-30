Workspace.Views.CreateEntry = Backbone.View.extend({

  template: JST['entries/create_entry'],

  events: {
    //'focus #datetime' : 'focusDateTime',
    'click #new_entry_bed_time' : 'clickDateTime',
    'click #new_entry_wake_time': 'clickDateTime'
  },

  initialize: function(){

  },

  render: function(){
    this.$el.append( this.template() );

    // HACK - pickadate.js allows you to specify a 'container', but when i do
    // and i use the hidden html5 flag, the popup doesnt show properly (probably
    // because it also gets hidden)
    this.hiddenDate = this.$el.find('#date').hide();
    this.hiddenTime = this.$el.find('#time').hide();

    this.$bedTime = this.$el.find('#new_entry_bed_time');
    this.$wakeTime = this.$el.find('#new_entry_wake_time');
    this.datePicker = this.initDatePicker();
    this.timePicker = this.initTimePicker();

    return this;
  },

  focusDateTime: function(event) {
    console.log('focus date');
    this.datePicker.open();
  },

  clickDateTime: function(event) {
    event.stopPropagation(); // this is REQUIRED - otherwide datePicker wont pop-up
    this.targetTextField = event.target;
    this.datePicker.open();
  },

  // see http://jsfiddle.net/leocaseiro/6cc69v21/1/
  initDatePicker: function(){
    var that = this;
    return this.$el.find('#date').pickadate({
      onSet: function(item) {
        if ( 'select' in item ) setTimeout( that.timePicker.open, 0 )
      }
    }).pickadate('picker');
  },

  initTimePicker: function(){
    var that = this;
    return this.$el.find('#time').pickatime({
      interval: 15,
      onSet: function(item) {
        if ( 'select' in item ) setTimeout( function() {
          $(that.targetTextField).
            //off('focus').
            val( that.datePicker.get() + ' @ ' + that.timePicker.get() ).
            focus();
            //on('focus', this.datepicker.open)
        }, 0 )
      }
    }).pickatime('picker');
  }
});

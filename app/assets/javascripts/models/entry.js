Workspace.Models.Entry = Backbone.Model.extend({

  CLIENT_MOMENT_FORMAT: 'D MMMM, YYYY @ h:mm A',

  // override parse & toJSON becuase server time format does not match client
  // server example: 2009-02-09T23:00:00.000Z
  // client example: 17 November, 2015 @ 12:45 AM
  parse: function(response){
    if (response) {
      // PUT response is empty - no need to convert
      response.bed_time = this.convertToClient(response.bed_time);
      response.wake_time = this.convertToClient(response.wake_time);
    }

    return response;
  },

  toJSON: function() {
    var attrs = _.clone(this.attributes);
    attrs.bed_time = this.convertToServer(attrs.bed_time);
    attrs.wake_time = this.convertToServer(attrs.wake_time);
    return attrs;
  },

  convertToServer: function(clientDatetime) {
    // TODO - implement!
    var date = moment(clientDatetime, this.CLIENT_MOMENT_FORMAT);
    return date.format();
  },

  convertToClient: function(serverDatetime) {
    // server uses a standard ISO format that moment.js recognizes automatically (Yay!)
    var date = moment(serverDatetime);

    // WRITE
    return date.format(this.CLIENT_MOMENT_FORMAT);
  }
});

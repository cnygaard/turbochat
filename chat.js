Messages = new Meteor.Collection('messages');
// Empty the chat log/db Messages.remove({});

if (Meteor.isClient) 
{
    Template.messages.messages = function()
    {
      return Messages.find({}, { sort: { time: 1 }});
    }

  Template.entryfield.events = 
  {
    "keydown #message": function(event)
    {
      if(event.which == 13)
      {
        // Submit the form
        var name = document.getElementById('name');
        var message = document.getElementById('message');
        var file = document.getElementById('file');
        var date = new Date(Date.now());
        // hours part from the timestamp
        var hours = date.getHours().toString();
        // minutes part from the timestamp
        var minutes = date.getMinutes();

        if(name.value != '' && message.value != '')
        {
          Messages.insert({
            name: name.value,
            message: message.value,
            time: Date.now(),
            hours: hours,
            minutes: minutes
          });

          //name.value = '';
          message.value = '';
        }
      }
    }
  }
}

if (Meteor.isServer) {

}

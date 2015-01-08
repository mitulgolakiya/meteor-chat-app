/**
 * Created by Mitul on 03/01/15.
 */

Template.registerHelper('formatDate', function(date) {
    return moment(date).from(new Date());
});

Template.chat.helpers({
    messages: function () {
        return Chat.find({}, {sort: {sentOn: 1}});
    },
    allUsers: function () {
        return Meteor.users.find({}, {sort: {"profile.firstName":1}});
    }
});

Template.userRenderer.helpers({
    userStatus: function () {
        if(this.status)
        {
            if(this.status.online)
                return "Online";
        }

        return "Offline";
    },
    userStatusBool: function () {
        if(this.status)
        {
            if(this.status.online)
                return true;
        }

        return false;
    }
});

Template.chat.events({
    'click #btnSend': function (event, template) {
        var message = template.$('[id=textMessage]').val();
        Meteor.call("newChatMessage", message);
    }
});
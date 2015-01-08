/**
 * Created by Mitul on 03/01/15.
 */

Template.registerHelper('formatDate', function (date) {
    return moment(date).from(new Date());
});

Template.chat.helpers({
    messages: function () {
        return Chat.find({}, {sort: {sentOn: 1}});
    },
    allUsers: function () {
        return Meteor.users.find({}, {sort: {"profile.firstName": 1}});
    },
    currUserName: function () {
        return Meteor.user().profile.name;
    }
});

Template.userRenderer.helpers({
    userStatus: function () {
        if (this.status) {
            if (this.status.online)
                return "Online";
        }

        return "Offline";
    },
    profilePicture: function () {
        if (this.services) {
            if (this.services.google) {
                return this.services.google.picture;
            }
            else if (this.services.facebook) {
                return "http://graph.facebook.com/" + this.services.facebook.id + "/picture/?type=large";
            }
        }
        return "images/user.png";
    },
    userStatusBool: function () {
        if (this.status) {
            if (this.status.online)
                return true;
        }

        return false;
    }
});

Template.chatMessage.helpers({
    profilePicture: function () {
        var users = Meteor.users.find({_id:this.userId}).fetch();
        if(users.length > 0) {
            var user = users[0];
            if (user.services) {
                if (user.services.google) {
                    return user.services.google.picture;
                }
                else if (user.services.facebook) {
                    return "http://graph.facebook.com/" + this.services.facebook.id + "/picture/?type=large";
                }
            }
        }

        return "images/user.png";
    }
});

Template.chat.events({
    'click #btnSend': function (event, template) {
        var message = template.$('[id=textMessage]').val();
        Meteor.call("newChatMessage", message);
    }
});
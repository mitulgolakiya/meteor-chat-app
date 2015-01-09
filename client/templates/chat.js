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

Template.chat.events({
    'submit #chatMsgForm': function (event, template) {
        event.preventDefault();

        var message = template.$('[id=textMessage]').val();
        Meteor.call("newChatMessage", message);
        template.$('[id=textMessage]').val("");
    }
});
/**
 * Created by Mitul on 03/01/15.
 */

if (Meteor.isServer) {

    Meteor.publish('users', function () {
        return Meteor.users.find({}, {fields: {profile: 1, status: 1}});
    });

    Meteor.publish('Chat', function () {
        return Chat.find({});
    });

    Meteor.methods({
        newChatMessage: function (message) {

            var chatObj = {
                'user': Meteor.user().profile.firstName,
                'message': message,
                'sentOn': new Date()
            };

            Chat.insert(chatObj);
        }
    });
}
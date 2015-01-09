/**
 * Created by Mitul on 09/01/15.
 */

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
/**
 * Created by Mitul on 09/01/15.
 */

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
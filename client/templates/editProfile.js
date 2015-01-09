/**
 * Created by Mitul on 09/01/15.
 */

Template.profileEdit.helpers({
    currUserFullName: function () {
        return Meteor.user().profile.name;
    }
});

Template.profileEdit.events({
    'click #btnSave': function (event, template) {
        event.preventDefault();

        var name = template.$('[id=inputFullName]').val();
        Meteor.call('updateProfileName', name);
        template.$('#edit-profile-dialog').modal('hide');
    }
});
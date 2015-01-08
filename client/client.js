/**
 * Created by Mitul on 08/01/15.
 */

Meteor.startup(function () {
    AccountsEntry.config({
        dashboardRoute: 'chat',
        homeRoute: '/',
        extraSignUpFields: [{
            field: "firstName",
            name: "",
            label: "First Name",
            placeholder: "First Name",
            type: "text",
            required: true
            },
            {
                field: "lastName",
                name: "",
                label: "Last Name",
                placeholder: "Last Name",
                type: "text",
                required: true
            }
        ]
    })
});

if (Meteor.isClient) {
    Meteor.subscribe('users');
    Meteor.subscribe('Chat');
}
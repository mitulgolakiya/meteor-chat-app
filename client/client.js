/**
 * Created by Mitul on 08/01/15.
 */

Meteor.startup(function () {
    AccountsEntry.config({
        dashboardRoute: 'chat',
        homeRoute: '/'
    })
});

if(Meteor.isClient) {
    Meteor.subscribe('users');
    Meteor.subscribe('Chat');
}
/**
 * Created by Mitul on 30/12/14.
 */

Template.login.events({
    'submit': function(event, tempalte) {
        event.preventDefault();

        var email = tempalte.$('[name=email]').val();
        var password = tempalte.$('[name=password]').val();

        Meteor.loginWithPassword(email, password, function (error) {
            console.log("login done");
            console.log(error);
            if(error) {
                Router.go('/');
            }
            else
                Router.go('home');
        });
    }
});
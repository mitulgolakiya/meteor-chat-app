/**
 * Created by Mitul on 31/12/14.
 */

Template.signUp.events({
    'submit': function (event, tempalte) {
        event.preventDefault();

        var firstName = tempalte.$('[name=firstName]').val();
        var lastName = tempalte.$('[name=lastName]').val();
        var email = tempalte.$('[name=email]').val();
        var password = tempalte.$('[name=password]').val();
        var confirm = tempalte.$('[name=confirm]').val();

        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                firstName: firstName,
                lastName: lastName
            }
        }, function (error) {
            Router.go('/');
        });
    }

});
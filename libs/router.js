/**
 * Created by Mitul on 30/12/14.
 */

//Router.route('/sign-in', function () {
//    this.render('login');
//});
//
//Router.route('/sign-out', function () {
//    Meteor.logout(function () {
//        Router.go('/');
//    });
//
//});
//
//Router.route('/sign-up', function () {
//    this.render('singUp');
//});

Router.route("/", function () {
    this.redirect('chat');
});

Router.route("home", function () {
    if(Meteor.user())
        this.redirect('chat');
    else
        this.redirect('sign-in');
});
//
//Router.route("/login", function () {
//    if (Meteor.user()) {
//        this.redirect('/chat');
//        this.render("chat");
//    }
//    else
//        this.render('login');
//});
//
//Router.route("/signUp", function () {
//    if (Meteor.user()) {
//        this.redirect('/chat');
//        this.render("chat");
//    }
//    else
//        this.render('signUp');
//});
//
//Router.onBeforeAction(function () {
//    AccountsEntry.signInRequired(this);
//}, {except: ['sign-in', 'sign-up']});

//Router.route("/home", {
//    name: 'home',
//    path: "/home",
//    template: 'home',
//    action: function () {
//        this.render('home');
//    }
//});

Router.route("chat", {
    name: 'chat',
    path: "chat",
    template: 'chat',
    onBeforeAction: function () {
        AccountsEntry.signInRequired(this);
    },
    action: function () {
        this.render('chat');
    }
});

//Router.route("/logout", function () {
//    Meteor.logout(function () {
//        Router.go('/');
//    });
//});
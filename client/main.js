Meteor.subscribe("userData");

Meteor.subscribe("students");

Meteor.subscribe("classes");

Meteor.subscribe("classDatas");

var Teachers= Meteor.subscribe("teachers");

Template.registerHelper("ownPression",function(){
    return Meteor.user() ? (Meteor.user().permission >= 9999) : false;;
});

Template.registerHelper("isTeacher",function(permission){
    return permission == 1;
})
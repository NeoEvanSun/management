Accounts.onCreateUser(function(option,user){
    throw new Meteor.error("403","用户名长度不可以过3");
})
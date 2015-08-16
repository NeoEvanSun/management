Accounts.onCreateUser(function(options,user){
    user.username == "admin" ?user.permission = 9999 : user.permission=1;
    return user;
})
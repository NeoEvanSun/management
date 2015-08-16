Template.loginPage.events({
    "submit .form-horizontal":function(e){
        e.preventDefault();
        var username = $(e.target).find("#username").val();
        var password = $(e.target).find("#password").val();

    }
})
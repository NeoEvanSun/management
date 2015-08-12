Template.classAdd.helpers({
    mydatepicker:{mydateid:'class_time'}
});

Template.classAdd.events({
    "submit #add_student_form":function(e){
        e.preventDefault();
        var classObj={
            class_name:$(e.target).find("#class_name").val(),
            create_time:$(e.target).find("#class_time").val(),
        };
        console.log(classObj);
        classObj._id=Classes.insert(classObj);
        Router.go("classList");
    }
})
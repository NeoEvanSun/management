Template.studentClassDataEdit.helpers({
    editTypes:[{type_value:'+',type_name:'充值'},{type_value:'-',type_name:'扣减'},{type_value:'|',type_name:'调整'}]
});

Template.studentClassDataEdit.events({
    "submit #add_student_form":function(e){
        e.preventDefault();
        var editVariable = parseInt($(e.target).find("#class_data").val());
        var action = $(e.target).find("#edit_type").val();
        var _this=this;
        var classTime = parseInt(_this.classTime);

        switch (action) {
            case "+" : classTime += editVariable;break;
            case "-" : classTime -= editVariable;break;
            case "|" : classTime = editVariable;break;
            default : classTime = editVariable;
        }

        Student.update(_this._id,{$set:{classTime:classTime}},function(error){
            if(error){
                alert(error.reason);
            }else{
                Router.go('studentList');
            }
        })
    }
})
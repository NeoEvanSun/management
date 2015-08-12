Template.dataAdd.helpers({
    students:Student.find(),
    dataTypes:[{type_name:'缺课',type_value:0},{type_name:'正常上课',type_value:1},{type_name:'补课',type_value:2}],
    dataClasses:Classes.find(),
    mydatepicker:{mydateid:'data_time'}
});

Template.dataAdd.events({
    "submit #add_student_form":function(e){
        e.preventDefault();
        var dataType=$(e.target).find("#data_type").val();
        var dataCost= dataType==0 ? 0:2;
        var data={
            stu_id:$(e.target).find("#sel_student").val(),
            data_type:$(e.target).find("#data_type").val(),
            data_content:$(e.target).find("#data_content").val(),
            data_tip:$(e.target).find("#data_tip").val(),
            data_time:$(e.target).find("#data_time").val(),
            class_id:$(e.target).find("#data_class").val(),
            data_cost:dataCost
        };
        data._id=ClassDatas.insert(data);
        var student=Student.findOne(data.stu_id);
        student.classTime -= dataCost;
        Student.update(student._id,{$set:{classTime:student.classTime}},function(error){
            if(error){
                alert(error.reason);
            }else{
                Router.go("dataList");
            }
        });

    }
})
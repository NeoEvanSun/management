Template.studentName.helpers({
    getStudentName:function(stu_id){
        console.log(stu_id);
        return Student.findOne({_id:stu_id}).name;
    }
})
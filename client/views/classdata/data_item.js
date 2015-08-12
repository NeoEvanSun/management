Template.dataItem.events({
    //删除
    "click .btn-danger":function(e){
        if(confirm("确定删除吗？")){
            var stu_id = this.stu_id;
            var student = Student.findOne(stu_id);
            if(student){
                student.classTime += parseInt(this.data_cost);
                Student.update(stu_id,{$set:{classTime:student.classTime}},function(error){
                    if(error){
                        alert(error);
                    }
                })
            }
            var _id=this._id;
            ClassDatas.remove(_id);
        }
    }
})
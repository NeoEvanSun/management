Template.classItem.events({
    "click .btn-danger":function(e){
        if(confirm("确定删除吗？")){
            var _id=this._id;
            Classes.remove(_id);
        }
    }
})
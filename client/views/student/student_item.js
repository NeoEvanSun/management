Template.studentItem.helpers({
});

Template.studentItem.events({
	//编辑
	"click .btn-info":function(e){

	},
	//删除
	"click .btn-danger":function(e){
		if(confirm("确定删除吗？")){
			var _id=this._id;
			Student.remove(_id);
		}
	}
});
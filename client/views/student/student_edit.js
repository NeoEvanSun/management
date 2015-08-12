Template.studentEdit.helpers({
	title:"学员编辑",
	channels:[{name:'channel1',value:'1'}],
	sexes:[{name:'男',value:'男'},{name:'女',value:'女'}],
	studentTypes:[{name:'正式学员',value:'正式学员'},{name:'潜在学员',value:'潜在学员'}],
	classes:[{classname:'班级1',value:'班级1'},{classname:'班级2',value:'班级2'},{classname:'班级3',value:'班级3'}],
	selectchoice:function(value){
		return this.value==value?"selected":'';
	}
});

Template.studentEdit.events({
	"submit #add_student_form":function(e){
		e.preventDefault();
		var _id=this._id;
		console.log(_id);
		var student={
			name:$(e.target).find("#student_name").val(),
			parentName:$(e.target).find("#parent_name").val(),
			phoneNum:$(e.target).find("#phone_number").val(),
			sex:$(e.target).find("#sex").val(),
			type:$(e.target).find("#student_type").val(),
			class_id:$(e.target).find("#select_class").val(),
			channel:$(e.target).find("#channel").val(),
			createTime:new Date().getTime(),
			classTime:0
		}
		Student.update(_id,student,function(error){
			if(error){
				alert(error.reason);
			}else{
				Router.go("studentList");
			}
		})
	}
});
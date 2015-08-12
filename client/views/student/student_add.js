Template.studentAdd.helpers({
	title:"学员新增",
	channels:[{name:'channel1',value:'1'}],
	sexes:[{name:'男',value:'男'},{name:'女',value:'女'}],
	studentTypes:[{name:'正式学员',value:'正式学员'},{name:'潜在学员',value:'潜在学员'}],
	classes:Classes.find(),
	mydatepicker:{mydateid:'kire'}
});

Template.studentAdd.events({
	"submit #add_student_form":function(e){
		e.preventDefault();
		var student={
			name:$(e.target).find("#student_name").val(),
			parentName:$(e.target).find("#parent_name").val(),
			phoneNum:$(e.target).find("#phone_number").val(),
			sex:$(e.target).find("#sex").val(),
			type:$(e.target).find("#student_type").val(),
			class_id:$(e.target).find("#select_class").val(),
			channel:$(e.target).find("#channel").val(),
			createTime:$(e.target).find(".datepicker").val(),
			classTime:0
		};
		console.log(student);
		student._id=Student.insert(student);
		Router.go("studentList",{pageNum:1});
	}
})
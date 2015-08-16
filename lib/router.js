Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){

	this.route("loginPage",{path:"/"});
	
	this.route("studentList",{
		path:'/:pageNum',
		data:function(){
			var pageLimit = 2;
			var skip = (this.params.pageNum-1)* pageLimit;
			var dataList = Student.find({},{skip:skip,limit:pageLimit}).fetch();
			return {students:dataList,
						pageInfo:{
							pageNum:parseInt(this.params.pageNum),
							dataCounts:Student.find().count(),
							limit:pageLimit,
							pageUrl:"studentList",
							buttonNum:5
						}
			       };
		}
	});

	this.route("studentAdd",{path:"/student/add"});

	this.route("studentEdit",
	{
		path:"/student/edit/:_id",
		data:function(){
			return Student.findOne(this.params._id);
		}
	});

	this.route("classList",{path:'/class/list'});

	this.route("classAdd",{path:'/class/add'});

	this.route("dataList",{path:'/data/list'});

	this.route("dataAdd",{path:'/data/add'});

	this.route("studentClassDataEdit",
	{
		path:"/student/classDataEdit/:_id",
		data:function(){
			return Student.findOne(this.params._id);
		}
	});

	this.route("dataCalendar",
		{
			path:'data/calendar/:_id',
			data:function(){
				return {data:ClassDatas.find({stu_id:this.params._id})};
			}
		});
})
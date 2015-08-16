Meteor.publish("userData",function(){
    if(this.userId){
        return Meteor.users.find({_id:this.userId},{fields:{"services":1,"permission":1}});
    }
});

Meteor.publish("students",function(){
    return Student.find({},{sort:{createTime:-1}});
});

Meteor.publish("classes",function(){
    return Classes.find();
});

Meteor.publish("classDatas",function(){
    return ClassDatas.find();
});

Meteor.publish("teachers",function(){
    return Meteor.users.find({},{field:{"permission":1}});
})

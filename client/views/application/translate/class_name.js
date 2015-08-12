Template.className.helpers({
    showClassName:function(class_id){
        return Classes.findOne({_id:class_id}).class_name;
    }
});
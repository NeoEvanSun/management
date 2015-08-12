Template.dataCalendar.rendered = function(){
    var classDatas=this.data.data;
    var events=[];
    classDatas.forEach(function(classData){
        var eventName="";
        var color = '#43B5AD';
        console.log(classData.data_type);
        switch (classData.data_type) {
            case "0" : eventName="缺课";color="#E25A59";break;
            case "1" : eventName="正常上课";break;
            case "2" : eventName="补课";color="#DEB948";break;
            default : eventName="配置错误"
        }
        events.push({title:eventName,start:classData.data_time,color:color});
    })
    this.$("#calendar").fullCalendar({
        dayClick: function() {
            //alert('a day has been clicked!');
        },
        events:events
    });
};

Template.dataCalendar.helpers({

})
Template.pager.helpers({
    look:function(object){
        //console.log(object);
    },
    createPageButtons:function(pageInfo){
        var pageButtons = [];
        for(var i=0;i < pageInfo.buttonNum ;i++){
            var pageButton = {};
            var toPage = -2+i+pageInfo.pageNum;
            pageButton.url = pageInfo.pageUrl;
            pageButton.label = toPage;
            pageButton.toPageNum = toPage;
            if(pageButton.toPageNum>0){
                pageButtons.push(pageButton);
            }
        }
        return pageButtons;
    },
    isActive:function(localNum,pageNum){
        return localNum == pageNum;
    }
})
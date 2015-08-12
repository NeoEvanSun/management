Template.pager.helpers({
    look:function(object){
        //console.log(object);
    },
    createPageButtons:function(pageInfo){
        var pageButtons = [];
        var maxPageNum = parseInt(pageInfo.dataCounts / pageInfo.limit);
        maxPageNum = pageInfo.dataCounts % pageInfo.limit > 0 ? maxPageNum + 1: maxPageNum;
        var middleCount = parseInt(pageInfo.buttonNum / 2);
        var forSize = pageInfo.pageNum <= middleCount ? (pageInfo.buttonNum +middleCount)  : pageInfo.buttonNum;
        for(var i=0;i < forSize ;i++){
            var pageButton = {};
            var toPage = -middleCount+i+pageInfo.pageNum;
            pageButton.url = pageInfo.pageUrl;
            pageButton.label = toPage;
            pageButton.toPageNum = toPage;
            if(pageButton.toPageNum > 0 && pageButton.toPageNum <= maxPageNum && pageButtons.length < pageInfo.buttonNum){
                pageButtons.push(pageButton);
            }else{

            }
        }
        return pageButtons;
    },
    isActive:function(localNum,pageNum){
        return localNum == pageNum;
    }
})
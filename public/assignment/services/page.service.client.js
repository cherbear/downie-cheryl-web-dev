(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {

        var pages = [
                {"_id":"321","name":"Post1","websiteId":"456"},
                {"_id":"432","name":"Post2","websiteId":"456"},
                {"_id":"543","name":"Post3","websiteId":"456"}
            ];

        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function updatePage(pageId, page) {
            for(var i in pages) {
                if(pages[i]._id === id) {
                    pages[i].name = newPage.name;
                    return true;
                }
            }
            return false;
        }
        function createPage(websiteId, page) {}
        function deletePage(pageId) {}
        function findPageById(pageId) {
            for(var i in pages) {
                if(pages[i]._id === id) {
                    return pages[i];
                }
            }
            return null;
        }
        function findPageByWebsiteId(websiteId) {
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {
                    return pages[i];
                }
            }
            return null;
        }

    }
})();
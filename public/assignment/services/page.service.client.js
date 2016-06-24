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

        function createPage(page) {
            pages.push(page);
            return true;
        }

        function findPageByWebsiteId(websiteId) {
            var pp = [];
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {
                    pp.push(pages[i]);
                }
            }
            return pp;
        }

        function findPageById(pageId) {
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    return pages[i];
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    pages[i].name = page.name;
                    return true;
                }
            }
            return false;
        }

        function deletePage(pageId) {
            for(var i = pages.length - 1; i >= 0; i--) {
                if(pages[i]._id === pageId) {
                    pages.splice(i, 1);
                }
            }
        }



    }
})();
var mongoose = require("mongoose");

module.exports = function() {

    var PageSchema = require("./page.schema.server.js")();
    var Page = mongoose.model("Page", PageSchema);

    var api = {
        createPage: createPage,
        findPageByWebsiteId: findPageByWebsiteId,
        findAllPagesForWebsite: findAllPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage
    };
    return api;

    function createPage(websiteId, page) {
        page._website = websiteId;
        return Page.create(page);
    }

    function findPageByWebsiteId(websiteId) {
        return Page.find({_website: websiteId});
    }

    function findAllPagesForWebsite(websiteId) {
        return Page.find({_website: websiteId});
    }

    function findPageById(pageId) {
        return Page.findById(pageId);
    }

    function updatePage(pageId, newPage) {
        return Page.update(
            {_id: pageId},
            {$set :
            {
                name: newPage.name,
                title: newPage.title,
                description: newPage.description,
                widgets: newPage.widgets
            }
            }
        );
    }

    function deletePage(pageId) {
        return Page.remove({_id: pageId});
    }
};
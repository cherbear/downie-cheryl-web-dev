var mongoose = require("mongoose");

module.exports = function() {

    var WidgetSchema = require("./widget.schema.server")();
    var Widget = mongoose.model("Widget", WidgetSchema);

    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        reorderWidget: reorderWidget
    };
    return api;

    function createWidget(pageId, widget) {
        widget._page = pageId;
        return Widget.create(widget);
    }

    function findAllWidgetsForPage(pageId) {
        return Widget.find({_page: pageId});
    }

    function findWidgetById(widgetId) {
        return Widget.findById(widgetId);
    }

    function updateWidget(widgetId, newWidget) {
        return Widget.update(
            {_id: widgetId},
            {$set :
            {
                type : newWidget.type,
                name: newWidget.name,
                text: newWidget.text,
                description: newWidget.description,
                url: newWidget.url,
                width: newWidget.width,
                height: newWidget.height,
                rows: newWidget.rows,
                size: newWidget.size,
                class: newWidget.class,
                icon: newWidget.icon,
                deletable: newWidget.deletable,
                formatted: newWidget.formatted,
            }
            }
        );
    }

    function deleteWidget(widgetId) {
        return Widget.remove({_id: widgetId});
    }

    function reorderWidget(pageId, start, end) {
        //Modifies the order of widget at position start into final position end in page whose _id is pageId
    }
};
function initSortable() {
    $(".column .inside").sortable({
        connectWith: ".column .inside",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        start: function (event, ui) {
            ui.item.addClass('tilt');
            tilt_direction(ui.item);
        },
        stop: function (event, ui) {
            ui.item.removeClass("tilt");
            $("html").unbind('mousemove', ui.item.data("move_handler"));
            ui.item.removeData("move_handler");
            console.log(event, ui, $(event.target).prop('id'),
                    ui.item.prop('id'),
                    ui.item.closest('.inside').prop('id'));
            $('#reloadTarget').load('plugin.php', {
                page: 'KanbanBoard/kanban',
                action: 'move',
                issue: ui.item.prop('id'),
                from: $(event.target).prop('id'),
                to: ui.item.closest('.inside').prop('id')
            }, function () {
                initSortable();
            });
        }
    });
}

function tilt_direction(item) {
    var left_pos = item.position().left,
            move_handler = function (e) {
                if (e.pageX >= left_pos) {
                    item.addClass("rightTilt");
                    item.removeClass("leftTilt");
                } else {
                    item.addClass("leftTilt");
                    item.removeClass("rightTilt");
                }
                left_pos = e.pageX;
            };
    $("html").bind("mousemove", move_handler);
    item.data("move_handler", move_handler);
}

initSortable();

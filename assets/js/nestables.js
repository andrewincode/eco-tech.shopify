/* ============================================================
 * Nestables
 * Creates draggable, nested list structures using jQuery Nestable
 * plugin
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';

    $(document).ready(function() {
        var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.html(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.html('JSON browser support required for this demo.');
            }
        };
        $('#basic_example').nestable();
        $('#drag_handler_example').nestable();
        // activate Nestable for list 1
        $('#nestable').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // activate Nestable for list 2
        $('#nestable2').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // output initial serialised data
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable2').data('output', $('#nestable2-output')));

        $('#nestable-menu').on('click', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });

    });

})(window.jQuery);
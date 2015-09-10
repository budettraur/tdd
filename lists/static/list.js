var hide_error_on_keypress = function() {
    $("input[name='text']").on('keypress', function (e) {
        $('.has-error').hide();
    });
};

var hide_error_on_click = function() {
    $("input[name='text']").on('click', function (e) {
        $('.has-error').hide();
    });
};


jQuery(document).ready(function () {
    hide_error_on_keypress();
    hide_error_on_click();
});
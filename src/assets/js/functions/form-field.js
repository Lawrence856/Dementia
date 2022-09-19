function initFormField() {
    $('.form-field input').on('focus', function() {
        $(this)
            .closest('.form-field')
            .addClass('focused');
    });
    $('.form-field input').on('blur', function() {
        $(this)
            .closest('.form-field')
            .removeClass('focused');
    });
    $('.form-field input').on('input', function() {
        if ($(this).val()) {
            $(this)
                .closest('.form-field')
                .addClass('is-not-empty');
        } else {
            $(this)
                .closest('.form-field')
                .removeClass('is-not-empty');
        }
    });
}

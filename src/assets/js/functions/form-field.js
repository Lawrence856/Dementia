function initFormField() {
    $('.form-field input').on('focus', function() {
        $(this)
            .closest('.form-field')
            .addClass('focused');
        if ($(this).attr('type') === 'tel') {
            $(this)
                .closest('.form-field')
                .addClass('is-not-empty');
        }
    });
    $('.form-field input').on('blur', function() {
        $(this)
            .closest('.form-field')
            .removeClass('focused');
        if (
            $(this).attr('type') === 'tel' &&
            $(this).val() === '+7 (___) ___-____'
        ) {
            $(this)
                .closest('.form-field')
                .removeClass('is-not-empty');
        }
    });
    $('.form-field input').on('input', checkValue);

    function checkValue() {
        if ($(this).val()) {
            $(this)
                .closest('.form-field')
                .addClass('is-not-empty');
        } else {
            $(this)
                .closest('.form-field')
                .removeClass('is-not-empty');
        }
    }
}

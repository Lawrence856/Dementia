function initFormValidation() {
    jQuery.extend(jQuery.validator.messages, {
        required: 'Заполните поле',
        email: 'Введен неправильный email адрес',
    });

    $('.default-form-validator').each(function() {
        $(this).validate();
    });
}

function initDropdown() {
    $('[data-toggle="dropdown"]').on('click', function(e) {
        const $self = $(this);
        $self.closest('.dropdown').toggleClass('show');
        $(window).on('click', function(evt) {
            if (
                !$(evt.target).closest('.dropdown').length ||
                $(evt.target).closest('.dropdown__list-link').length
            ) {
                $self.closest('.dropdown').removeClass('show');
                $(this).off('click');
            }
        });
    });
}

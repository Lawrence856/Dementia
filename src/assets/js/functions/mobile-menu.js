function initMobileMenu() {
    const $toggle = $('.mobile-menu-toggle');
    let $target = null;

    $toggle.on('click', function() {
        $target = $($(this).data('target'));

        if ($target.length) {
            onShowMenu();
            setTimeout(function() {
                $(window).on('click', function(evt) {
                    if (
                        !$(evt.target).closest(
                            $target.find('.mobile-menu__content'),
                        ).length
                    ) {
                        onCloseMenu();
                        $(this).off('click');
                    }
                });
                $(window).on('keyup', function(evt) {
                    if (evt.keyCode === 27) {
                        onCloseMenu();
                        $(this).off('keyup');
                    }
                });
            }, 0);
        }
    });

    function onShowMenu() {
        $('body').css({ overflow: 'hidden' });
        $target.addClass('show');
    }

    function onCloseMenu() {
        $('body').css({ overflow: '' });
        $target.removeClass('show');
    }
}

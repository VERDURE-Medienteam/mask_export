/**
 * Module: TYPO3/CMS/MaskExport/Toggler
 */
define(['jquery'], function($) {
    'use strict';

    $(function() {
        $('.panel .btn-toggle').on('click', function() {
            $(this).closest('.panel').find('.panel-collapse').each(function() {
                $(this).collapse('toggle');
            });
        });

        $('.t3js-modal-trigger').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            const TYPO3 = parent.TYPO3;

            TYPO3.Modal.confirm(e.target.dataset.title, e.target.dataset.content, TYPO3.Severity.warning, [
                {
                    text: 'Abort!',
                    active: true,
                    trigger: function () {
                        TYPO3.Modal.dismiss();
                    }
                }, {
                    text: 'Overwrite',
                    active: true,
                    btnClass: 'btn-primary',
                    trigger: function (event, modal) {
                        $('#hidden-submitted').val('install');
                        $('form').submit();
                        modal.hideModal();
                    }
                }
            ]);
        });
    });
});

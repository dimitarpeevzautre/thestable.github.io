initAnimations();
initBookingForm();

function initBookingForm() {
    // init datepicker events
    $(function () {

        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));

            initSecondBookingStep(picker.startDate, picker.endDate)
            hideThirdBookingStep();
        });

        $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
            hideSecondBookingStep();
            hideThirdBookingStep();
        });

    });
}

async function initSecondBookingStep(startDate, endDate) {
    $('html, body').animate({
        scrollTop: $("#booking-step-2").offset().top - 150
    }, 200);

    if (!$('.booking-step-2').hasClass('active')) {
        $('.booking-step-2').addClass('active');
    }

    let availability = await getVanAvailability(startDate, endDate);

    showAvailableVans(availability);

    $('.van').on('click', (e) => {
        let $target = $(e.target);
        let vanName = $target.attr('data-name');

        if (!vanName) {
            $target.parents('.van').attr('data-name')
        }

        let dateRange = $('#booking-step-1 .datepicker').val();

        initThirdBookingStep(vanName, dateRange)
    })
}

function hideSecondBookingStep() {
    $('.booking-step-2').removeClass('active');
}

function getVanAvailability() {
    return [
        { santimento: true },
        { erectino: true },
        { ivan: false }
    ]
}

function showAvailableVans(availability) {
    availability.forEach((van) => {
        if (Object.values(van)[0]) {
            $('.van[data-name="' + Object.keys(van)[0] + '"]').css('display', 'block')
        }
    })
}

function initThirdBookingStep(vanName, dateRange) {
    $('#van-input').val(vanName);
    $('#date-input').val(dateRange);

    $('html, body').animate({
        scrollTop: $("#booking-step-3").offset().top - 150
    }, 200);

    if (!$('.booking-step-3').hasClass('active')) {
        $('.booking-step-3').addClass('active');
    }

    $('#booking-step-3 .booking-form').on('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        $('.booking-container').css('max-height', '0');
        $('.booking-confirmation').addClass('active');
    })
}

function hideThirdBookingStep() {
    $('.booking-step-3').removeClass('active');
}

// clientID: 32269105429-9lc8egbuervued8vqstk4f0j7a1eugcp.apps.googleusercontent.com
initAnimations();
initBookingForm();

const googleApiKey = 'AIzaSyDEyI-WDW_xvepethIYS3XA11r73NgaVRc';

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

// todo write actual calIDs
let vans = {
    roscinante: 'c_87a464ad7365e9c770b8325b7d8fc7604ecaaa59e9a5e55b4a59fa2f99aedcbe@group.calendar.google.com',
    alfonso: 'c_ac2c84e6fb497a217cd923b1431ce89a099db8a6522e45731e08edeccee7e3ab@group.calendar.google.com',
    bucephalus: 'c_1637599e2a7e1a46106c3fe3bb1065ffe0fbe98d1f30d69452983ab790ac6eda@group.calendar.google.com'
}

/**
 * Gets calender events between dates for given calender/van
 */
function getCalenderEvents(calendarID, startDate, endDate) {
    let parameters = "timeMin=" + encodeURIComponent(startDate.format()) + "&timeMax=" + encodeURIComponent(endDate.format())

    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://www.googleapis.com/calendar/v3/calendars/" + calendarID + "/events?" + parameters + "&key=" + googleApiKey,
            success: function (data) {
                resolve(data)
            },
            error: (data) => {
                reject(data)
            }
        });
    })
}

function showAvailableVans(startDate, endDate) {
    Object.keys(vans).forEach((van) => {
        getCalenderEvents(vans[van], startDate, endDate)
            .then((data) => {
                if (data.items.length === 0) {
                    $('.van[data-name="' + data.summary.toLowerCase() + '"]').css('display', 'block')
                }
                console.log('Promise succ response: ')
                console.log(data)
            })
            .catch((data) => {
                console.log('Promise error for: ')
                console.log(data)
            });
    })
}

async function initSecondBookingStep(startDate, endDate) {
    $('html, body').animate({
        scrollTop: $("#booking-step-2").offset().top - 150
    }, 200);

    if (!$('.booking-step-2').hasClass('active')) {
        $('.booking-step-2').addClass('active');
    }

    showAvailableVans(startDate, endDate);

    $('.van').on('click', (e) => {
        let $target = $(e.target);
        let vanName = $target.data('name');

        if (!vanName) {
            vanName = $target.parents('.van').data('name');
        }

        let dateRange = $('#booking-step-1 .datepicker').val();

        initThirdBookingStep(vanName, dateRange)
    })
}

function hideSecondBookingStep() {
    $('.booking-step-2').removeClass('active');
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

    $('#email-radio, #phone-radio').on('change', (e) => {
        if($(e.target).attr('id').indexOf('email') != -1) {
            $('#email').addClass('active')     
            $('#phone').removeClass('active')     
        } else {
            $('#email').removeClass('active')     
            $('#phone').addClass('active')     
        }
    })

    $('#booking-step-3 .booking-form').on('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        $('.booking-container').removeClass('active');
        $('.booking-confirmation').addClass('active');

        let request = {
            email: $('#email').val(),
            phone: $('#phone').val(),
            van: vanName,
            dateRange: dateRange
        }

        $.ajax({
            url: 'https://eoup9yw6a36n9ny.m.pipedream.net',
            method: 'POST',
            data: request,
            success: (data) => {
                console.log('success')

            },
            error: (data) => {
                console.log('error')

            }
        })
    })
}

function hideThirdBookingStep() {
    $('.booking-step-3').removeClass('active');
}

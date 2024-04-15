initAnimations();
initBookingForm();
navEvents();

const bookingDomain = 'https://booking.thestable.bg/'
const googleApiKey = 'AIzaSyDEyI-WDW_xvepethIYS3XA11r73NgaVRc';

function initBookingForm() {
    // init datepicker events
    $(function () {

        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            minDate: new Date(),
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
            
            gtag('event', 'date_range_selected', {
              'event_category': 'booking',
              'event_label': picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY')
            });
        });

        $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });

    });

    $('.check-availability').on('click',function(e) {
        e.preventDefault();
        e.stopPropagation;
        
        let $calendarData = $('input[name="datefilter"]').data('daterangepicker');
        let startDate = $calendarData.startDate.toISOString();
        let endDate = $calendarData.endDate.toISOString();
        if ($('.datepicker').val() && startDate && endDate) {
            window.location.href = `${bookingDomain}?startDate=${startDate}&endDate=${endDate}`;
            addLoading($('.book-now'));
        }
    })
}

let vans = {
    rocinante: 'c_o5i24ulbm1psuek3guprv42q8g@group.calendar.google.com',
    alfonso: 'c_7cf7cf9df16b5d8032e4e88060fce5b2da8c8bdf0821c66a5f61c74e2a62ae93@group.calendar.google.com',
    bucephalus: 'c_71f7b3fba73e19c3ff433a5d987e59075679e0fc66ce26c5d7c1cf385baad74c@group.calendar.google.com'
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
                } else {
                    $('.van[data-name="' + data.summary.toLowerCase() + '"]').css('display', 'none')
                }
                console.log(data)
            })
            .catch((data) => {
                console.log(data)
            });
    })
}

function navEvents() {
    $('.nav-btn').on('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        $('.nav-links-wrapper').addClass('active');
        $('html').css({ 'overflow': 'hidden' });
    })

    $('.nav-back-btn').on('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        $('.nav-links-wrapper').removeClass('active');
        $('html').css({ 'overflow': 'initial' });
    })

    $('.nav-anchor, .book-now-btn').on('click', (e) => {
        $('.nav-links-wrapper').removeClass('active');
        $('html').css({ 'overflow': 'initial' });
    })
}


function addLoading(el) {
    const html = `
    <div class='loading'>
        <div class='spinner-wrapper'>
        <svg class='spinner' width='65px' height='65px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
        <circle class='path' fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30'></circle>
        </svg>
        </div>
    </div>
    `;

    $(el).append(html);
}

function removeLoading(el) {
    $(el).find('.loading').remove();
}
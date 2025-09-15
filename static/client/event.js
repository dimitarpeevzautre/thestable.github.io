$(function() {
    // RSVP Form Handler
    $('#rsvp-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: $('#rsvp-name').val(),
            email: $('#rsvp-email').val(),
            phone: $('#rsvp-phone').val(),
            guests: $('#rsvp-guests').val(),
            message: $('#rsvp-message').val(),
            newsletter: $('#rsvp-newsletter').is(':checked'),
            event: 'Crowdfunding Event - September 19th',
            timestamp: new Date().toISOString()
        };
        
        // Basic validation
        if (!formData.name.trim() || !formData.email.trim()) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitBtn = $('.rsvp-submit-btn');
        const originalText = submitBtn.text();
        submitBtn.prop('disabled', true).text('Submitting...');
        
        // Submit RSVP data to Google Apps Script
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbz0IQYuuqyrZ872mK7f6JXU4pfqjk243ICCk0gvqgoKRxIhdbituhPssMkDqwwqOm-26A/exec';
        
        // Prepare data for Google Apps Script (matching expected parameters)
        const submitData = {
            p: 'subscribeEvent',
            email: formData.email,
            name: formData.name,
            phone: formData.phone || '',
            message: formData.message || ''
        };
        
        // Submit to Google Apps Script using fetch API with jQuery fallback
        const submitToScript = () => {
            if (typeof fetch !== 'undefined') {
                // Use modern fetch API
                return fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors', // Google Apps Script may require this
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams(submitData)
                });
            } else if (typeof $ !== 'undefined') {
                // Fallback to jQuery AJAX
                return $.ajax({
                    url: scriptUrl,
                    method: 'POST',
                    data: submitData,
                    dataType: 'json'
                });
            } else {
                // Manual form submission fallback
                return Promise.reject(new Error('No suitable HTTP client available'));
            }
        };
        
        submitToScript()
        .then(function(response) {
            // Log RSVP data for debugging
            console.log('RSVP Data submitted:', formData);
            console.log('Google Apps Script response:', response);
            
            // Track event with Google Analytics
            if (typeof gtag === 'function') {
                gtag('event', 'rsvp_submitted', {
                    'event_category': 'engagement',
                    'event_label': 'crowdfunding_event',
                    'value': parseInt(formData.guests)
                });
            }
            
            // Track with Facebook Pixel
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    content_name: 'Event RSVP',
                    content_category: 'Event'
                });
            }
            
            // Show success message
            if (typeof $ !== 'undefined') {
                $('#rsvp-form').fadeOut(300, function() {
                    $('#rsvp-success').fadeIn(300);
                });
            } else {
                // Fallback without jQuery
                document.getElementById('rsvp-form').style.display = 'none';
                document.getElementById('rsvp-success').style.display = 'block';
            }
            
            // Store RSVP in local storage for reference
            const rsvpList = JSON.parse(localStorage.getItem('event-rsvps') || '[]');
            rsvpList.push(formData);
            localStorage.setItem('event-rsvps', JSON.stringify(rsvpList));
        })
        .catch(function(error) {
            console.error('Error submitting RSVP:', error);
            console.log('RSVP Data (failed submission):', formData);
            
            // Show error message to user
            alert('There was an error submitting your RSVP. Please try again or contact us directly.');
        })
        .finally(function() {
            // Re-enable the submit button
            if (typeof $ !== 'undefined') {
                submitBtn.prop('disabled', false).text(originalText);
            } else {
                const btn = document.querySelector('.rsvp-submit-btn');
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = originalText;
                }
            }
        });
    });
    
    // Smooth scrolling for RSVP button
    $('.event-rsvp-btn').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Form enhancements
    initFormEnhancements();
});

/**
 * Initialize form UI enhancements
 */
function initFormEnhancements() {
    // Auto-format phone number
    $('#rsvp-phone').on('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.startsWith('359')) {
                // Bulgarian number format
                value = value.replace(/(\d{3})(\d{1,3})?(\d{1,3})?(\d{1,3})?/, '+$1 $2 $3 $4').trim();
            } else if (value.length <= 10) {
                // Generic format
                value = value.replace(/(\d{3})(\d{1,3})?(\d{1,4})?/, '$1-$2-$3').replace(/-$/, '');
            }
        }
        this.value = value;
    });
    
    // Dynamic guest count display
    $('#rsvp-guests').on('change', function() {
        const guestCount = parseInt(this.value);
        const guestText = guestCount === 1 ? 'guest' : 'guests';
        console.log(`Selected ${guestCount} ${guestText}`);
    });
    
    // Form field focus effects
    $('.form-group input, .form-group textarea, .form-group select').on('focus', function() {
        $(this).closest('.form-group').addClass('focused');
    }).on('blur', function() {
        $(this).closest('.form-group').removeClass('focused');
    });
    
    // Character counter for message field
    $('#rsvp-message').on('input', function() {
        const maxLength = 500;
        const currentLength = this.value.length;
        
        let counter = $(this).siblings('.char-counter');
        if (counter.length === 0) {
            counter = $('<div class="char-counter"></div>');
            $(this).after(counter);
        }
        
        counter.text(`${currentLength}/${maxLength}`);
        
        if (currentLength > maxLength) {
            counter.addClass('over-limit');
            this.value = this.value.substring(0, maxLength);
        } else {
            counter.removeClass('over-limit');
        }
    });
}

/**
 * Get RSVP statistics (for debugging/admin purposes)
 */
function getRSVPStats() {
    const rsvpList = JSON.parse(localStorage.getItem('event-rsvps') || '[]');
    const totalAttendees = rsvpList.reduce((sum, rsvp) => sum + parseInt(rsvp.guests), 0);
    
    return {
        totalRSVPs: rsvpList.length,
        totalAttendees: totalAttendees,
        newsletterSignups: rsvpList.filter(rsvp => rsvp.newsletter).length,
        rsvps: rsvpList
    };
}

// Export for debugging
window.getRSVPStats = getRSVPStats;
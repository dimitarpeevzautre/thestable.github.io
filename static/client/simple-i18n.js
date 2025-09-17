// Simple language switcher for event page - no external dependencies
(function() {
    'use strict';
    
    // Translation data extracted from i18n.js
    const translations = {
        en: {
            'event.title': 'Crowdfunding Event',
            'event.subtitle': 'Join us for an evening of community and adventure',
            'event.date.label': 'Date:',
            'event.date.value': 'September 19th, 2025',
            'event.location.label': 'Location:',
            'event.location.value': 'Barter Community Hub',
            'event.time.label': 'Time:',
            'event.time.value': '7:00 PM - 10:00 PM',
            'event.about.title': 'About the Event',
            'event.about.description': "Join The Stable Vans community for an exciting crowdfunding event! We're expanding our fleet of premium camper vans and want you to be part of this journey. This evening will feature presentations about our expansion plans, networking with fellow adventure enthusiasts, and exclusive early-bird offers for our supporters.",
            'event.highlights.title': 'Event Highlights',
            'event.highlights.presentation': 'Presentation of our expansion plans',
            'event.highlights.networking': 'Networking with adventure community',
            'event.highlights.offers': 'Exclusive early-bird rental offers',
            'event.highlights.refreshments': 'Light refreshments and drinks',
            'event.highlights.qna': 'Q&A session with The Stable team',
            'event.location.title': 'Event Location',
            'event.location.venue.name': 'Barter Community Hub',
            'event.location.venue.address': '123 Community Street\nSofia, Bulgaria',
            'event.location.venue.description': 'A vibrant community space in the heart of Sofia, perfect for bringing together adventure enthusiasts and supporters of local business initiatives.',
            'event.location.transport.title': 'Getting There',
            'event.location.transport.metro': 'Metro: Serdika Station (5 min walk)',
            'event.location.transport.bus': 'Bus: Lines 9, 84, 280',
            'event.location.transport.parking': 'Limited street parking available',
            'contacts.title': 'Contact Us',
            'contacts.phone.label': 'Phone:',
            'contacts.phone.body': ' +359888820589',
            'contacts.email.label': 'Email:',
            'contacts.email.body': ' dimitar@thestable.bg',
            'contacts.social.label': 'Follow us on social media:'
        },
        bg: {
            'event.title': 'Събитие за Кръдфъндинг',
            'event.subtitle': 'Присъединете се към нас за вечер на общност и приключения',
            'event.date.label': 'Дата:',
            'event.date.value': '19 септември 2025',
            'event.location.label': 'Място:',
            'event.location.value': 'Barter Community Hub',
            'event.time.label': 'Час:',
            'event.time.value': '19:00 - 22:00',
            'event.about.title': 'За събитието',
            'event.about.description': 'Присъединете се към общността на The Stable Vans за вълнуващо събитие за кръдфъндинг! Разширяваме нашия флот от първокласни кемпери и искаме да бъдете част от това пътуване. Тази вечер ще включва презентации за нашите планове за разширяване, мрежиране с другари ентусиасти на приключения и ексклузивни оферти за ранното резервиране за нашите поддръжници.',
            'event.highlights.title': 'Акценти на събитието',
            'event.highlights.presentation': 'Презентация на плановете ни за разширяване',
            'event.highlights.networking': 'Мрежиране с общността на приключенци',
            'event.highlights.offers': 'Ексклузивни оферти за ранно резервиране',
            'event.highlights.refreshments': 'Лека закуска и напитки',
            'event.highlights.qna': 'Сесия с въпроси и отговори с екипа на The Stable',
            'event.location.title': 'Място на събитието',
            'event.location.venue.name': 'Barter Community Hub',
            'event.location.venue.address': '123 Community Street\nСофия, България',
            'event.location.venue.description': 'Оживено място за общността в сърцето на София, идеално за събиране на ентусиасти на приключения и поддръжници на местни бизнес инициативи.',
            'event.location.transport.title': 'Как да стигнете',
            'event.location.transport.metro': 'Метро: Станция Сердика (5 мин пешеходно)',
            'event.location.transport.bus': 'Автобус: Линии 9, 84, 280',
            'event.location.transport.parking': 'Ограничено уличното паркиране',
            'contacts.title': 'Свържете се с нас',
            'contacts.phone.label': 'Телефон:',
            'contacts.phone.body': ' +359888820589',
            'contacts.email.label': 'Имейл:',
            'contacts.email.body': ' dimitar@thestable.bg',
            'contacts.social.label': 'Последвайте ни в социалните медии:'
        }
    };

    let currentLanguage = 'en';

    // Initialize language (no interactive switcher)
    function initLanguage() {
        // Get saved language preference or default to 'en'
        const savedLanguage = localStorage.getItem('preferred-language') || 'en';
        currentLanguage = savedLanguage;
        
        // Apply the saved language
        applyTranslations(currentLanguage);
    }



    // Apply translations to the page
    function applyTranslations(lang) {
        const langData = translations[lang];
        if (!langData) return;

        // Find all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            const translation = langData[key];
            if (translation) {
                // Handle line breaks in address
                if (key.includes('address')) {
                    element.innerHTML = translation.replace(/\n/g, '<br>');
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguage);
    } else {
        initLanguage();
    }
})();
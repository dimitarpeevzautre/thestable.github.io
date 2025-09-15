$(function() {
	// Get saved language preference or detect from browser
	const savedLanguage = localStorage.getItem('preferred-language');
	
	// use plugins and options as needed, for options, detail see
	// https://www.i18next.com
	i18next
		// detect user language
		// learn more: https://github.com/i18next/i18next-browser-languageDetector
		.use(i18nextBrowserLanguageDetector)
		// init i18next
		// for all options read: https://www.i18next.com/overview/configuration-options
		.init({
			debug: false,
			lng: savedLanguage || undefined, // Use saved language if available
			fallbackLng: 'en',
			resources: {
				en: {
					translation: {
						nav: {
							home: 'Home',
							booknow: 'Book Now',
							about: 'About Us',
							pricing: 'Pricing',
							contact: 'Contact Us',
							event: 'Event'
						},
						landing: {
							title: 'the Stable',
							subtitle: 'Campervans for rent',
							booknow: 'Book now'
						},
						about: {
							title: 'About our campers',
							body: "Our campers are fully equipped for your adventure. They are easy to drive, fast and capable brand new 4x4 machines. You can comfortably drive and sleep 4 people in the campervans. The VW California line has been iconic for almost 60 years, and that's why we think it is the best choice to enjoy our beautiful Bulgarian lakes, mountains and beaches.",
							miles: {
								title: 'Unlimited Miles',
								body: "Miles and smiles sounds nice. So our campers are not limited in range or countries you can visit. Think about the adventure ahead and we will take care that you are well prepared to enjoy it to the maximum. If requested we can suggest good campings along your route or scenic places you should visit and camp."
							},
							cutlery: {
								title: 'Provided Cutlery',
								body: {
									'1': 'We have selected the finest cutlery from Victorinox and Stanley.',
									'2': "Stanley full kitchen base: 18/8 Stainless Steel pot (3.5 L), Vented lid, 3-ply frying pan, Cutting board, Spatula with extending handle, Serving spoon with extending handle, 4 Plates (15.2 cm diameter), 4 Bowls (.65 L), 4 Sporks, Dish drying rack, Trivet, Locking bunge",
									'3': "Victorinox set: 4 forks, 4 spoons, 1 kitchen knife, peeler, 1 swiss army knife, cutting board",
								}
							},
							bedding: {
								title: 'Provided Bedding',
								body: "We have equipped our campers with high quality bedding for 4 which includes: 2 double down sheets, 2 double cover sheets, 4 pillows. The campers are also equipped with an inside table for dining indoors, water, gas stove and a big fridge. There are 2 folding chairs and an additional folding table for outside, neatly hidden in the vehicles' doors."
							}
						},
						pricing: {
							title: 'Simple Pricing',
							body1: 'No price adjustables. No more advertising one price than doubling it with adjustables.',
							body2: {
								'1': 'We take an initial ',
								'2': 'for delivery and setup and ',
								'3': 'per day. We drive the camper to you sparkling clean and ready for a journey. Just think about the adventure.',
							},
							pickup: {
								label: 'Pick up',
								price: '70 EUR'
							},
							perday: {
								label: 'Per day from',
								price: '115 EUR'
							}
						},
						booking: {
							title: 'Book a Van',
							daterange: {
								label: 'Complete the simple 3 step booking process so you can take one of our campervans out on an adventure',
								placeholder: 'Choose a date and see what vans we have available'
							},
							redirect: {
								btn: 'Check availability'
							}
						},
						contacts: {
							title: 'Contact Us',
							phone: {
								label: 'Phone:',
								body: ' +359888820589'
							},
							email: {
								label: 'Email:',
								body: ' dimitar@thestable.bg'
							},
							social: {
								label: 'Follow us on social media:'
							}
						},
						van: {
							rocinante: {
								name: 'Rocinante',
								description: "Our 4x4 adventure machine named after Don Quixote's stallion is convenient for up to 4 people. He has been to Spain!"
							},
							alfonso: {
								name: 'Alfonso',
								description: "Alfonso is model 2022 4x4 VW California, his nickname is Lilla Guben. And like Pippi Longstocking he can deliver an unending mischevous adventures."
							},
							bucephalus: {
								name: 'Bucephalus',
								description: "Are you the party organiser? Bucephalus is a VW Multivan. Seats up to 7 people, and likes to go to skiing trips in the Alps."
							}
						},
						event: {
							title: 'Crowdfunding Event',
							subtitle: 'Join us for an evening of community and adventure',
							date: {
								label: 'Date:',
								value: 'September 19th, 2025'
							},
							location: {
								label: 'Location:',
								value: 'Barter Community Hub',
								title: 'Event Location',
								venue: {
									name: 'Barter Community Hub',
									address: '123 Community Street\nSofia, Bulgaria',
									description: 'A vibrant community space in the heart of Sofia, perfect for bringing together adventure enthusiasts and supporters of local business initiatives.'
								},
								transport: {
									title: 'Getting There',
									metro: 'Metro: Serdika Station (5 min walk)',
									bus: 'Bus: Lines 9, 84, 280',
									parking: 'Limited street parking available'
								},
								map: {
									placeholder: 'Interactive map coming soon'
								}
							},
							time: {
								label: 'Time:',
								value: '7:00 PM - 10:00 PM'
							},
							about: {
								title: 'About the Event',
								description: "Join The Stable Vans community for an exciting crowdfunding event! We're expanding our fleet of premium camper vans and want you to be part of this journey. This evening will feature presentations about our expansion plans, networking with fellow adventure enthusiasts, and exclusive early-bird offers for our supporters."
							},
							highlights: {
								title: 'Event Highlights',
								presentation: 'Presentation of our expansion plans',
								networking: 'Networking with adventure community',
								offers: 'Exclusive early-bird rental offers',
								refreshments: 'Light refreshments and drinks',
								qna: 'Q&A session with The Stable team'
							},
							rsvp: {
								button: 'RSVP Now',
								title: 'RSVP for the Event',
								subtitle: 'Secure your spot at our crowdfunding event. Space is limited!',
								form: {
									name: {
										label: 'Full Name *',
										placeholder: 'Enter your full name'
									},
									email: {
										label: 'Email Address *',
										placeholder: 'Enter your email address'
									},
									phone: {
										label: 'Phone Number',
										placeholder: 'Enter your phone number'
									},
									guests: {
										label: 'Number of Guests',
										just_me: 'Just me',
										plus_one: 'Me + 1 guest',
										plus_two: 'Me + 2 guests',
										plus_three: 'Me + 3 guests'
									},
									message: {
										label: 'Message (Optional)',
										placeholder: 'Any special requirements or questions?'
									},
									newsletter: 'Subscribe to our newsletter for adventure updates',
									submit: 'Confirm RSVP'
								},
								success: {
									title: 'Thank You!',
									message: "Your RSVP has been confirmed. We'll send you a confirmation email with all the event details."
								}
							}
						}
					}
				},
				bg: {
					translation: {
						nav: {
							home: 'Начало',
							booknow: 'Резервирай сега',
							about: 'За нас',
							pricing: 'Цени',
							contact: 'Контакт',
							event: 'Събитие'
						},
						landing: {
							subtitle: 'Кемпери под наем',
							booknow: 'Резервирай сега'
						},
						about: {
							title: 'За нашите кемпери',
							body: "Нашите кемпери са напълно оборудвани за вашето приключение. Те са лесни за шофиране и бързи чисто нови 4x4 машини. Удобно се возят и спят до 4 човека в кемперите. Линията VW California е култова почти 60 години и затова мислим, че това е най-добрият избор за наслаждаване на нашите прекрасни български езера, планини и плажове.",
							miles: {
								title: 'Неограничени километри',
								body: "Километри и усмивки звучат добре. Затова нашите кемпери не са ограничени по обхват или държави, които можете да посетите. Мислете за предстоящото приключение и ние ще се погрижим да сте добре подготвени да го изживеете максимално. Ако пожелаете, можем да ви предложим добри къмпинги по маршрута ви или живописни места, които трябва да посетите и да разположите лагер."
							},
							cutlery: {
								title: 'Предоставени прибори',
								body: {
									'1': 'Избрахме най-добрите прибори от Victorinox и Stanley.',
									'2': "Пълна кухненски комплект на Stanley: неръждаема стомана 18/8 (3,5 L), с отвори за проветряване, тиган с 3 слоя, дъска за рязане, шпатула, сервираща лъжица, 4 чинии (диаметър 15,2 см), 4 купи (0,65 л.), 4 спорка, стойка за съхранение на съдове, подложка за горещи съдове",
									'3': "Комплект Victorinox: 4 вилици, 4 лъжици, 1 кухненски нож, обелачка, 1 швейцарски армейски нож, дъска за рязане",
								}
							},
							bedding: {
								title: 'Предоставено спално бельо',
								body: "Оборудвахме нашите кемпери с висококачествено спално бельо за 4 човека, което включва: 2 двойни спални чаршафи, 2 двойни покривки, 4 възглавници. Кемперите са също оборудвани с вътрешна маса за хранене на закрито, вода, газова печка и голям хладилник. В превозните средства има 2 сгъваеми стола и допълнителна сгъваема маса за открито, които са скрити във вратите на автомобила."
							}
						},
						pricing: {
							title: 'Прости цени',
							body1: 'Няма променливи цени. Без повече рекламиране на една цена, която след това се удвоява с допълнителни такси.',
							body2: {
								'1': 'Взимаме начална ',
								'2': 'такса за доставка и подготовка от ',
								'3': 'на ден. Доставяме кемпера до вас блестящо чист и готов за пътуване. Мислете само за приключението.',
							},
							pickup: {
								label: 'Получаване'
							},
							perday: {
								label: 'На ден'
							}
						},
						booking: {
							title: 'Резервирайте кемпер',
							daterange: {
								label: 'Изпълнете простата процедура за резервация от 3 стъпки, за да вземете един от нашите кемпери на приключение',
								placeholder: 'Изберете дата и вижте кои кемпери са налични'
							},
							redirect: {
								btn: 'Провери наличност'
							},
							contacts: {
								title: 'Свържете се с нас',
								phone: {
									label: 'Телефон:',
									body: ' +359888820589'
								},
								email: {
									label: 'Имейл:',
									body: ' dimitar@thestable.bg'
								},
								social: {
									label: 'Последвайте ни в социалните медии:'
								}
							},
							van: {
								rocinante: {
									name: 'Росинант',
									description: "Нашият 4x4 автомобил за приключения наречен на коня на Дон Кихот е удобен за до 4 човека. Той е бил в Испания!"
								},
								alfonso: {
									name: 'Алфонсо',
									description: "Алфонсо е модел 2022 4x4 VW California, прякорът му е Лила Губен. И подобно на Пипи Дългото чорапче, той може да предложи безкрайни приключения."
								}
							},
							event: {
								title: 'Събитие за Кръдфъндинг',
								subtitle: 'Присъединете се към нас за вечер на общност и приключения',
								date: {
									label: 'Дата:',
									value: '19 септември 2025'
								},
								location: {
									label: 'Място:',
									value: 'Barter Community Hub',
									title: 'Място на събитието',
									venue: {
										name: 'Barter Community Hub',
										address: '123 Community Street\nСофия, България',
										description: 'Оживено място за общността в сърцето на София, идеално за събиране на ентусиасти на приключения и поддръжници на местни бизнес инициативи.'
									},
									transport: {
										title: 'Как да стигнете',
										metro: 'Метро: Станция Сердика (5 мин пешеходно)',
										bus: 'Автобус: Линии 9, 84, 280',
										parking: 'Ограничено уличното паркиране'
									},
									map: {
										placeholder: 'Интерактивна карта скоро'
									}
								},
								time: {
									label: 'Час:',
									value: '19:00 - 22:00'
								},
								about: {
									title: 'За събитието',
									description: 'Присъединете се към общността на The Stable Vans за вълнуващо събитие за кръдфъндинг! Разширяваме нашия флот от първокласни кемпери и искаме да бъдете част от това пътуване. Тази вечер ще включва презентации за нашите планове за разширяване, мрежиране с другари ентусиасти на приключения и ексклузивни оферти за ранното резервиране за нашите поддръжници.'
								},
								highlights: {
									title: 'Акценти на събитието',
									presentation: 'Презентация на плановете ни за разширяване',
									networking: 'Мрежиране с общността на приключенци',
									offers: 'Ексклузивни оферти за ранно резервиране',
									refreshments: 'Лека закуска и напитки',
									qna: 'Сесия с въпроси и отговори с екипа на The Stable'
								},
								rsvp: {
									button: 'Потвърди участие',
									title: 'Потвърди участие в събитието',
									subtitle: 'Осигурете си място на нашето събитие за кръдфъндинг. Местата са ограничени!',
									form: {
										name: {
											label: 'Пълно име *',
											placeholder: 'Въведете пълното си име'
										},
										email: {
											label: 'Имейл адрес *',
											placeholder: 'Въведете имейл адреса си'
										},
										phone: {
											label: 'Телефонен номер',
											placeholder: 'Въведете телефонния си номер'
										},
										guests: {
											label: 'Брой гости',
											just_me: 'Само аз',
											plus_one: 'Аз + 1 гост',
											plus_two: 'Аз + 2 гости',
											plus_three: 'Аз + 3 гости'
										},
										message: {
											label: 'Съобщение (по избор)',
											placeholder: 'Специални изисквания или въпроси?'
										},
										newsletter: 'Абонирайте се за нашия бюлетин за новини за приключения',
										submit: 'Потвърди участие'
									},
									success: {
										title: 'Благодарим!',
										message: 'Вашето участие е потвърдено. Ще ви изпратим имейл за потвърждение с всички подробности за събитието.'
									}
								}
							}
						}
					}
				}
			}
		}, (err, t) => {
			if (err) return console.error(err);

			// for options see
			// https://github.com/i18next/jquery-i18next#initialize-the-plugin
			jqueryI18next.init(i18next, $, {
				useOptionsAttr: true
			});

			// start localizing, details:
			// https://github.com/i18next/jquery-i18next#usage-of-selector-function
			$('body').localize();
			
			// Initialize language selector after i18next is loaded
			initLanguageSelector();
		});
});

// Language selector implementation
function initLanguageSelector() {
    // Get current language or default to 'en'
    const currentLang = i18next.language || 'en';
    
    // Set the active state based on stored language
    $('.language-selector .lang-btn').removeClass('active');
    $(`.language-selector .lang-btn[data-lang="${currentLang}"]`).addClass('active');
    
    // Handle language button clicks
    $('.language-selector .lang-btn').on('click', function() {
        const lang = $(this).data('lang');
        
        // Store the selected language
        localStorage.setItem('preferred-language', lang);
        
        // Update UI
        $('.language-selector .lang-btn').removeClass('active');
        $(this).addClass('active');
        
        // Change language and update all translations
        i18next.changeLanguage(lang, () => {
            $('body').localize();
        });
        
        // Track language change
        if (typeof gtag === 'function') {
            gtag('event', 'language_change', {
                'event_category': 'localization',
                'event_label': lang
            });
        }
    });
}
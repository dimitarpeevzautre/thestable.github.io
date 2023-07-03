$(function() {
	// use plugins and options as needed, for options, detail see
	// https://www.i18next.com
	i18next
		// detect user language
		// learn more: https://github.com/i18next/i18next-browser-languageDetector
		.use(i18nextBrowserLanguageDetector)
		// init i18next
		// for all options read: https://www.i18next.com/overview/configuration-options
		.init({
			debug: true,
			fallbackLng: 'en',
			resources: {
				en: {
					translation: {
						nav: {
							booknow: 'Book Now',
							about: 'About Us',
							pricing: 'Pricing',
							contact: 'Contact Us'
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
								price: '80 EUR'
							},
							perday: {
								label: 'Per day',
								price: '140 EUR'
							}
						},
						booking: {
							title: 'Book a Van',
							daterange: {
								label: 'Complete the simple 3 step booking process so you can take one of our campervans out on an adventure',
								placeholder: 'Choose a date and see what vans we have available'
							},
							step: {
								'2': {
									instructions: 'Choose which one of our vans to book. Our vans have no functional difference, only visual.'
								},
								'3': {
									instructions: 'Fill in your information so we can contact you after completing the form and confirm your booking',
									form: 'Choose in which form do you want us to contact you.',
									phone: 'Phone',
									btn: 'book now'
								},
								'4': {
									title: 'Thanks for booking one of our vans, we will contact you shortly!'
								}
							},
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
						}
					}
				},
				bg: {
					translation: {
						nav: {
							booknow: 'Резервирай сега',
							about: 'За нас',
							pricing: 'Цени',
							contact: 'Контакт'
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
								'2': 'такса за доставка и подготовка и ',
								'3': 'на ден. Доставяме кемпера до вас блестящо чист и готов за пътуване. Мислете само за приключението.',
							},
							pickup: {
								label: 'Получаване',
								price: '80 EUR'
							},
							perday: {
								label: 'На ден',
								price: '140 EUR'
							}
						},
						booking: {
							title: 'Резервирайте кемпер',
							daterange: {
								label: 'Изпълнете простата процедура за резервация от 3 стъпки, за да вземете един от нашите кемпери на приключение',
								placeholder: 'Изберете дата и вижте кои кемпери са налични'
							},
							step: {
								'2': {
									instructions: 'Изберете кой от нашите кемпери да резервирате. Нашите кемпери нямат функционални разлики, само визуални.'
								},
								'3': {
									instructions: 'Попълнете вашата информация, така че да можем да се свържем с вас след завършване на формата и потвърждение на вашата резервация',
									form: 'Изберете в каква форма искате да се свържем с вас.',
									email: 'Имейл',
									phone: 'Телефон',
									btn: 'резервирай сега'
								},
								'4': {
									title: 'Благодарим ви, че резервирахте един от нашите кемпери, скоро ще се свържем с вас!'
								}
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
									име: 'Алфонсо',
									описание: "Алфонсо е модел 2022 4x4 VW California, прякорът му е Лила Губен. И подобно на Пипи Дългото чорапче, той може да предложи безкрайни приключения."
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
		});
});

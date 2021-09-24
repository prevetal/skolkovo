$(() => {
	const url = new URL(document.location.href)


	// Городские правила
	if ($('.city_rules .swiper-container').length) {
		new Swiper('.city_rules .swiper-container', {
			loop: false,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 58,
			slidesPerView: 1,
			navigation: {
				nextEl: '.city_rules-swiper-button-next',
				prevEl: '.city_rules-swiper-button-prev'
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.city_rules'),
						currentIndex,
						totalIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + swiper.slides.length
						: totalIndex = swiper.slides.length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.city_rules'),
						currentIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Факты
	if ($('.facts .swiper-container').length) {
		new Swiper('.facts .swiper-container', {
			initialSlide: url.searchParams.get('initialSlide') || 0,
			loop: false,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 58,
			slidesPerView: 1,
			navigation: {
				nextEl: '.facts-swiper-button-next',
				prevEl: '.facts-swiper-button-prev'
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.facts'),
						currentIndex,
						totalIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + swiper.slides.length
						: totalIndex = swiper.slides.length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.facts'),
						currentIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Сколково в цифрах
	if ($('.stats .swiper-container').length) {
		new Swiper('.stats .swiper-container', {
			initialSlide: url.searchParams.get('initialSlide') || 0,
			loop: false,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 58,
			slidesPerView: 1,
			autoHeight: true,
			navigation: {
				nextEl: '.stats-swiper-button-next',
				prevEl: '.stats-swiper-button-prev'
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.stats'),
						currentIndex,
						totalIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + swiper.slides.length
						: totalIndex = swiper.slides.length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.stats'),
						currentIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Гор. скролл
	if ($('.hor_scroll').length) {
		const horScroll = document.querySelector('.hor_scroll')
		let mouseDown = false,
			startX, scrollLeft

		let startDragging = e => {
			mouseDown = true
			startX = e.pageX - horScroll.offsetLeft
			scrollLeft = horScroll.scrollLeft
		}

		let stopDragging = e => {
			mouseDown = false
		}

		horScroll.addEventListener('mousemove', (e) => {
			e.preventDefault()

			if (!mouseDown) { return }

			const x = e.pageX - horScroll.offsetLeft
			const scroll = x - startX

			horScroll.scrollLeft = scrollLeft - scroll
		})

		horScroll.addEventListener('mousedown', startDragging, false)
		horScroll.addEventListener('mouseup', stopDragging, false)
		horScroll.addEventListener('mouseleave', stopDragging, false)
		horScroll.addEventListener('wheel', e => {
			const toLeft = e.deltaY < 0 && horScroll.scrollLeft > 0,
				toRight = e.deltaY > 0 && horScroll.scrollLeft < horScroll.scrollWidth - horScroll.clientWidth

			if (toLeft || toRight) {
				e.preventDefault()
				horScroll.scrollLeft += e.deltaY
			}
		})
	}


	// Галерея - Сетка
	$('.gallery .next_link .btn').click(e => {
		e.preventDefault()

		let horScroll = document.querySelector('.gallery .hor_scroll')

		horScroll.scrollBy({ left: $('.gallery .hor_scroll > *').width() + 7, top: 0, behavior: 'smooth' })
	})

	let masonryRowHeight = 149

	if ($(window).width() < 1440) { masonryRowHeight = 116 }

	$('.gallery .masonry').justifiedGallery({
		rowHeight: masonryRowHeight,
		maxRowHeight: masonryRowHeight,
		lastRow: 'nojustify',
		margins: 5
	}).on('jg.complete', function (e) { setTimeout(() => { galleryWidth() }, 100) })


	// Галерея - Слайдер
	if ($('.gallery_slider .big .swiper-container').length) {
		const galleryThumbs = new Swiper('.gallery_slider .thumbs .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 4,
			slidesPerView: 'auto',
			autoHeight: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})

		new Swiper('.gallery_slider .big .swiper-container', {
			initialSlide: url.searchParams.get('initialSlide') || 0,
			loop: false,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 58,
			slidesPerView: 1,
			navigation: {
				nextEl: '.gallery_slider-swiper-button-next',
				prevEl: '.gallery_slider-swiper-button-prev'
			},
			thumbs: {
				swiper: galleryThumbs
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.big'),
						currentIndex,
						totalIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + swiper.slides.length
						: totalIndex = swiper.slides.length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.big'),
						currentIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Городские правила
	if ($('.route_info .swiper-container').length) {
		new Swiper('.route_info .swiper-container', {
			loop: false,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 58,
			slidesPerView: 1,
			navigation: {
				nextEl: '.route_info-swiper-button-next',
				prevEl: '.route_info-swiper-button-prev'
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.route_info'),
						currentIndex,
						totalIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + swiper.slides.length
						: totalIndex = swiper.slides.length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.route_info'),
						currentIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Объект
	if ($('.object_info .swiper-container').length) {
		new Swiper('.object_info .swiper-container', {
			initialSlide: url.searchParams.get('initialSlide') || 0,
			loop: false,
			speed: 750,
			simulateTouch: false,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 58,
			slidesPerView: 1,
			autoHeight: true,
			navigation: {
				nextEl: '.object_info-swiper-button-next',
				prevEl: '.object_info-swiper-button-prev'
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.object_info'),
						currentIndex,
						totalIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + swiper.slides.length
						: totalIndex = swiper.slides.length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.object_info'),
						currentIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Моб. меню
	$('header .menu_btn').click(e => {
		e.preventDefault()

		$('header .mob_menu_btn').removeClass('active')
		$('body').removeClass('aside_open')
		$('aside').removeClass('show')

		$('header .menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('footer').toggleClass('dark')
		$('#menu').toggleClass('show')
	})

	$('#menu .col_left .title, #menu .col_right .title').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next().slideToggle(300)
	})


	// Боковая колонка
	var currentSection = 1

	$('aside .toggle_btn').click(e => {
		e.preventDefault()

		$('aside .toggle_btn').toggleClass('active')
		$('aside').toggleClass('mini')
	})

	$('aside .menu .items button').click(function (e) {
		e.preventDefault()

		let horScroll = document.querySelector('.things_to_do .hor_scroll')

		currentSection = $(this).data('section')

		$('aside .menu .items button').removeClass('active')
		$(this).addClass('active')

		horScroll.scrollBy({ left: $('.things_to_do #section' + currentSection).position().left, top: 0, behavior: 'smooth' })
	})


	$('.things_to_do .next_link .btn').click(e => {
		e.preventDefault()

		let horScroll = document.querySelector('.things_to_do .hor_scroll')

		currentSection++

		if (currentSection > 6) { currentSection = 1 }

		$('aside .menu .items button').removeClass('active')
		$('aside .menu .items button[data-section="section' + currentSection + '"]').addClass('active')

		horScroll.scrollBy({ left: $('.things_to_do #section' + currentSection).position().left, top: 0, behavior: 'smooth' })
	})


	$('header .mob_menu_btn').click(e => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('aside_open')
		$('aside').toggleClass('show')
	})


	if (is_touch_device()) {
		// Закрытие боковой колонки свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('aside_open') && ts > te + 50) {
				// Свайп справо на лево
				$('header .mob_menu_btn').toggleClass('active')
				$('body').toggleClass('aside_open')
				$('aside').toggleClass('show')
			}
		})
	}


	// Жители сколково
	$('.residents .next_link .btn').click(e => {
		e.preventDefault()

		let horScroll = document.querySelector('.residents .hor_scroll')

		horScroll.scrollBy({ left: $('.residents .item').width(), top: 0, behavior: 'smooth' })
	})


	// Анимация стрелки
	animations = true
	arrowShow()

	$('.next_link a, .next_link .btn').mouseover(function (e) {
		animations = false
		$('.next_link a, .next_link .btn').removeClass('animate_show animate_hide')
	})

	$('.next_link a, .next_link .btn').mouseleave(function (e) {
		animations = true
		arrowHide()
	})
})


$(window).on('load', () => {
	// Прелоадер
	setTimeout(() => {
		$('.loader').fadeOut(200)
		$('.wrap').addClass('show')
	}, 1000)
})


const arrowShow = () => {
	if (animations) {
		$('.next_link a, .next_link .btn').removeClass('animate_hide')
		$('.next_link a, .next_link .btn').addClass('animate_show')

		setTimeout(() => arrowHide(), 2000)
	}
}

const arrowHide = () => {
	if (animations) {
		$('.next_link a, .next_link .btn').removeClass('animate_show')
		$('.next_link a, .next_link .btn').addClass('animate_hide')

		setTimeout(() => arrowShow(), 500)
	}
}


const galleryWidth = () => {
	let masonryWrap = $('.gallery .masonry_wrap'),
		masonry = $('.gallery .masonry')

	if (masonry.outerHeight() > masonryWrap.outerHeight()) {
		masonryWrap.width(masonryWrap.width() + 10)

		setTimeout(() => { galleryWidth() })
	} else {
		$('.gallery .masonry_wrap').height('auto')
	}
}
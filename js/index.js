
document.addEventListener("DOMContentLoaded", function(){
	
		const links = document.querySelectorAll('.menu__item-link')


		// ---------------
		for(let item of links) {
			item.addEventListener("click", (e)=>{
				e.preventDefault();
				scrollTo( document.querySelector( e.target.getAttribute('href') ) )				
			})
		}

		function scrollTo(element) {
			window.scroll({
				left: 0,
				top: element.offsetTop,
				behavior: 'smooth'
			});

			if(document.documentElement.clientWidth < 768) {
				menuBtn.classList.toggle("menu-icon_active")
				navMenu.classList.toggle("nav-active")			
				document.body.classList.toggle("body-scroll")	
			}
		}
		// ---------------

		// ---------------
		const menuBtn = document.getElementById("menu-icon")
		const navMenu = document.getElementById("nav-menu")

		menuBtn.addEventListener("click", (e) => {			
			menuBtn.classList.toggle("menu-icon_active")
			navMenu.classList.toggle("nav-active")			
			document.body.classList.toggle("body-scroll")			
		})
		// ---------------

		// ---------------
console.log(`- вёрстка валидная (10/10)
- вёрстка семантическая (16/20)
[ ]aside, 
[ ]figure, 
[ ]figcaption, 
[x]footer, 
[x]header, 
[x]main, 
[x]nav, 
[x]section, (исп-ся на страницах проектов)
[x]h1
[x]h2
[x]h3
- для оформления СV используются css-стили (10/10)
- контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы	(10/10)
- вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется (10/10)
- есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. (10/10)
- на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) (10/10)
- контакты для связи и перечень навыков оформлены в виде списка ul > li	(10/10)
- CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (10/10)
- CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js (10/10)
- CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. (10/10)
- CV выполнено на английском языке (10/10)
- выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт)	(10/10)
- есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена его транскрипция на английском языке. +10 Вниманию авторов работы. Убедитесь, что видео проигрывается и ссылка на транскрипцию открывается в режиме инкогнито браузера. (0/10)
- дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) (10/10)
- Итого: (146/160)`);			
		// ---------------

	});
	

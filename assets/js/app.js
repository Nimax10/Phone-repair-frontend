let app = new Vue({
	el: '#app',
	data: {
		currentTimeMain: 5,
		currentImageMain: 0,
		timerMain: null,
		currentPage: 'main-page',
		callback: 'false',
		currentPhone: null,
		currentModel: null,
		typeRepair: 0,
		burgMenu: false,
		typesRepair: [
			{
				name: 'Замена стекла',
				description: 'Если у вас есть изображение на дисплее и разбито только верхнее стекло, то можем предложить вам замену только стекла',
				list: [
					'Цена ремонта - 4000 руб',
					'Профессиональное оборудование позволяет менять стёкла по заводской технологии',
				]
			},
			{
				name: 'Замена дисплея',
				description: 'Нет изображения, пятна или полосы на дисплее, часть экрана не показывает',
				list: [
					'Цена ремонта - 1000 руб',
					'Свой склад запчастей',
					'Возможен выезд курьера туда и обратно',
				]
			},
			{
				name: 'Замена разъёма зарядки',
				description: 'Не заряжается, провод пошевелить и заряд идёт, выломан сам разъём',
				list: [
					'Цена ремонта - 1400 руб',
					'Замена разъёма в течении 1 часа',
				]
			},
			{
				name: 'Замена разъёма сим карты',
				description: 'Не правильно вытащили или вставили сим карту и повредили сам разъём',
				list: [					
					'Цена замены - 1800 руб',
					'Замена разъёма sim rider в течении 1 часа',
				]
			},
			{
				name: 'Замена аккумулятора',
				description: 'Плохо держит заряд, батарея быстро разряжается, выключился и не включается',
				list: [	
					'Цена ремонта - 2000 руб',
					'Замена аккумулятора в течении 20 минут',
				]
			},
			{
				name: 'Замена слухового динамика',
				description: 'Плохо слышно собеседника или вообще не слышно',
				list: [					
					'Цена ремонта - 1400 руб',
					'Замена слухового динамика в течении 30 минут',
				]
			},
			{
				name: 'Замена микрофона',
				description: 'Собеседник вас плохо слышит или вообще не слышит',
				list: [					
					'Цена ремонта - 1800 руб',
					'Замена микрофона в течении 1 часа',
				]
			},
			{
				name: 'Ремонт после воды',
				description: 'Не включается, перезагружается, не показывает',
				list: [
					'Многое зависит от самой воды и сколько он в ней пробыл времени. Звоните и уточняйте у наших менеджеров',
				]
			},
		],
		phones: [
			{
				name: 'iPhone',
				imageCompany: 'assets/css/img/images/kisspng-apple-electric-car-project-logo-apple-icon-5b0d434261a8d6.0165110115275958424.png',
				widthLogo: '100',
				heightLogo: '110',
				models: [
					{
						nameModel: 'iPhone X',
						imgModel: 'assets/css/img/images/12136.jpeg'
					},
					{
						nameModel: 'iPhone Xs Max',
						imgModel: 'assets/css/img/images/12234.jpeg'
					},
					{
						nameModel: 'iPhone 11',
						imgModel: 'assets/css/img/images/12369.jpeg'
					},
					{
						nameModel: 'iPhone 11 Pro',
						imgModel: 'assets/css/img/images/12368.jpeg'
					},
					{
						nameModel: 'iPhone 11 Pro Max',
						imgModel: 'assets/css/img/images/12367.jpeg'
					},
				],
			},
			{
				name: 'Samsung',
				imageCompany: 'assets/css/img/images/kisspng-samsung-galaxy-logo-5afb3965f24634.0810049415264136699924.png',
				widthLogo: '100',
				heightLogo: '105',
				models: [
					{
						nameModel: 'Samsung Galaxy Note 9',
						imgModel: 'assets/css/img/images/12227.jpeg'
					},
					{
						nameModel: 'Samsung Galaxy S9',
						imgModel: 'assets/css/img/images/12159.jpeg'
					},
					{
						nameModel: 'Samsung Galaxy Note 8',
						imgModel: 'assets/css/img/images/11353.jpeg'
					},
					{
						nameModel: 'Samsung Galaxy S8 Plus',
						imgModel: 'assets/css/img/images/12137.jpeg'
					},
					{
						nameModel: 'Samsung Galaxy S8',
						imgModel: 'assets/css/img/images/11352.jpeg'
					},
				],
			},
			{
				name: 'Xiaomi',
				imageCompany: 'assets/css/img/images/kisspng-logo-brand-font-xiaomi-mi-note-5b0f38ebbc6b09.3789837215277242677718.png',
				widthLogo: '90',
				heightLogo: '70',
				models: [
					{
						nameModel: 'Xiaomi Mi9',
						imgModel: 'assets/css/img/images/12294.jpeg'
					},
					{
						nameModel: 'Xiaomi Redmi 4X',
						imgModel: 'assets/css/img/images/11368.jpeg'
					},
					{
						nameModel: 'Xiaomi Redmi Note 4',
						imgModel: 'assets/css/img/images/11328.jpeg'
					},
					{
						nameModel: 'Xiaomi Redmi Note 4X',
						imgModel: 'assets/css/img/images/11367.jpeg'
					},
					{
						nameModel: 'Xiaomi Mi6',
						imgModel: 'assets/css/img/images/12113.jpeg'
					},
				],
			},
			{
				name: 'Meizu',
				imageCompany: 'assets/css/img/images/kisspng-logo-brand-meizu-mobile-phones-telephone-spare-parts-archives-phoneparts-5b7a6fe7152428.0438681415347506950866.png',
				widthLogo: '90',
				heightLogo: '100',
				models: [
					{
						nameModel: 'Meizu U10',
						imgModel: 'assets/css/img/images/11326.jpeg'
					},
					{
						nameModel: 'Meizu U20',
						imgModel: 'assets/css/img/images/11327.jpeg'
					},
					{
						nameModel: 'Meizu MX5',
						imgModel: 'assets/css/img/images/11195.jpeg'
					},
					{
						nameModel: 'Meizu MX6',
						imgModel: 'assets/css/img/images/11288.jpeg'
					},
					{
						nameModel: 'Meizu Pro 6',
						imgModel: 'assets/css/img/images/11291.jpeg'
					},
				],
			},
			{
				name: 'Huawei',
				imageCompany: 'assets/css/img/images/kisspng-logo-huawei-font-brand-vector-graphics-5bee62a319dd79.195598761542349475106.png',
				widthLogo: '90',
				heightLogo: '100',
				models: [
					{
						nameModel: 'Huawei Mate 20 lite',
						imgModel: 'assets/css/img/images/12261.jpeg'
					},
					{
						nameModel: 'Huawei Mate 20',
						imgModel: 'assets/css/img/images/12260.jpeg'
					},
					{
						nameModel: 'Huawei P30 Pro',
						imgModel: 'assets/css/img/images/12306.jpeg'
					},
					{
						nameModel: 'Huawei P30 lite',
						imgModel: 'assets/css/img/images/12307.jpeg'
					},
					{
						nameModel: 'Huawei P30',
						imgModel: 'assets/css/img/images/12305.jpeg'
					},
				],
			},
		]
	  },
	  mounted() {
		this.starttimerMain()
	  },
	  destroyed() {
		this.stoptimerMain()
	  },
	  methods: {
		starttimerMain() {
		  this.timerMain = setInterval(() => {
			this.currentTimeMain--
		  }, 1000)
		},
		stoptimerMain() {
		  clearTimeout(this.timerMain)
		},
	  },
	  watch: {
		currentTimeMain(time) {
		  if (time === 0) {
			if (this.currentImageMain === 3) {
				this.currentTimeMain = 5
				this.currentImageMain = 0
			} else {
				this.currentTimeMain = 5
				this.currentImageMain++
			}
		  }
		}
	  },

	// data: {
	// 	// message: 'Hello, Nimax',
	// 	// date: 'А вот и текст, а страница загружена ' + new Date().toLocaleString(),
	// 	// seen: true,
	// 	// textArr: [
	// 	// 	{ text: 'Вот первый текст' },
	// 	// 	{ text: 'Вот второй текст' },
	// 	// 	{ text: 'Вот третий текст' },
	// 	// 	{ text: 'Вот четвёртый текст' },
	// 	// ],
	// 	// message2: 'Далее тут сообщение, которое ты должен перевернуть нажав кнопку. Чтож, жми!',
	// 	// message3: 'Ты очень плохой и неприятный человек!',
	// 	// seen2: true,
	// 	// groceryList: [
	// 	// 	{ id: 0, text: 'Овощи'},
	// 	// 	{ id: 1, text: 'Сыр'},
	// 	// 	{ id: 2, text: 'Что там ещё люди едят?'}
	// 	// ]
	// },
	// methods: {
	// 	// reverseMessage: function () {
	// 	// 	this.message2 = this.message2.split('').reverse().join('')
	// 	// },
	// 	// replaceBetter: function () {
	// 	// 	this.message3 = 'Ты хороший и позитивный человек~',
	// 	// 	this.seen2 = false
	// 	// }
	// }
})
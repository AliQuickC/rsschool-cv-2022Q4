### Name:
Alekhin Aleksandr

### Contacts:
- email: aleksandera9@gmail.com
- site: https://ax-t.ru/


### About me:
I want to master the profession of a front-end developer. Studied HTML layout. Now I am studying programming in JS.


### Skills:
- HTML
- CSS
- Sass
- Gulp
- jQuery
- Верстка
- Git
- Bootstrap
- JavaScript
- TypeScript
- Webpack
- Babel

### Code example:
```
// pattern publisher
export class Publisher {
	_triggerEvent(eventName, e) { // универсальная ф-ция вызова различных событий

		if (!this.listeners) { // если объект listeners не существует
			this.listeners = {}; // создаем его
		}
		if (!!this.listeners[eventName]) { // если массив eventName, внутри объекта listeners, существует
			this.listeners[eventName].forEach((callback) => { // вызов ф-ций, из массива
				callback(e);
			});
		}
	}

	addEventListener(eventName, listener) { // ф-ция добавляет новые события, в массив ф-ций eventName, внутри объекта listeners
		if (!this.listeners) { // если объект listeners не существует
			this.listeners = {}; // создаем его
		}
		if (!this.listeners[eventName]) { // если массива listeners[key] внутри объекта listeners не существует
			this.listeners[eventName] = [];	// создаем его
		}
		this.listeners[eventName].push(listener);
	}
}
```

### Working experience:
- Completed a course on layout. I passed my diploma project on the course, a multi-page site. I also designed a few more sites for my portfolio.
- Development in a team, SPA applications for learning English, on the RS School course.


### Education:

- 2021 - RSSchool JavaScript/Front-end course

- 2019 - Website layout course

- 2000 – 2003г. - SPbGUAP
Specialty: "software for computer technology
  and automated systems "

- 1996 - 2000г. - S-Pb College of Telecommunications
Specialty: "software for computer technology
  and automated systems "


### English proficiency:
Beginner

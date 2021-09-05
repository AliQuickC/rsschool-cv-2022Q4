### Name:
Alekhin Aleksandr

### Contacts:
- email: aleksandera9@gmail.com
- site: https://ax-t.ru


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
- Webpack 
- Babel

### Code example:

```
// pattern event emiter
Publisher = function() {
	this._triggerEvent = function (eventName, e) {
		if (!this.listeners) {
			this.listeners = {};
		}
		if (!!this.listeners[eventName]) {
			this.listeners[eventName].forEach((callback) => {
				callback(e);
			});
		}
	}
	this.addEventListener = function (eventName,
	listener) {
		if (!this.listeners) {
			this.listeners = {};
		}
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}
		this.listeners[eventName].push(listener);
	}
}
```

### Working experience:
Completed a course on layout. I passed my diploma project on the course, a multi-page site. I also designed a few more sites for my portfolio.


### Education:

- 2019 - Website layout course

- 2000 – 2003г. - SPbGUAP
Specialty: "software for computer technology
  and automated systems "

- 1996 - 2000г. - S-Pb College of Telecommunications
Specialty: "software for computer technology
  and automated systems "


### English proficiency: 
Beginner

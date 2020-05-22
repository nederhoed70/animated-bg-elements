import Model from './class/model.js';
const dom = {
	main: document.getElementById('animated-figures'),
};

const generateFigure = () => {
	let figure = {
		settings: new Model(),
		transition: new Model(),
		randomId:
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15),
	};

	let createFigure = document.createElement('div');
	createFigure.className = 'animated-figure';
	createFigure.id = figure.randomId;
	dom.main.appendChild(createFigure);

	let figureToStyle = document.getElementById(figure.randomId).style;
	figureToStyle = Object.assign(figureToStyle, figure.settings.dimensions);
	setTimeout(() => {
		figureToStyle = Object.assign(figureToStyle, figure.transition.dimensions);
	}, figure.transition.timeout);
};
document.addEventListener('click', () => {
	//generateFigure();
	for (let i = 0; i < 8; i++) {
		setTimeout(generateFigure(), 800);
	}
});

class Model {
	randomPercentage = () => {
		return Math.floor(Math.random() * 100) + '%';
	};
	randomBorderWidth = () => {
		return Math.floor(Math.random() * 40) + 'px';
	};
	randomDimension = () => {
		return Math.floor(Math.random() * 300) + 'px';
	};
	randomColor = () => {
		let rgb = [];
		for (let i = 0; i <= 3; i++) {
			rgb.push(Math.floor(Math.random() * 255));
		}
		return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
	};
	randomTransition = () => {
		return `all ${2 + Math.floor(Math.random() * 6)}s ease`;
	};
	randomTimeout = () => {
		return Math.floor(Math.random() * 1000);
	};
	randomZ = () => {
		return -900 - Math.floor(Math.random() * 100);
	};

	dimensions = {
		zIndex: this.randomZ(),
		left: this.randomPercentage(),
		top: this.randomPercentage(),
		width: this.randomDimension(),
		height: this.randomDimension(),
		borderStyle: 'solid',
		borderRadius: this.randomPercentage(),
		borderWidth: this.randomBorderWidth(),
		borderColor: this.randomColor(),
		backgroundColor: this.randomColor(),
		transition: this.randomTransition(),
		opacity: this.randomPercentage(),
	};

	timeout = this.randomTimeout();
}

export default Model;

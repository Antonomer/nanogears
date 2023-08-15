
function searchQuery(query) {
	const q = ["BMW 2 Series", "BMW 3 Series", "BMW 5 Series", "BMW 6 Series", "BMW 7 Series", "BMW i4", "BMW i7", "BMW iX", "BMW M2", "BMW M4 Competition", "BMW M8 Coupe Competition", "BMW x1", "BMW x3", "BMW x5", "BMW x7", "BMW xm", "BMW Z4", "Enzo f12tdf", "Enzo Ferrari", "Ferrari 458 Italia", "Ferrari 550", "Ferrari 575m Maranello", "Ferrari 612 Scaglietti", "Ferrari f12 berlinetta", "Ferrari FF", "Ferrari GTC4 Lusso", "Ferrari Testa Rossa", "Ferrari 488 Spider", "Ferrari California T", "Ford C Max", "Ford EcoSport", "Ford Escape", "Ford Everest", "Ford Expedition", "Ford Explorer", "Ford Fusion", "Ford Mustang", "Ford Ranger", "Porsche 911", "Porsche 918 Spyder", "Porsche Cayenne", "Porsche Cayman S", "Porsche Macan", "Porsche Panamera", "Tesla Model 3", "Tesla Model S", "Tesla Model X", "Tesla Model Y", "Big", "Electric", "Yellow", "White", "Blue", "Dark Blue", "Gray", "Silver", "Brown", "Black", "Red", query]
	const qv = ["src/bmw/bmw2series", "src/bmw/bmw3series", "src/bmw/bmw5series", "src/bmw/bmw6series", "src/bmw/bmw7series", "src/bmw/bmwi4", "src/bmw/bmwi7", "src/bmw/bmwix", "src/bmw/bmwm2", "src/bmw/bmwm4competition", "src/bmw/bmwm8coupecompetition", "src/bmw/bmwx1", "src/bmw/bmwx3", "src/bmw/bmwx5", "src/bmw/bmwx7", "src/bmw/bmwxm", "src/bmw/bmwz4", "src/ferrari/enzof12tdf", "src/ferrari/enzoferrari", "src/ferrari/ferrari458italia", "src/ferrari/ferrari550", "src/ferrari/ferrari575mmaranllo", "src/ferrari/ferrari612scaglietti", "src/ferrari/ferrarif12berlinetta", "src/ferrari/ferrariff", "src/ferrari/ferrarigtc4lusso", "src/ferrari/ferraritestarossa", "src/ferrari/frr488spider", "src/ferrari/frrcaliforniat", "src/ford/fordcmax", "src/ford/fordecosport", "src/ford/fordescape", "src/ford/fordeverest", "src/ford/fordexpedition", "src/ford/fordexplorer", "src/ford/fordfusion", "src/ford/fordmustang", "src/ford/fordranger", "src/porsche/porsche911", "src/porsche/porsche918spyder", "src/porsche/porschecayenne", "src/porsche/porschecaymans", "src/porsche/porschemacan", "src/porsche/porschepanamera", "src/tesla/teslamodel3", "src/tesla/teslamodels", "src/tesla/teslamodelx", "src/tesla/teslamodely", "src/big-sized-cars", "src/electric-cars", "src/yellow-cars", "src/white-cars", "src/blue-cars", "src/dark-blue-cars", "src/gray-cars", "src/silver-cars", "src/brown-cars", "src/black-cars", "src/red-cars", "src/404"]

	// console.log(q.length)

	for(i = 0; i <= 60; i++) {
		if (query == q[i]) {
			a(qv[i]);
			break;
		}
	}
}
function a(val) {
	document.querySelector('.anonymous-link').href = val + '.html';
	document.querySelector('.anonymous-link').click();
}
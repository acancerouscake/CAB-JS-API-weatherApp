const config = {
	var: {
		baseTomorrowIOURL: "https://api.tomorrow.io/v4",
		baseFlexWeatherURL: "https://flexweather.com/api",
		baseOpenWeatherURL: "https://api.openweathermap.org/data/2.5/",
		unSplashURL: "https://api.unsplash.com/photos/random",
		reverseGeocodeURL: "https://api.bigdatacloud.net/data/reverse-geocode-client",
		units: "metric",
		timesteps: "1h",
		count: "24",
		endTime: "auto+YYYY-MM-DDT23:59:59",
		startTime: "now",
		fields: [
			"temperature",
			"temperatureApparent",
			"humidity",
			"cloudCover",
			"weatherCodeFullDay",
			"treeIndex",
			"epaHealthConcern",
			"wildfireSmokeIndex",
			"floodIndex",
			"fireIndex",
			"windSpeed",
			"sunriseTime",
			"sunsetTime",
			"moonPhase",
		],
		getRequestHeaders: {method: "GET", headers: {accept: "application/json"}},
		timeOptions: {
			hour12: false,
			hour: "2-digit",
			minute: "2-digit",
		},

		dateOptions: {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		},

		sunnyConditions: [
			"../assets/lotties/clear.json",
			"../assets/lotties/partly-cloudy.json",
		],
		rainyConditions: [
			"../assets/lotties/partly-shower.json",
			"../assets/lotties/rain.json",
			"../assets/lotties/thunder.json",
			"../assets/lotties/rainy-night.json",
			"../assets/lotties/windy.json",
		],

		lottieConditions: {
			day: {
				cloudy: {src: "../assets/lotties/windy.json"},
				partlyCloudy: {src: "../assets/lotties/partly-cloudy.json"},
				partlyShowers: {src: "../assets/lotties/partly-shower.json"},
				rain: {src: "../assets/lotties/rain.json"},
				clear: {src: "../assets/lotties/clear.json"},
				thunderstorm: {src: "../assets/lotties/thunder.json"},
				snow: {src: "../assets/lotties/snow.json"},
				windy: {src: "../assets/lotties/mist.json"},
			},
			night: {
				cloudy: {src: "../assets/lotties/cloudy-night.json"},
				clear: {src: "../assets/lotties/night.json"},
				rain: {src: "../assets/lotties/rainy-night.json"},
				thunderstorm: {src: "../assets/lotties/thunder.json"},
				snow: {src: "../assets/lotties/snow-night.json"},
			},
		},
	},
};

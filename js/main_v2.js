

mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpbWFjdXMxODIiLCJhIjoiWGQ5TFJuayJ9.6sQHpjf_UDLXtEsz8MnjXw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'style3.json',
    // style: 'mapbox://styles/mapbox/streets-v8',
    minZoom: 4, //restrict map zoom
    maxZoom: 12,
    zoom: 6,
    center: [32.259271, 48.518688], 
    hash: false,
    tap: false
});

var hoveredStateId =  null;

let zelenskiColor = "#4e9a69";
let poroshenkoColor = "#790a4f";
let closeResultColor = "#4D7794";

map.scrollZoom.disable();

map.on('load', function () {
	var results = map.addLayer({
			"id": "election_districts",
			"type": "fill",
			"source": {
				type: 'vector',
				tiles: ["https://texty.github.io/president_elections_v2/tiles/{z}/{x}/{y}.pbf"]
			},
			"source-layer": "simplified_v2_4326",
			"paint": {
				"fill-opacity": [
							  "case",
							  ["boolean", ["feature-state", "hover"], false], 1,
							  ["has", "density"],
							  [
							    "interpolate",
							    ["exponential", 0.85],
							    ["get", "density"],
							    0.02,
							    0.1,
							    269000,
							    1
							  ],
							  0.8
							],
				"fill-color": [
					  "case",
					  ["boolean", ["feature-state", "hover"], false],'rgb(250,250,50)',
					  ["all", 
					  	  ["has", "poroshenko"], 
						  [
	  					    ">",
	  					    ["-", ["get", "poroshenko"], ["get", "zelenski"]],
	  					 	["*", ["get", "turnout"], 0.1]
	  					  ]
	  					],
					  poroshenkoColor,
					  ["all", ["has", "poroshenko"], [
  						"<",
  					    ["-", ["get", "poroshenko"], ["get", "zelenski"]],
  					 	["*", ["get", "turnout"], -0.1]
  					  ]],
						zelenskiColor,
					  [
						"has", "poroshenko"
					  ],
						closeResultColor,
					  "#777"
					]
			}
		}, 'place_other');


		var turnover = map.addLayer({
			"id": "election_districts_turnover",
			"type": "fill",
			"source": {
				type: 'vector',
				tiles: ["https://texty.github.io/president_elections_v2/tiles/{z}/{x}/{y}.pbf"]
			},
			"source-layer": "simplified_v2_4326",
			"paint": {
				"fill-opacity": [
					"interpolate", ["linear"], ["get", "turnout"], 
					0, 0,
					30, 0.2,
					50, 0.3,
					60, 0.4,
					100, 1 
							],
				"fill-color": ["case",
				["boolean", ["feature-state", "hover"], false],'rgb(250,250,50)',
				 ["has", "poroshenko"],
				  closeResultColor, "#ddd"]
			}
		}, 'place_other');

		map.setLayoutProperty('election_districts_turnover', 'visibility', 'none');


		map.addLayer({
			"id": "election_districts_lines",
			"type": "line",
			"source": {
				type: 'vector',
				tiles: ["https://texty.github.io/president_elections_v2/tiles/{z}/{x}/{y}.pbf"]
			},
			"source-layer": "simplified_v2_4326",
			// "layout": {
			// 	"line-join": "round",
			// 	"line-cap": "round"
			// },
			"paint": {
				"line-width": [
					"interpolate", ["linear"], ["zoom"], 
					6, 0,
					8, 0.4 
			],
				"line-color": "#ddd"
			}
		});


	// Create a popup, but don't add it to the map yet.
	var popup = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});


	map.on('click', 'election_districts', function(e) {
		// Change the cursor style as a UI indicator.
		// map.getCanvas().style.cursor = 'pointer';

		if (e.features[0].properties.poroshenko) {
			var coordinates = e.features[0].geometry.coordinates.slice();
			var density = e.features[0].properties.density;
			 
			// Ensure that if the map is zoomed out such that multiple
			// copies of the feature are visible, the popup appears
			// over the copy being pointed to.
			while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
			}
			 
			// Populate the popup and set its coordinates
			// based on the feature found.
	
	
			popup.setLngLat(e.lngLat)
			.setHTML("Номер дільниці: " + "<b>" + e.features[0].properties.d + "</b>" 
														+ "</br>" + "<span>За Зеленського: "  
														+ '<b>' + e.features[0].properties.zelenski + ' голоси' + '</b>' +  "</span>"
														+ "</br>" + "<span>За Порошенка: "  
														+ '<b>' + e.features[0].properties.poroshenko + ' голоси' + '</b>' +  "</span>"  
														+ "</br>" + "<span>Явка на дільниці: "  
	+ '<b>' + e.features[0].properties.turnout+ '</b>' + "%</span>")
			.addTo(map);

		e.originalEvent.stopPropagation();	
		}

	});

	// map.on('click', function() {
	// 	if (popup.isOpen()) {
	// 		popup.remove()
	// 	}
	// })

	map.on('mousemove', 'election_districts', function(e) {
		// map.getCanvas().style.cursor = '';
		if (e.features.length > 0) {
		if (hoveredStateId) {
		map.setFeatureState({source: 'election_districts', sourceLayer: 'simplified_v2_4326', id: hoveredStateId}, { hover: false});
		}
		hoveredStateId = e.features[0].id;
		map.setFeatureState({source: 'election_districts', sourceLayer: 'simplified_v2_4326', id: hoveredStateId}, { hover: true});
		}


		map.getCanvas().style.cursor = 'pointer';
	});
	 
	map.on('mouseleave', 'election_districts', function(e) {
		if (hoveredStateId) {
		map.setFeatureState({source: 'election_districts', sourceLayer: 'simplified_v2_4326', id: hoveredStateId}, { hover: false});
		}
		hoveredStateId =  null;

		map.getCanvas().style.cursor = '';
	});



// turnover

var popupTurn = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false
});


	map.on('click', 'election_districts_turnover', function(e) {
		// Change the cursor style as a UI indicator.
		// map.getCanvas().style.cursor = 'pointer';
		 
		var coordinates = e.features[0].geometry.coordinates.slice();
		var density = e.features[0].properties.density;
		 
		// Ensure that if the map is zoomed out such that multiple
		// copies of the feature are visible, the popup appears
		// over the copy being pointed to.
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
		coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
		 
		// Populate the popup and set its coordinates
		// based on the feature found.
		popup.setLngLat(e.lngLat)
		.setHTML("Номер дільниці: " + "<b>" + e.features[0].properties.d + "</b>" 
													+ "</br>" + "<span>За Зеленського: "  
													+ '<b>' + e.features[0].properties.zelenski + ' голоси' + '</b>' +  "</span>"
													+ "</br>" + "<span>За Порошенка: "  
													+ '<b>' + e.features[0].properties.poroshenko + ' голоси' + '</b>' +  "</span>"  
													+ "</br>" + "<span>Явка на дільниці: "  
+ '<b>' + e.features[0].properties.turnout + '</b>' + "%</span>")
		.addTo(map);
	});

	map.on('mousemove', 'election_districts_turnover', function(e) {
		// map.getCanvas().style.cursor = '';
		if (e.features.length > 0) {
		if (hoveredStateId) {
		map.setFeatureState({source: 'election_districts_turnover', sourceLayer: 'simplified_v2_4326', id: hoveredStateId}, { hover: false});
		}
		hoveredStateId = e.features[0].id;
		map.setFeatureState({source: 'election_districts_turnover', sourceLayer: 'simplified_v2_4326', id: hoveredStateId}, { hover: true});
		}


		map.getCanvas().style.cursor = 'pointer';
	});
	 
	map.on('mouseleave', 'election_districts_turnover', function(e) {
		if (hoveredStateId) {
		map.setFeatureState({source: 'election_districts_turnover', sourceLayer: 'simplified_v2_4326', id: hoveredStateId}, { hover: false});
		}
		hoveredStateId =  null;

		map.getCanvas().style.cursor = '';
	});


})




map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.addControl(new MapboxGeocoder({
	accessToken: 'pk.eyJ1IjoiZHJpbWFjdXMxODIiLCJhIjoiWGQ5TFJuayJ9.6sQHpjf_UDLXtEsz8MnjXw',
	countries: 'ua',
	placeholder: 'Оберіть місто',
	mapboxgl: mapboxgl,
	// marker: {
	// 	color: 'none';
	// }
}));

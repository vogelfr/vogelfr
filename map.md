---
layout: page
title: Map
permalink: /map/
---

<div id='map'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1Ijoidm9nZWxmciIsImEiOiJjbHFyZTZ1cGg0ZnhyMnF0azBzdGxxY3M4In0.YRmYSadxVSGzAZTd55E6hA';
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
	center:[8.5, 47.1], // starting position [lng, lat]
	zoom: 9, // starting zoom
    projection: 'globe'
});
map.addControl(new mapboxgl.NavigationControl(visualizePitch = true));
</script>



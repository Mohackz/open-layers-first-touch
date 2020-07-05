import "ol/ol.css"
import {Map, View, Tile} from "ol"
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"
import {fromLonLat} from "ol/proj"
import geojson from "./geo.json"

console.log(geojson);


const djibouti = [42.590275,11.825138];

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat(djibouti),
    zoom: 8.5
  })
});
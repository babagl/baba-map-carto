import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { Coordinate } from 'ol/coordinate';
import GeoJSON from 'ol/format/GeoJSON';
import Draw, { createBox, createRegularPolygon } from "ol/interaction/Draw";
import Layer from 'ol/layer/Layer';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM.js';
import VectorSource from 'ol/source/Vector';
import { StyleLike } from 'ol/style/Style';
import { Polygon } from 'ol/geom';





const source = new VectorSource({ wrapX: false });


export const loadMap = (mapTarget: string, zoom: number, layer?: Layer) => {
    console.log('chargement de la carte ...');
    
        return new Map({
          target: mapTarget,
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          view: new View({
            center: [0, 0],
            zoom: zoom,
          }),
        });
}


interface GeoJSONVectorLayerOptions {
    styleFunction: StyleLike;
    opacity?: number;
    visible?: boolean;
  }
  


export const createGeoJSONVectorLayer = (
    url: string,
    options: GeoJSONVectorLayerOptions
  ): VectorLayer<VectorSource> => {
    console.log('creation de vecteur layer');
    
    const { styleFunction, opacity = 1, visible = true } = options;
    return new VectorLayer({
      source: new VectorSource({
        url: url,
        format: new GeoJSON()
      }),
      style: styleFunction,
      opacity: opacity,
      visible: visible
    });
  }


  // load map with rotation 

  export const rotateMap = (mapTarget: string, n:number, center: Coordinate | undefined) => {
    console.log("rotation...");
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: mapTarget,
      view: new View({
        center: center,
        rotation: Math.PI / n,
        zoom: 10,
      }),
    });
  }


  export const addInterraction = (type: any, map: Map) => {
    
    let geomFunction;
    if (type !== "None" || type !== null) {
      switch (type) {
        case "Box":
          geomFunction = createBox();
          break;
        case "Square":
          geomFunction = createRegularPolygon(4);
        case "Circle":
          geomFunction = function (coordinates: any, geometry: any) {
            const center = coordinates[0];
            const last = coordinates[coordinates.length - 1];
            const dx = center[0] - last[0];
            const dy = center[1] - last[1];
            const radius = Math.sqrt(dx * dx + dy * dy);
            const rotation = Math.atan2(dy, dx);
            const newCoordinates = [];
            const numPoints = 12;
            for (let i = 0; i < numPoints; ++i) {
              const angle = rotation + (i * 2 * Math.PI) / numPoints;
              const fraction = i % 2 === 0 ? 1 : 0.5;
              const offsetX = radius * fraction * Math.cos(angle);
              const offsetY = radius * fraction * Math.sin(angle);
              newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
            }
            newCoordinates.push(newCoordinates[0].slice());
            if (!geometry) {
              geometry = new Polygon([newCoordinates]);
            } else {
              geometry.setCoordinates([newCoordinates]);
            }
            return geometry;
          };
      }
    }
    const draw = new Draw({
      source: source,
      type: type,
      geometryFunction: geomFunction,
    });
    map.addInteraction(draw);
  };



import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { Coordinate } from 'ol/coordinate';
import GeoJSON from 'ol/format/GeoJSON';
import Layer from 'ol/layer/Layer';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM.js';
import VectorSource from 'ol/source/Vector';
import { StyleLike } from 'ol/style/Style';

export const loadMap = (mapTarget: string, zoom: number, layer?: Layer) => {
    console.log('chargement de la carte ...');
    
        const map = new Map({
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
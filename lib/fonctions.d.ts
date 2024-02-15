import Map from 'ol/Map.js';
import { Coordinate } from 'ol/coordinate';
import Layer from 'ol/layer/Layer';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { StyleLike } from 'ol/style/Style';
export declare const loadMap: (mapTarget: string, zoom: number, layer?: Layer) => Map;
interface GeoJSONVectorLayerOptions {
    styleFunction: StyleLike;
    opacity?: number;
    visible?: boolean;
}
export declare const createGeoJSONVectorLayer: (url: string, options: GeoJSONVectorLayerOptions) => VectorLayer<VectorSource>;
export declare const rotateMap: (mapTarget: string, n: number, center: Coordinate | undefined) => void;
export declare const addInterraction: (type: any, map: Map) => void;
export {};

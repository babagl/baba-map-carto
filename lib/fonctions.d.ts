import Map from "ol/Map.js";
import { Coordinate } from "ol/coordinate";
import Draw from "ol/interaction/Draw";
import { Snap } from "ol/interaction.js";
import Layer from "ol/layer/Layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
export declare const loadMap: (mapTarget: string, zoom: number, layer?: Layer) => Map;
interface GeoJSONVectorLayerOptions {
    styleFunction: StyleLike;
    opacity?: number;
    visible?: boolean;
}
export declare const createGeoJSONVectorLayer: (url: string, options: GeoJSONVectorLayerOptions) => VectorLayer<VectorSource>;
export declare const rotateMap: (mapTarget: string, n: number, center: Coordinate | undefined) => void;
export declare const addInteractions: (map: Map, selectedValue: any, source: VectorSource) => void;
export declare const removeInteractions: (map: Map, draw?: Draw, snap?: Snap) => void;
export declare const addWMSLayer: (map: Map, wmsUrl: string, store: string, layerName: string) => void;
export {};

import Layer from 'ol/layer/Layer';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { StyleLike } from 'ol/style/Style';
export declare const loadMap: (mapTarget: string, zoom: number, layer?: Layer) => void;
interface GeoJSONVectorLayerOptions {
    styleFunction: StyleLike;
    opacity?: number;
    visible?: boolean;
}
export declare const createGeoJSONVectorLayer: (url: string, options: GeoJSONVectorLayerOptions) => VectorLayer<VectorSource>;
export {};

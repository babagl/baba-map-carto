import { Geometry } from 'ol/geom';
import { loadMap, addInteractions, removeInteractions } from './fonctions';
import Draw from 'ol/interaction/Draw';
import Snap from 'ol/interaction/Snap';
import VectorSource from 'ol/source/Vector';

// Initialisez la source pour vos dessins.
const source = new VectorSource();

// Initialisez la carte et stockez-la dans une variable globale.
const map = loadMap('map', 0);

// Initialisez les variables globales pour les interactions.
let draw: Draw | undefined;
let snap: Snap | undefined;

const selectElement = document.getElementById('interaction') as HTMLSelectElement;

// Configurez les interactions initiales et le gestionnaire de changement de type.
addInteractions(map, selectElement.value,source);

selectElement.addEventListener('change', () => {
    // Retirez les interactions précédentes avant d'en ajouter de nouvelles.
    removeInteractions(map, draw, snap);

    const selectedValue = selectElement.value;
    console.log('Interaction sélectionnée:', selectedValue);

    // Ajoutez de nouvelles interactions basées sur la valeur sélectionnée.
    addInteractions(map, selectedValue, source);
});






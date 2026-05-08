import {loadPerson, setupCreatePerson, setupSearchPerson} from './scripts/person.script.js';
import {loadCar, setupCreateCar} from './scripts/car.script.js';
import {loadAssociation} from './scripts/association.script.js';
import {loadNumber, setupCreateNP, } from './scripts/numberPhone.script.js'

async function loadAll(){
    await Promise.all([
        loadPerson(),
        loadCar(),
        loadAssociation(),
        loadNumber()
    ]);
}

document.addEventListener("DOMContentLoaded", () => {
    loadAll();
})

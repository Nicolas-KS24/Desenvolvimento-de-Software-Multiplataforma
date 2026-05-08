    const API_URL = '/car';

    const carList = document.getElementById('carList');

    // load Cars
    export async function loadCar(){
        const res = await fetch(API_URL);
        const car = await res.json();

        carList.innerHTML = "";
        car.forEach(c => {
            const li = document.createElement('li');
            const model = document.createElement('strong');
            model.textContent = c.model;

            const editBtn = document.createElement("button");
            editBtn.textContent = "Editar";
            editBtn.addEventListener("click", () => updateCar(c.id));

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Excluir";
            deleteBtn.addEventListener("click", () => deleteCar(c.id));

            li.appendChild(model);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);

            carList.appendChild(li);
        });
    }

    // Load by ID car
    export async function loadCarId(id){
        const res = await fetch(`${API_URL}/${id}`);
        const carId = await res.json();
        console.log(carId);
    }

    // Create
    export function setupCreateCar(){
        const carForm = document.getElementById('carForm');

        // Create new car
        carForm.addEventListener('submit', async(c) => {
        c.preventDefault();
        const model = document.getElementById('model').value;

            await fetch(API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({model})
            });
            carForm.reset();
            loadCar();
        });
    }


    // Delete car
    export async function deleteCar(id){
        await fetch(`${API_URL}/${id}`, {method: "DELETE"});
        loadCar();
    }

    // Update car
    export async function updateCar(id){
        const newModel = prompt("novo Modelo:");

        if(!newModel)   return;

        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({model: newModel})
        });
        loadCar();
    }
    loadCar();
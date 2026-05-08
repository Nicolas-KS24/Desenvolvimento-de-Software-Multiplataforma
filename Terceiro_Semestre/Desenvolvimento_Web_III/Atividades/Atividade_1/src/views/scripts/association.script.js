const API_URL = '/association';

// Load associations
export async function loadAssociation(){
    const res = await fetch(API_URL);
    const association = await res.json();
    const associationList = document.getElementById('associationList');

    associationList.innerHTML = "";
    association.forEach(a => {
        const tr = document.createElement("tr");

        const personId = document.createElement("td");
        personId.textContent = a.person.name;
        const carId = document.createElement("td");
        carId.textContent = a.car.model;

        const actionId = document.createElement("td");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.addEventListener("click", () => deleteAssociation(a.personId, a.carId));

        actionId.appendChild(deleteBtn);
        tr.appendChild(personId);
        tr.appendChild(carId);
        tr.appendChild(actionId);

        associationList.appendChild(tr);
    });
}

export function setupCreateAssociate(){
    const associationForm = document.getElementById('associationForm');

    associationForm,addEventListener("submit", async(a) => {
        a.preventDefault();
        const name = document.getElementById('name').value;
        const car = document.getElementById('car').value;

        await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, car})
        });
        associationForm.reset();
        loadAssociation();
    });
}

// Delete Association
export async function deleteAssociation(personId, carId){
    await fetch(`${API_URL}/${personId}/${carId}`, {method: "DELETE"});
    loadAssociation();
}

loadAssociation();
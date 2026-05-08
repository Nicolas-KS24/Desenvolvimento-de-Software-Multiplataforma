const API_URL = '/person';

const personDetails = document.getElementById('personDetails');
const personList = document.getElementById('personList');
const personForm = document.getElementById('personForm');
const personSelect = document.getElementById('personId');


// Load people
export async function loadPerson() {
    console.log("loadPerson running");

    if(!personList){
        console.error("personList not found in HTML");
        return;
    }

    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            alert("Error loading people");
            return;
        }
        const people = await res.json();

        personList.innerHTML = "";
        if(personSelect){
            personSelect.innerHTML = "";
        }

        people.forEach(p => {
            // Person liss
            const li = document.createElement('li');

            const nameDiv = document.createElement('div');
            const strong = document.createElement('strong');
            strong.textContent = `${p.id} - ${p.name}`;
            nameDiv.appendChild(strong);

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('actions');

            const editBtn = document.createElement('button');
            editBtn.textContent = "Editar";
            editBtn.addEventListener("click", () => updatePerson(p.id));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Excluir";
            deleteBtn.addEventListener("click", () => deletePerson(p.id));

            actionsDiv.appendChild(editBtn);
            actionsDiv.appendChild(deleteBtn);

            li.appendChild(nameDiv);
            li.appendChild(actionsDiv);

            personList.appendChild(li);

            // Select for numberPhone
            personSelect.add(new Option(p.name, p.id));
        });
    } catch (error) {
        alert("Error unexpected on loading people");
        console.log(error);
    }
}

// Load by ID person
export async function loadPersonId(id) {
    if(!personDetails){
        console.error("personDetails not found in HTML");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/${id}`);

        if (!res.ok) {
            alert("People not found");
            personDetails.innerHTML = "";
            return;
        }

        const person = await res.json();
        personDetails.innerHTML = "";

        const div = document.createElement("div");
        const title = document.createElement("h3");
        title.textContent = `Pessoa encontrada: ${person.name}`;

        div.appendChild(title);

        // Phones
        if (person.phones.length > 0) {
            const phoneTitle = document.createElement('p');
            phoneTitle.textContent = "Telefones:";
            div.appendChild(phoneTitle);

            const urlPhones = document.createElement("ul");

            person.phones.forEach(phone => {
                const li = document.createElement("li");
                li.textContent = phone.number;
                urlPhones.appendChild(li);
            });
            div.appendChild(urlPhones);
        }
        personDetails.appendChild(div);
    } catch (error) {
        alert("Error unxpedcted searching person");
        console.error(error);
    }
}

export function setupSearchPerson() {
    const searchBtn = document.getElementById('searchBtn');
    // Load by ID
    searchBtn.addEventListener("click", async () => {
        const id = document.getElementById("searchId").value;

        if (!id) {
            alert("Insert ID");
            return;
        }
        loadPersonId(id);
    });
}

export function setupCreatePerson() {

    // Create new person
    personForm.addEventListener('submit', async (p) => {
        p.preventDefault();

        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();

        if (!name) {
            alert("Name is required");
            return;
        }

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name })
            });

            if (!res.ok) {
                alert("Error creating person");
                return;
            }
            personForm.reset();
            loadPerson();
        } catch (error) {
            alert("Error unexpected on creting person");
            console.error(error);
        }
    });

}


// Delete person
export async function deletePerson(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

        if (!res.ok) {
            alert("Error deleting person");
            return;
        }
        loadPerson();
    } catch (error) {
        alert("Error unexpected on deleting person");
        console.error(error);
    }
}

// Update person
export async function updatePerson(id) {
    const newName = prompt("Novo Nome:");
    if (!newName || newName.trim() === "") {
        return;
    }

    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newName.trim() })
        });

        if (!res.ok) {
            alert("Error updating person");
            return;
        }
        loadPerson();
    } catch (error) {
        alert("Error unexpected on updating person");
        console.log(error);
    }
}

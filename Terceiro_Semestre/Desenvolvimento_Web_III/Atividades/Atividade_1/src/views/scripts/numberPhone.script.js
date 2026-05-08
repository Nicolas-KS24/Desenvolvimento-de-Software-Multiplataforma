const API_URL = "/number-phone";

const numberList = document.getElementById("numberList");
const personSelect = document.getElementById("personId");
const numberForm = document.getElementById("numberForm");

export async function loadNumber(){

    const res = await fetch(API_URL);
    const numbers = await res.json();

    numberList.innerHTML = "";

    numbers.forEach(n => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span><strong>${n.owner.name}:</strong> ${n.number}</span>
            <div class="actions">
                <button onclick="updateNumber(${n.id})">Editar</button>
                <button onclick="deleteNumber(${n.id})">Excluir</button>
            </div>
        `;

        numberList.appendChild(li);
    });
}

export function setupCreateNP(){

    numberForm.addEventListener("submit", async (e)=>{

        e.preventDefault();

        const number = document.getElementById("number").value;
        const personId = parseInt(personSelect.value);

        await fetch(API_URL,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({number, personId})
        });

        numberForm.reset();
        loadNumber();
    });
}